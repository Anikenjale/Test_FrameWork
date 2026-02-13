import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || "https://the-internet.herokuapp.com",
  HEADLESS: process.env.HEADLESS === "true",
  BROWSER: process.env.BROWSER || "chromium"
};
