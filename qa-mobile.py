"""
Quick mobile + desktop QA. Captures screenshots at multiple widths
and reports any horizontal overflow.
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://localhost:3050"
ROUTES = [
    "/",
    "/rooms",
    "/rooms/premier-king-suite",
    "/rooms/whole-resort",
    "/about",
    "/dining",
    "/events",
    "/contact",
    "/journal",
]
WIDTHS = [360, 390, 768, 1280]

OUT = Path("qa-shots")
OUT.mkdir(exist_ok=True)


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for width in WIDTHS:
            ctx = browser.new_context(
                viewport={"width": width, "height": 800},
                device_scale_factor=2,
            )
            page = ctx.new_page()
            for route in ROUTES:
                url = BASE + route
                slug = route.replace("/", "_") or "_home"
                try:
                    page.goto(url, wait_until="networkidle", timeout=30_000)
                    overflow = page.evaluate(
                        "() => document.documentElement.scrollWidth - document.documentElement.clientWidth"
                    )
                    sw = page.evaluate("() => document.documentElement.scrollWidth")
                    cw = page.evaluate("() => document.documentElement.clientWidth")
                    flag = " *** OVERFLOW ***" if overflow > 1 else " OK"
                    print(f"  {width:>5}px  {route:<32} scroll={sw} client={cw} diff={overflow}{flag}")
                    page.screenshot(
                        path=str(OUT / f"{width}{slug}.png"),
                        full_page=False,
                    )
                except Exception as e:
                    print(f"  {width:>5}px  {route:<32} ERROR: {e}")
            ctx.close()
        browser.close()


if __name__ == "__main__":
    main()
