import sys
from playwright.sync_api import sync_playwright

def verify_phone_validation(page, selector, context_name):
    print(f"Verifying {context_name} phone input...")
    try:
        input_element = page.locator(selector).first

        # Test 1: Non-numeric input
        print(f"  - Testing non-numeric input 'abc'...")
        input_element.fill('abc')
        value = input_element.input_value()
        if value == 'abc':
            print(f"  ❌ FAILURE: Non-numeric input allowed in {context_name}")
            return False
        elif value == '':
            print(f"  ✅ SUCCESS: Non-numeric input blocked in {context_name}")
        else:
            print(f"  ⚠️ WARNING: Unexpected value '{value}' for non-numeric input in {context_name}")
            return False

        # Test 2: Length limit > 10
        print(f"  - Testing length limit (12 digits)...")
        input_element.fill('123456789012')
        value = input_element.input_value()
        if len(value) > 10:
            print(f"  ❌ FAILURE: Input length {len(value)} > 10 allowed in {context_name}")
            return False
        elif len(value) == 10:
            print(f"  ✅ SUCCESS: Input length limited to 10 in {context_name}")
        else:
            print(f"  ⚠️ WARNING: Unexpected length {len(value)} in {context_name}")
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

            # CTA Section Phone Input
            # Finding the input in CTA section.
            # The CTA component has an input with name="entry.1902268774" (based on constants.ts)
            # Or I can use placeholder="98797 37819" from CTA.tsx
            cta_phone_selector = "input[placeholder='98797 37819']"

            # Scroll to CTA section to ensure visibility
            cta_element = page.locator(cta_phone_selector).first
            if cta_element.count() > 0:
                cta_element.scroll_into_view_if_needed()
                if not verify_phone_validation(page, cta_phone_selector, "CTA Section"):
                    print("CTA Validation Failed")
            else:
                print("❌ CTA Phone input not found!")

            # Exit Intent Popup Phone Input
            # Trigger exit intent
            print("\nTriggering Exit Intent Popup...")
            page.mouse.move(500, 500)
            page.wait_for_timeout(500)
            page.mouse.move(500, -10) # Move mouse out upwards
            page.wait_for_timeout(1000) # Wait for popup animation

            # Popup input placeholder is "98765 43210" from ExitIntentPopup.tsx
            popup_phone_selector = "input[placeholder='98765 43210']"

            popup_element = page.locator(popup_phone_selector).first
            if popup_element.is_visible():
                if not verify_phone_validation(page, popup_phone_selector, "Exit Intent Popup"):
                    print("Popup Validation Failed")
            else:
                print("❌ Exit Intent Popup not visible!")

        except Exception as e:
            print(f"Script Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    main()
