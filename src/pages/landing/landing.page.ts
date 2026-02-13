import { BasePage } from "../base.page";
import { config } from "../../config/config";
import { Page } from '@playwright/test';
import { logger } from "../../utils/logger"; // optional centralized logger

export class LandingPage extends BasePage {
    //constructor(private page: Page) {}

  async navigate() {
    try {
      await this.goto(config.baseURL);
      logger.info(`Navigated to ${config.baseURL}`);
    } catch (error) {
      logger.error(`Failed to navigate to ${config.baseURL}: ${error}`);
      throw error; // VERY IMPORTANT: re-throw to fail the test
    }
  }

  heading() {
    try {
      return this.page.locator("h1");
    } catch (error) {
      logger.error(`Failed to locate heading: ${error}`);
      throw error;
    }
  }

  subHeading() {
    try {
      return this.page.locator("h2");
    } catch (error) {
      logger.error(`Failed to locate subHeading: ${error}`);
      throw error;
    }
  }

  linkByText(text: string) {
    try {
      return this.page.locator(`a:has-text("${text}")`);
    } catch (error) {
      logger.error(`Failed to locate link with text "${text}": ${error}`);
      throw error;
    }
  }
}
