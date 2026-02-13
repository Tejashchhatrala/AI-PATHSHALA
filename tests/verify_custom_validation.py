from playwright.sync_api import sync_playwright

def verify_cta_validation(page):
    print("\n--- Verifying CTA Form Validation ---")

    # Locate CTA Section
    cta_section = page.locator("#enroll")
    cta_section.scroll_into_view_if_needed()

    # 1. Check Native Validation is Disabled (Implicitly by checking if custom message appears without browser blocking)
    # We will try to submit empty form
    submit_btn = cta_section.locator("button[type='submit']")
    submit_btn.click(force=True)

    # 2. Check for Custom Error Messages (English)
    # Name Error
    name_error = cta_section.locator("text=Name is required")
    if name_error.is_visible():
        print("✅ CTA Name Required Error Visible")
    else:
        print("❌ CTA Name Required Error NOT Visible")

    # Phone Error
    phone_error = cta_section.locator("text=WhatsApp number is required")
    if phone_error.is_visible():
        print("✅ CTA Phone Required Error Visible")
    else:
        print("❌ CTA Phone Required Error NOT Visible")

    # Grade Error
    grade_error = cta_section.locator("text=Grade is required")
    if grade_error.is_visible():
        print("✅ CTA Grade Required Error Visible")
    else:
        print("❌ CTA Grade Required Error NOT Visible")

    # 3. Check Error Disappears on Type
    name_input = cta_section.locator("input[name='entry.2005620554']") # Based on CTA.tsx read
    if not name_input.is_visible():
         # Fallback to placeholder if name not found (though name is reliable if I read correctly)
         name_input = cta_section.locator("input[placeholder='e.g. Rahul Patel']")

    name_input.fill("Tejas")
    if not name_error.is_visible():
        print("✅ CTA Name Error Disappeared on Type")
    else:
        print("❌ CTA Name Error Did NOT Disappear")

    # 4. Check Validation on Blur
    name_input.fill("") # Clear it
    name_input.blur() # Trigger blur
    if name_error.is_visible():
        print("✅ CTA Name Error Re-appeared on Blur")
    else:
        print("❌ CTA Name Error Did NOT Re-appear on Blur")

def verify_popup_validation(page):
    print("\n--- Verifying Exit Intent Popup Validation ---")

    # Trigger Popup
    # Move mouse out upwards
    page.mouse.move(500, 500)
    page.wait_for_timeout(500)
    page.mouse.move(500, -50)

    # Wait for popup
    popup = page.locator("text=Wait! Don't Leave Without This Exam Advantage.")
    try:
        popup.wait_for(timeout=3000)
        print("✅ Popup Triggered")
    except:
        print("❌ Popup Did NOT Trigger")
        return

    # 1. Submit Empty
    submit_btn = page.locator("button:has-text('Yes, Send Me The Study Upgrade PDF')")
    submit_btn.click()

    # 2. Check Errors
    name_error = page.locator("text=Name is required").first
    if name_error.is_visible():
         print("✅ Popup Name Required Error Visible")
    else:
         print("❌ Popup Name Required Error NOT Visible")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to localhost:5173...")
            page.goto("http://localhost:5173/")
            page.wait_for_timeout(2000)

            # Switch to English for easier assertion
            print("Switching to English...")
            page.locator("button:has-text('ENG')").click()
            page.wait_for_timeout(500)

            verify_cta_validation(page)

            # Refresh page to reset state for popup test (since popup shows once per session)
            # But popup uses sessionStorage, so we might need to clear it or use incognito context
            # Actually, the memory says sessionStorage 'ai_pathshala_exit_popup_seen'.
            # New page context should handle it? No, sessionStorage is per tab.
            # We can clear sessionStorage.

            print("Resetting session for Popup test...")
            page.evaluate("sessionStorage.clear()")
            page.reload()
            page.wait_for_timeout(2000)
            page.locator("button:has-text('ENG')").click()

            verify_popup_validation(page)

        except Exception as e:
            print(f"❌ Script Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    main()
