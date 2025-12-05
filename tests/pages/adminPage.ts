import { Page } from "@playwright/test";

export class AdminPage {

    private readonly url: string;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://toegewezen-uiterlijk-stem.abacus-test.nl/'
    }

    async open() {
        await this.page.goto(this.url);
    }

    async loginAs(role: string) {
        await this.page.getByRole('link', { name: role }).click();
    }

    async selectElection(election: string) {
        await this.page.getByRole('link', { name: election }).click();
    }
}