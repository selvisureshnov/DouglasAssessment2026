import { Page, Locator, expect } from '@playwright/test';

export class CookiePage {
    private acceptButton: Locator;
    public page: Page;

    constructor(page: Page) {
        this.page = page;
        this.acceptButton = page.getByTestId('uc-accept-all-button');
    }

    async acceptCookies() {
        await this.page.waitForSelector('button[data-testid="uc-accept-all-button"]', { timeout: 10000 });
        await expect(this.acceptButton).toBeVisible();
        await this.acceptButton.click();
    }
}
