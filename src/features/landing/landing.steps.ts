import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../../world/custom.world";
import { LandingPage } from "../../pages/landing/landing.page";

let landingPage: LandingPage;

Given("I open the application", async function (this: CustomWorld) {
  landingPage = new LandingPage(this.page);
  await landingPage.navigate();
});

Then("I should see the heading {string}", async function (text: string) {
  await expect(landingPage.heading()).toHaveText(text);
});

Then("I should see {string} section", async function (text: string) {
  await expect(landingPage.subHeading()).toHaveText(text);
});

Then("I should see link {string}", async function (text: string) {
  await expect(landingPage.linkByText(text)).toBeVisible();
});
