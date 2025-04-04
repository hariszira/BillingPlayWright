import { Page, Locator } from "@playwright/test";

export class BillingProfileDefinitionPage {
  private readonly page: Page;
  private readonly createButton: Locator;
  private readonly editButton: Locator;
  private readonly deleteButton: Locator;
  private readonly nameInput: Locator;
  private readonly descriptionInput: Locator;
  private readonly submitButton: Locator;
  private readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createButton = page.locator('button#create');
    this.editButton = page.locator('button#edit');
    this.deleteButton = page.locator('button#delete');
    this.nameInput = page.locator('input[name="name"]');
    this.descriptionInput = page.locator('input[name="description"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.cancelButton = page.locator('button[type="button"]');
  }

  // Metoda za kreiranje novog unosa
  async createNewEntry(name: string, description: string): Promise<void> {
    await this.createButton.click();
    await this.nameInput.fill(name);
    await this.descriptionInput.fill(description);
    await this.submitButton.click();
  }

  // Metoda za izmenu postojećeg unosa
  async editExistingEntry(newName: string, newDescription: string): Promise<void> {
    await this.editButton.click();
    await this.nameInput.fill(newName);
    await this.descriptionInput.fill(newDescription);
    await this.submitButton.click();
  }

  // Metoda za brisanje unosa
  async deleteEntry(): Promise<void> {
    await this.deleteButton.click();
  }

  // Metoda za odustajanje od promene
  async cancelChanges(): Promise<void> {
    await this.cancelButton.click();
  }
}
