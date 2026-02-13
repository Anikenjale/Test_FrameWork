import { ENV } from "./env";

export const config = {
  baseURL: ENV.BASE_URL,
  headless: ENV.HEADLESS,
  browser: ENV.BROWSER,
  timeout: 30000
};
