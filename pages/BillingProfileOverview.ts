import { Page, Locator } from "@playwright/test";

export class BillingProfileOverviewPage {
  public page: Page;
  public overviewTabButton: Locator;
  public profileFieldButton: Locator;
  public invoiceDataButton: Locator;
  public ProfileTemplateButton: Locator;
  public ibsTemplatesButton: Locator;
  public ibsMapTranslationRulesButton: Locator;
  public approvalFlowButton: Locator;
  public commentButton: Locator;
  public historyButton: Locator;
  public filterInput: Locator;
  public sortDropdown: Locator;
  public dataTable: Locator;
  public paginationControls: Locator;
  
  constructor(page: Page) {
    this.page = page
    this.overviewTabButton = page.locator('li[data-id="overview"]');
    this.profileFieldButton = page.locator('li[data-id="profile-field"]');
    this.invoiceDataButton = page.locator('li[data-id="invoice-data"]');
    this.ProfileTemplateButton = page.locator('li[data-id="profileTemplate"]');
    this.ibsTemplatesButton = page.locator('li[data-id="ibs-templates"]');
    this.ibsMapTranslationRulesButton = page.locator('li[data-id="translation"]');
    this.approvalFlowButton = page.locator('li[data-id="approvalFlow"]');
    this.commentButton = page.locator('li[data-id="comments"]');
    this.historyButton = page.locator('li[data-id="history"]');

    this.filterInput = page.locator('input[name="filter"]');
    this.sortDropdown = page.locator('select[name="sort"]');
    this.dataTable = page.locator('table#overview-data');
    this.paginationControls = page.locator('.pagination-controls');
  }

  // Metoda za filtriranje podataka
  async filterData(filterText: string): Promise<void> {
    await this.filterInput.fill(filterText);
  }

  // Metoda za sortiranje podataka
  async sortData(criteria: string): Promise<void> {
    await this.sortDropdown.selectOption({ label: criteria });
  }

  // Metoda za proveru da li je tabela prikazana
  async isDataTableVisible(): Promise<boolean> {
    return await this.dataTable.isVisible();
  }

  // Metoda za proveru da li su kontrole za paginaciju prisutne
  async isPaginationVisible(): Promise<boolean> {
    return await this.paginationControls.isVisible();
  }
}
