import { Locator, Page } from "@playwright/test";

export class ControlerenEnOpslaanPage {

    private readonly page: Page;
    public readonly confirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmation = this.page.locator('#form-can-be-saved');
    }

    async save() {
        await this.page.getByRole('button', { name: 'Opslaan' }).click();
    }
}