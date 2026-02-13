import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from "playwright";
import { config } from "../config/config";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async init() {
    const browserType =
      config.browser === "firefox"
        ? firefox
        : config.browser === "webkit"
        ? webkit
        : chromium;

    this.browser = await browserType.launch({
      headless: config.headless
    });

    this.context = await this.browser.newContext({
      recordVideo: { dir: "reports/videos" }
    });

    this.page = await this.context.newPage();
  }

  async destroy() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
