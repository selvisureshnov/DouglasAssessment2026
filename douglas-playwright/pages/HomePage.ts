import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private parfumLink: Locator;

    constructor(page: Page) {
        super(page);
        this.parfumLink = page.getByRole('link', { name: 'Parfum' }).nth(0);
    }

    async clickParfum() {
        await this.parfumLink.click();
        await this.page.waitForLoadState('load');
    }
    async hoverParfum() {
        await this.parfumLink.hover();
    }
}
