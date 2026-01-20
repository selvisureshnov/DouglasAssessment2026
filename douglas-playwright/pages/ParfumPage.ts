import { Page, Locator, expect } from '@playwright/test';

export class ParfumPage {
    private productCards: Locator;
    private productHead: Locator;
    private filterHead: Locator;

    constructor(private page: Page) {
        this.productCards = page.locator('a[data-testid="main-link"]');
        this.productHead = page.locator('h1[data-testid="product-overview-headline"]');
        this.filterHead = page.locator('button[data-testid="menu-button-flags"]');
    }

    async applyHighlightFilter(filterName: string) {
        await this.filterHead.click();

        const filterCheckbox = this.page.locator(`#${filterName}`).first();

        await expect(filterCheckbox).toBeVisible();
        await filterCheckbox.click();

        await this.page.waitForLoadState('load');

        await this.filterHead.click();

    }

    async verifyProductsAreDisplayed() {
        await expect(this.productCards.first()).toBeVisible();
    }
}
