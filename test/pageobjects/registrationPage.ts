import { $ } from '@wdio/globals'
import Page from './page.js';

export default class Registration extends Page {
    get firstNameInput() {
        return $('[id="fn-input"]');
    }
    get lastNameInput() {
        return $('[id="ln-input"]');
    }
    get emailInput() {
        return $('[id="email-addr-input"]');
    }
    
    get signUpButton() {
        return $('button[id="submitBTN"]');
    }
    


    public async register(firstName: string, lastName: string,email: string) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.emailInput.setValue(email);
        await this.signUpButton.click();
    }
}