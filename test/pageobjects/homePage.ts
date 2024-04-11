import { $ } from '@wdio/globals'
import Page from './page.js';

export default class HomePage extends Page {
    get pageHeading() {
        return $('.brand-small img');
    }

    get productList() {
        return $$(
            '[class="menu-item-large"]'
        );
    }

    public async selectProductPage(productPage: any) {
        const productsLink = await this.productList;
        const countProductPage = productsLink.length;
        console.log(countProductPage);

        for (let i = 0; i < countProductPage; i++) {
            const text = await productsLink[i].getText();
            console.log('##########33', text);
            if (text.includes(productPage)) {
                console.log('##########', text);
                await productsLink[i].waitForClickable();
                await productsLink[i].click();
                break;
            }

        }
    }
    public async isHeaderLinkOpen(linkText: string) {
        await expect(browser).toHaveUrl(expect.stringContaining(linkText));
    }

}