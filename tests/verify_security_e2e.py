from playwright.sync_api import sync_playwright

def verify_xss_prevention(page, selector, context_name):
    print(f"Verifying {context_name} input sanitization...")
    try:
        input_element = page.locator(selector).first

        # Ensure element is visible
        if not input_element.is_visible():
            print(f"  ❌ FAILURE: Input element not visible in {context_name}")
            return False

        # Test 1: XSS Injection
        malicious_input = '<script>alert("xss")</script>'
        expected_output = 'scriptalert("xss")/script' # sanitizeInput removes < and >

        print(f"  - Testing XSS input '{malicious_input}'...")
        input_element.fill(malicious_input)
        value = input_element.input_value()

        if value == malicious_input:
            print(f"  ❌ FAILURE: XSS input allowed in {context_name} (Value: '{value}')")
            return False
        elif value == expected_output:
            print(f"  ✅ SUCCESS: XSS input sanitized correctly in {context_name} (Value: '{value}')")
        else:
            # Maybe it removes quotes or something else? Let's be lenient if it removed < >
            if '<' not in value and '>' not in value:
                 print(f"  ✅ SUCCESS: XSS characters removed in {context_name} (Value: '{value}')")
            else:
                 print(f"  ⚠️ WARNING: Unexpected value '{value}' for XSS input in {context_name}")
                 return False

        # Test 2: Valid Name with Space (trim check)
        valid_input = 'Tejas Patel'
        print(f"  - Testing valid input with space '{valid_input}'...")
        input_element.fill(valid_input)
        value = input_element.input_value()

        if value == valid_input:
             print(f"  ✅ SUCCESS: Valid input preserved in {context_name}")
        else:
             print(f"  ❌ FAILURE: Valid input modified unexpectedly in {context_name} (Value: '{value}')")
             return False

        return True

    except Exception as e:
        print(f"  ❌ ERROR verifying {context_name}: {e}")
        return False

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to homepage...")
            page.goto("http://localhost:5173/")
            page.wait_for_timeout(2000) # Wait for initial load

            # Trigger exit intent
            print("\nTriggering Exit Intent Popup...")
            # Move mouse to center
            page.mouse.move(500, 500)
            page.wait_for_timeout(500)
            # Move mouse out upwards rapidly
            page.mouse.move(500, -50)
            page.wait_for_timeout(1500) # Wait for popup animation

            # Popup name input placeholder is "e.g. Amit Patel"
            popup_name_selector = "input[placeholder='e.g. Amit Patel']"

            popup_element = page.locator(popup_name_selector).first
            if popup_element.is_visible():
                if not verify_xss_prevention(page, popup_name_selector, "Exit Intent Popup Name"):
                    print("❌ Popup XSS Prevention Verification Failed")
                    exit(1)
                else:
                    print("✅ Popup XSS Prevention Verification Passed")
            else:
                print("❌ Exit Intent Popup not visible! Could not verify.")
                exit(1)

        except Exception as e:
            print(f"Script Error: {e}")
            exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    main()
