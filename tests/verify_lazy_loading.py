import sys
from playwright.sync_api import sync_playwright

def verify_lazy_loading():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to http://localhost:5173/...")
            page.goto("http://localhost:5173/", timeout=60000)
            page.wait_for_timeout(2000)

            # Scroll to Authority section to ensure elements are rendered
            # Using text locator for "Meet Your Mentor" which is in the Authority component
            # But the component uses bilingual text. Let's look for "Google" alt image directly.

            trust_badges_alts = ["Google", "Microsoft", "Oracle"]
            all_lazy = True

            for alt in trust_badges_alts:
                print(f"Checking trust badge: {alt}...")
                # Locate the image by alt text
                # We want the ones inside the specific container if possible, but strict alt match should suffice given the context
                locator = page.locator(f"img[alt='{alt}']").first

                if locator.count() == 0:
                    print(f"❌ Image with alt='{alt}' not found!")
                    all_lazy = False
                    continue

                # Scroll into view just in case
                locator.scroll_into_view_if_needed()

                # Check for loading attribute
                loading_attr = locator.get_attribute("loading")

                if loading_attr == "lazy":
                    print(f"✅ {alt}: loading='lazy' is present.")
                else:
                    print(f"❌ {alt}: loading attribute is '{loading_attr}' (expected 'lazy').")
                    all_lazy = False

            if all_lazy:
                print("\n✨ SUCCESS: All trust badges have loading='lazy'.")
                return True
            else:
                print("\n❌ FAILURE: One or more trust badges are missing loading='lazy'.")
                return False

        except Exception as e:
            print(f"An error occurred: {e}")
            return False
        finally:
            browser.close()

if __name__ == "__main__":
    success = verify_lazy_loading()
    if not success:
        sys.exit(1)
