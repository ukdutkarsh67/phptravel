
import Page from './page.js';

export default class HomePage extends Page {
    get productHead() {
        return $$('[class="product-card-container"]');
    }
    get messageForSoldOut() {
        return $('[class="modal-title"]');
    }

    get isProductAvailabeMessage() {
        return $('.description div div');
    }

    get productName() {
        return $$('.product-card-container .description div');
    }

    get addToCartButton() {
        return $('[class="purchase-button"]');
    }

    get continueShoppingButton() {
        return $('[class="modal-button"]');
    }


    get productPrice() {
        return $('[class="price"]');
    }

    async isProductAvailabe(name: string) {
        let k = 0;
        const link = await this.productHead;
        let status = false;
        const productNameText = await this.productName;
        for (let i = 0; i < link.length; i++) {
            const checkStock = await link[i].$('div div').getText();
            const product = await productNameText[k].getText();
            k = k + 2;
            if (checkStock.includes('IN STOCK') && product === name) {
                console.log(product);
                await link[i].$('div a').click();
                await expect(await this.isProductAvailabeMessage).toHaveText(name);
                status = true;
                break;
            }
            else if (checkStock.includes('SOLD OUT')) {
                console.log(product);
                await link[i].$('div .product-card').click();
                await this.messageForSoldOut.waitForDisplayed();
                await expect(await this.messageForSoldOut).toHaveText('Oops! This item is sold out.');
                status = false;
                break;
            }
        }
        return status;
    }

    async addProductToCart(productName: string) {
        //  if(await this.isProductAvailabe(productName)){
        //     await this.isProductAvailabe(productName);
        //     await this.addToCartButton.click();
        // }
        await this.isProductAvailabe(productName);
        await this.addToCartButton.click();
        // else{
        //     await this.isProductAvailabe(productName);
        //     await this.continueShoppingButton.click();
        // }

    }

    async getPriceOfProduct() {
        const priceText = await this.productPrice.getText();
        const price = priceText.split('$');
        return +price[1];
    }


}