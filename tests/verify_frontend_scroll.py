from playwright.sync_api import sync_playwright
import time

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local server
        page.goto("http://localhost:5173")
        page.wait_for_load_state("networkidle")

        # Wait a bit for the first frame
        time.sleep(2)

        # Take a screenshot of the initial load
        page.screenshot(path="tests/screenshots/after_fix_initial_load.png", full_page=True)

        # Scroll down to trigger lazy loading and IntersectionObserver
        page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
        time.sleep(2)  # Wait for components to lazy load and reveal animation to trigger

        # Scroll down to the bottom
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(2)  # Wait for components to lazy load and reveal animation to trigger

        # Take a screenshot after scrolling
        page.screenshot(path="tests/screenshots/after_fix_scrolled.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_frontend()
