import CartPage from '../pageobjects/cartPage.ts';
import HomePage from '../pageobjects/homePage.ts';
import ProductPage from '../pageobjects/productPage.ts';
describe('Shop.ist Test Suite', () => {
    let homePage:HomePage;
    let productPage:ProductPage;
    let cartPage:CartPage;
    beforeEach(async() => {
        homePage=new HomePage();
        productPage= new ProductPage();
        cartPage=new  CartPage();
        await homePage.open('');
        await browser.maximizeWindow();

    });
    it('hjhbjkj', async () => {
        await homePage.selectProductPage('SOFAS');
        //await homePage.open('cart');
        await browser.pause(5000);
        await homePage.isHeaderLinkOpen("sofas");
        await expect(await productPage.isProductAvailabe("Classic Grey Sofa")).toBe(true);
        await browser.pause(2000);
        const productPrice=await productPage.getPriceOfProduct();
        await productPage.addProductToCart('Classic Grey Sofa');
        await browser.pause(2000);
        await homePage.open('cart')
        await browser.pause(2000);
        await cartPage.verifyProductAddedToCart('Classic Grey Sofa');
        await cartPage.validatePriceOfProduct(productPrice);
        await cartPage.validateTotalPriceOfCart(productPrice);
        console.log('23277213');
        await cartPage.clickCheckoutButton();
        await browser.pause(2000);
        await expect(await cartPage.isOrderPlaced()).toBe(true);
        await browser.pause(2000);
        console.log('23277213');
       

    })
    // it('add product to cart',()=>{

    // })
})

