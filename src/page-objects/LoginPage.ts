import { expect, Locator, Page } from  '@playwright/test'

export class LoginPage {
    
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signinButton: Locator
    readonly errorMessage: Locator

    constructor(page:Page){

        this.page=page
        this.usernameInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.signinButton = page.locator('input:has-text("Sign In")')
        this.errorMessage = page.locator('text=Invalid username or password.')
    
    }
    

    async visit() {
        await this.page.goto('http://pmararat-qa-shva.thedevcloud.net/')
        await this.page.waitForSelector('input:has-text("Sign In")')
    }

    async login()
    {

    await this.page.locator('input[name="username"]').fill('shane');
    await this.page.locator('input[name="password"]').fill('password');
    await this.page.locator('input:has-text("Sign In")').click();
     
    }

}
