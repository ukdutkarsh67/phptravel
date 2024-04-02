import { $ } from '@wdio/globals'
import Page from './page.js';

export default class Registration extends Page {
    get firstNameInput() {
        return $('[id="fn-input"]');
    }
    get lastNameInput() {
        return $('[id="ln-input"]');
    }
    // get countrySelect() {
    //     return $('select[name="phone_country_code"]');
    // }
    // get mobileNumberInput() {
    //     return $('input[name="phone"]');
    // }
    get emailInput() {
        return $('[id="email-addr-input"]');
    }
    // get passwordInput() {
    //     return $('input[name="password"]');
    // }
    // get confirmPasswordInput() {
    //     return $('input[name="confirmpassword"]');
    // }
    get signUpButton() {
        return $('button[id="submitBTN"]');
    }
    // get captchaBox() {
    //     return $('[class*="rc-anchor-checkbox recaptcha-checkbox-expired"]');
    // }


    public async register(firstName: string, lastName: string,email: string) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        // await this.countrySelect.selectByIndex(99);
        // await this.mobileNumberInput.setValue(mobile);
        // await this.emailInput.setValue(email);
        // await this.passwordInput.setValue(password);
        // //await this.captchaBox.click();
        // await browser.pause(10000);
        // await this.signUpButton.click();
        // await expect($('role="alert"')).toHaveText('Incorrect CSRF Token');
        await this.emailInput.setValue(email);
        (await this.signUpButton).click();
    }
}