import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe("Login to Billing Module and Verify Presence of Submodules", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login();
  });

  test('Verify Presence of Submodules', async ({ page }) => {
  
    const BillingHeader = page.locator('div.name:has-text("BILLING")');
    await expect(BillingHeader).toBeVisible({ timeout: 5000 });  // Assert that the Billing module is visible
  
    // Check the presence of submodules on Home Page
    const sections = ["Charge Management","Billing Profile","Approval","IBS Processing","Invoicing","Finance","Administration","Penalty"];
    
    for (const section of sections) {
      const locator = page.locator(`h2.label:has-text("${section}")`);
      await expect(locator).toBeVisible();
    }

    // Check the presence of submodules in Menu
    await page.locator('.fal.fa-bars').click();

    for (const item of sections) {
      const menuItemLocator = page.getByRole('link', { name: item })
      await expect(menuItemLocator).toBeVisible();
    }
  });
});
