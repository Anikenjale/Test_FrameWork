import { Before, After, Status } from "@cucumber/cucumber";
import { CustomWorld } from "../../world/custom.world";

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, "image/png");
  }
  await this.destroy();
});
