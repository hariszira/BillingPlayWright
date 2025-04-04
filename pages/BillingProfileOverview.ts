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
  public profileNameColumn : Locator;
  public profileTypeColumn : Locator;
  public profileCodeColumn : Locator;
  public accountNameColumn : Locator;
  public statementDirectionColumn : Locator;
  public billFrequencyColumn : Locator;
  public invoiceTypeColumn : Locator;
  public systemCurrencyColumn : Locator;
  public billDueDaysColumn : Locator;
  public statusColumn : Locator;
  public validFromColumn : Locator;
  public validToColumn : Locator;
  public marketSegmentColumn : Locator;
  public cashFlowColumn : Locator;
  public financialMethodColumn : Locator;
  public formatDefinitionColumn : Locator;
  public descriptionColumn : Locator;
  public createdColumn : Locator;
  public createdByColumn : Locator;
  public modifiedColumn : Locator;
  public modifiedByColumn : Locator;
  
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
    this.profileNameColumn = page.locator('th[data-id="profileName"]');
    this.profileTypeColumn = page.locator('th[data-id="profileTypeCode"]');
    this.profileCodeColumn = page.locator('th[data-id="id"]');
    this.accountNameColumn = page.locator('th[data-id="accountName"]');
    this.statementDirectionColumn = page.locator('th[data-id="statementDirectionCode"]');
    this.billFrequencyColumn = page.locator('th[data-id="billFrequencyCode"]');
    this.invoiceTypeColumn = page.locator('th[data-id="invoiceTypeCode"]');
    this.systemCurrencyColumn = page.locator('th[data-id="systemReconCurrencyCode"]');
    this.billDueDaysColumn = page.locator('th[data-id="billDueDateCode"]');
    this.statusColumn = page.locator('th[data-id="status"]');
    this.validFromColumn = page.locator('th[data-id="validFrom"]');
    this.validToColumn = page.locator('th[data-id="validTo"]');
    this.marketSegmentColumn = page.locator('th[data-id="marketSegmentCode"]');
    this.cashFlowColumn = page.locator('th[data-id="revenueTypeCode"]');
    this.financialMethodColumn = page.locator('th[data-id="col-id="financialMethodCode""]');
    this.formatDefinitionColumn = page.locator('th[data-id="col-id="formatDefCode"]');
    this.descriptionColumn = page.locator('th[data-id="description"]');
    this.createdColumn = page.locator('th[data-id="created"]');
    this.createdByColumn = page.locator('th[data-id="createdBy"]');
    this.modifiedColumn = page.locator('th[data-id="modified"]');
    this.modifiedByColumn = page.locator('th[data-id="modifiedBy"]');
  };

    //this.filterInput = page.locator('input[name="filter"]');
    //this.sortDropdown = page.locator('select[name="sort"]');
    //this.dataTable = page.locator('table#overview-data');
    //this.paginationControls = page.locator('.pagination-controls');

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
