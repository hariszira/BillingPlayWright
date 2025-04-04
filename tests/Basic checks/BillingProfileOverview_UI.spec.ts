//import { test, expect } from '@playwright/test';
import { BillingProfileOverviewPage } from '../../pages/BillingProfileOverview';
import { test, expect } from "../../fixtures/fixtures";

test.describe('Billing Profile Overview UI Tests', () => {
  let billingProfileOverviewPage: BillingProfileOverviewPage;
  const fullUrl = `${process.env.DEV_URL}/profile`;

  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.login();
  });

  test('Verify Overview Tab and is present and click on it', async ({ page }) => {
      billingProfileOverviewPage = new BillingProfileOverviewPage(page);
      await page.goto(fullUrl);
      await expect(billingProfileOverviewPage.overviewTabButton).toBeVisible({ timeout: 5000 });
      await billingProfileOverviewPage.overviewTabButton.click();
    });

  test('Verify OBS subgrids are present', async ({ page }) => {
    billingProfileOverviewPage = new BillingProfileOverviewPage(page);
    await page.goto(fullUrl);
    
    //Profile Field Button
    await expect(billingProfileOverviewPage.profileFieldButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.profileFieldButton.click();
   
    //Invoice Data Button
    await expect(billingProfileOverviewPage.invoiceDataButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.invoiceDataButton.click();
    
    //Profile Template Button
    /*await expect(billingProfileOverviewPage.ProfileTemplateButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.ProfileTemplateButton.click();*/
    
    //Approval Flow Button
    await expect(billingProfileOverviewPage.approvalFlowButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.approvalFlowButton.click();
    
    //Comment Button
    await expect(billingProfileOverviewPage.commentButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.commentButton.click();
    
    //History Button
    await expect(billingProfileOverviewPage.historyButton).toBeVisible({ timeout: 5000 });
    await billingProfileOverviewPage.historyButton.click();
  });

  // Add more tests as needed
});