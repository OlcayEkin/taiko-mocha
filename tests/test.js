"use strict";
const { openBrowser, write, closeBrowser, goto, press, text, focus, inputField, toRightOf, intercept, click, listItem, below, deleteCookies } = require('taiko');
const assert = require("assert");
const headless = false;

describe('Getting Started with Mocha and Taiko', () => {

    before(async () => {
        await openBrowser({ headless: headless });
    });

    describe('Trendyol check list item', () => {

        it('Go to trendyol.com', async () => {
            await intercept("https://www.trendyol.com/api/home/banners?systemName=HomeIndex&position=right&cssClass=bannerItem%20homepage-banner-item&isMillaboutique=False");
            await goto("https://www.trendyol.com/");
        });

        it('Search for "Erkek Saat"', async () => {
            await click("Erkek");
            await write("Erkek Saat", into(textBox({placeholder: "Aradığınız ürün veya markayı yazınız"})));
            await press("Enter");
        });

        it('Check list items', async () => {
            await listItem(below('Erkek Saat')).exists();
        });

    });

    after(async () => {
        await closeBrowser();
    });

});
