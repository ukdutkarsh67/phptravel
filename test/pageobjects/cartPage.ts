import { $ } from '@wdio/globals'
import Page from './page.js';

export default class CartPage extends Page {
    get cartItem() {
        return $('//div[@class="product-description"]/div[1]')
    };

    get ProductPrice() {
        return $('[class="product-price"]');
    }

    get productTaxPrice() {
        return $('//div[@class="lines"]/div[@class="line"][2]/div[2]');
    }

    get productShippingPrice() {
        return $('//div[@class="lines"]/div[@class="line"][3]/div[2]');
    }

    get totalPrice() {
        return $('//div[@class="line line-total"]/div[2]');
    }

    get checkoutButton() {
        return $('[class="checkout"]');
    }


    get orderPlaced() {
        return $('[class="checkout-title"]');
    }


    async verifyProductAddedToCart(productName: string) {
        const productText = await this.cartItem.getText();
        await expect(productText).toContain(productName);
    }


    async validatePriceOfProduct(productPrice: number) {
        const productText = await this.ProductPrice.getText();
        const price = productText.split('$');
        await expect(+price[1]).toBe(productPrice);
    }

    async validateTotalPriceOfCart(productPrice: number) {
        const taxText = await this.productTaxPrice.getText();
        const shippingText = await this.productShippingPrice.getText();
        const totalText = await this.totalPrice.getText();
        const taxPrice = +taxText;
        const shippingPrice = +shippingText;
        const totalPrice = +totalText;
        const totalAmount = taxPrice + shippingPrice + productPrice;
        await expect(totalPrice).toBe(totalAmount);
    }


    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async isOrderPlaced() {
        return await this.orderPlaced.isDisplayed();
    }

}