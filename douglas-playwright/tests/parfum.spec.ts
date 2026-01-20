import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CookiePage } from '../pages/CookiePage';
import { ParfumPage } from '../pages/ParfumPage';
import filters from '../test-data/filters.json';

test.describe('Douglas Parfum Filters', () => {

  test('Verify products for highlight filter (Incognito)', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const homePage = new HomePage(page);
    const cookiePage = new CookiePage(page);
    const parfumPage = new ParfumPage(page);

    await homePage.navigate('https://www.douglas.de/de');
    await cookiePage.acceptCookies();
    await homePage.navigate('https://www.douglas.de/de/c/parfum/01');
    await parfumPage.verifyProductsAreDisplayed();

    for (const highlight of filters.highlights) {
      await parfumPage.applyHighlightFilter(highlight);
      await parfumPage.verifyProductsAreDisplayed();
    }

    await context.close();
  });

});
