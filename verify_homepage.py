from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Navigate to the homepage
        url = "http://localhost:5173/"
        print(f"Navigating to {url}")
        page.goto(url)

        # Wait for content to load
        page.wait_for_load_state("networkidle")

        # Take a full page screenshot
        print("Taking full page screenshot...")
        page.screenshot(path="homepage_full.png", full_page=True)

        # Take section screenshots for better visibility
        sections = [
            "hero",
            "problem",
            "introducing",
            "changes",
            "audience",
            "how-it-works",
            "trust",
            "mentor",
            "testimonials",
            "cta"
        ]

        # Scroll and screenshot (approximated by viewport or just full page is enough for now)
        # I'll rely on full page screenshot as it captures everything in flow.

        print("Verification complete. Screenshot saved to homepage_full.png")
        browser.close()

if __name__ == "__main__":
    run()
