//import { test, expect } from '@playwright/test';
import { BillingProfileOverviewPage } from '../../pages/BillingProfileOverview';
import { test, expect } from "../../fixtures/fixtures";

test.describe('Billing Profile Overview UI Tests', () => {
  let billingProfileOverviewPage: BillingProfileOverviewPage;
  const fullUrl = `${process.env.DEV_URL}/profile`;

  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.login();
    billingProfileOverviewPage = new BillingProfileOverviewPage(page);
    await page.goto(fullUrl);
  });

  test('Verify Overview Tab and is present and click on it', async ({ page }) => {
      await billingProfileOverviewPage.overviewTabButton.click();
    });

  test('Verify default subgrids are present upon Profile page loading', async ({ page }) => {
    await expect(billingProfileOverviewPage.profileFieldButton).toBeVisible;//Verify Profile Field Button is present
    await billingProfileOverviewPage.profileFieldButton.click();//Profile Field Button

    await expect(billingProfileOverviewPage.invoiceDataButton).toBeVisible;//Verify Invoice Data Button is present
    await billingProfileOverviewPage.invoiceDataButton.click();//Invoice Data Button

    await expect(billingProfileOverviewPage.approvalFlowButton).toBeVisible;//Verify Approval Flow Button is present
    await billingProfileOverviewPage.approvalFlowButton.click();

    await expect(billingProfileOverviewPage.commentButton).toBeVisible;//Verify Comment Button is present
    await billingProfileOverviewPage.commentButton.click();

    await expect(billingProfileOverviewPage.historyButton).toBeVisible;//Verify History Button is present
    await billingProfileOverviewPage.historyButton.click();
  });

test('Verify Predefined set of columns in the table', async ({ page }) => {
  const columnLocators = [
    billingProfileOverviewPage.profileNameColumn,
    billingProfileOverviewPage.profileTypeColumn,
    billingProfileOverviewPage.profileCodeColumn,
    billingProfileOverviewPage.accountNameColumn,
    billingProfileOverviewPage.statementDirectionColumn,
    billingProfileOverviewPage.billFrequencyColumn,
    billingProfileOverviewPage.invoiceTypeColumn,
    billingProfileOverviewPage.systemCurrencyColumn,
    billingProfileOverviewPage.billDueDaysColumn,
    billingProfileOverviewPage.statusColumn,
    billingProfileOverviewPage.validFromColumn,
    billingProfileOverviewPage.validToColumn,
    billingProfileOverviewPage.marketSegmentColumn,
    billingProfileOverviewPage.cashFlowColumn,
    billingProfileOverviewPage.financialMethodColumn,
    billingProfileOverviewPage.formatDefinitionColumn,
    billingProfileOverviewPage.descriptionColumn,
    billingProfileOverviewPage.createdColumn,
    billingProfileOverviewPage.createdByColumn,
    billingProfileOverviewPage.modifiedColumn,
    billingProfileOverviewPage.modifiedByColumn
  ];
  for (const [index, locator] of columnLocators.entries()) {
    await expect(locator, `Column at index ${index} should be visible`).toBeVisible();
  }
});

}
);

//Sort //Filter//Predefinisani set kolona//Rezultati pretrage ?//eXPORT i export selection