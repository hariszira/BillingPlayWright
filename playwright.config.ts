import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';  // Correct way to import dotenv

// Load environment variables from the .env file
config();  // This loads the environment variables

const ENV = process.env.ENV || 'DEV';  // Default to 'DEV' if ENV is not set

// Define the base URLs for each environment
const baseUrls = {
  DEV: process.env.DEV_URL,
  TEST: process.env.TEST_URL,
  DEMO: process.env.DEMO_URL
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseUrls[ENV] || process.env.DEV_URL,  // Select the correct URL based on ENV

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retry-with-trace',
    screenshot: "only-on-failure"
  },

  /* Configure projects for major browsers */
  projects: [
    /*{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },*/
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        deviceScaleFactor: undefined,
        viewport: null,
        headless: false,
        launchOptions: {
          args: ["--start-maximized"]
        }
      }
    }
    /* Other projects, e.g., for Firefox, Safari, etc. */
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
