import time
import os
from playwright.sync_api import sync_playwright

def verify_ui():
    if not os.path.exists("verification"):
        os.makedirs("verification")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        try:
            page.goto("http://localhost:5173", timeout=30000)
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification/final_check.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_ui()
