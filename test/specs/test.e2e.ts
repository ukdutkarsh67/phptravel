import HomePage from '../pageobjects/homePage.ts';
import ProductPage from '../pageobjects/productPage.ts';
describe('Shop.ist Test Suite', () => {
    let homePage:HomePage;
    let productPage:ProductPage;
    beforeEach(async() => {
        homePage=new HomePage();
        productPage= new ProductPage();
        await homePage.open('');
        await browser.maximizeWindow();

    });
    it('hjhbjkj', async () => {
        await homePage.selectProductPage('SOFAS');
        await browser.pause(5000);
        await homePage.isHeaderLinkOpen("sofas");
        await productPage.isProductAvailabe("Brown Leather Couch");

    })
    it('add product to cart',()=>{

    })
})

