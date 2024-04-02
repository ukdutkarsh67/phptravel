
import Page from './page.js';

export default class HomePage extends Page{
    get  productHead() { 
        return $$('[class="product-card-container"]');
    }
    get messageForSoldOut(){
        return $('[class="modal-title"]');
    }

    get isProductAvailabeMessage(){
        return $('.description div div');
    }

    get productName(){
        return $$('.product-card-container .description div');
    }

    async isProductAvailabe(name:string){
        let k=0;
        const link=await this.productHead;
        const productNameText=await this.productName;
        for(let i=0;i<link.length;i++){
            const checkStock=await link[i].$('div div').getText();
            
            const product=await productNameText[k].getText();
            k=k+2;
            if(checkStock.includes('IN STOCK') && product===name){
                console.log(product);
                await link[i].$('div a').click();
                await expect(await this.isProductAvailabeMessage).toHaveText(name);
                break;
            }
            else if(checkStock.includes('SOLD OUT')){
                console.log(product);
                await link[i].$('div .product-card').click();
                await this.messageForSoldOut.waitForDisplayed();
                await expect(await this.messageForSoldOut).toHaveText('Oops! This item is sold out.');
                break;
            }
        }
    }

}