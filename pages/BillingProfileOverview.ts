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
    this.profileNameColumn = page.locator('span').filter({ hasText: 'Profile Name' });
    this.profileTypeColumn = page.locator('span').filter({ hasText: 'Profile Type' });
    this.profileCodeColumn = page.locator('#overview').getByRole('treegrid').locator('span').filter({ hasText: 'Profile Code' });
    this.accountNameColumn = page.locator('span').filter({ hasText: 'Account Name' });
    this.statementDirectionColumn = page.locator('span').filter({ hasText: 'Statement Direction' });
    this.billFrequencyColumn = page.locator('span').filter({ hasText: 'Bill Frequency' });
    this.invoiceTypeColumn = page.locator('span').filter({ hasText: 'Invoice Type' });
    this.systemCurrencyColumn = page.locator('span').filter({ hasText: 'System Currency' });
    this.billDueDaysColumn = page.locator('span').filter({ hasText: /^Bill Due Days$/ })
    this.statusColumn = page.locator('span').filter({ hasText: 'Status' });
    this.validFromColumn = page.locator('#overview span').filter({ hasText: 'Valid From' })
    this.validToColumn = page.locator('#overview span').filter({ hasText: 'Valid To' })
    this.marketSegmentColumn = page.locator('span').filter({ hasText: 'Market Segment' });
    this.cashFlowColumn = page.locator('span').filter({ hasText: 'Cash Flow' });
    this.financialMethodColumn = page.locator('span').filter({ hasText: 'Financial Method' });
    this.formatDefinitionColumn = page.locator('span').filter({ hasText: 'Format Definition' });
    this.descriptionColumn = page.locator('span').filter({ hasText: 'Description' });
    this.createdColumn = page.locator('#overview span').filter({ hasText: /^Created$/ })
    this.createdByColumn = page.locator('#overview span').filter({ hasText: 'Created By' })
    this.modifiedColumn = page.locator('#overview span').filter({ hasText: /^Modified$/ })
    this.modifiedByColumn = page.locator('#overview span').filter({ hasText: 'Modified By' })  
  };

  get columnLocators(): Locator[] {
    return [
      this.profileNameColumn,
      this.profileTypeColumn,
      this.profileCodeColumn,
      this.accountNameColumn,
      this.statementDirectionColumn,
      this.billFrequencyColumn,
      this.invoiceTypeColumn,
      this.systemCurrencyColumn,
      this.billDueDaysColumn,
      this.statusColumn,
      this.validFromColumn,
      this.validToColumn,
      this.marketSegmentColumn,
      this.cashFlowColumn,
      this.financialMethodColumn,
      this.formatDefinitionColumn,
      this.descriptionColumn,
      this.createdColumn,
      this.createdByColumn,
      this.modifiedColumn,
      this.modifiedByColumn     
    ];
  }
};
