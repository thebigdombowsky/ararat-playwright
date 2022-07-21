import { expect, Locator, Page } from  '@playwright/test'

export class AraratLoginPage{
    readonly page: Page

    constructor(page:Page){
        this.page=page
    }
    
    async login()
    {
        // Go to http://pmararat-qa-shva.thedevcloud.net/
    await this.page.goto('http://pmararat-qa-shva.thedevcloud.net/');

    // Go to http://pmararat-qa-shva.thedevcloud.net/auth/realms/Swisslog/protocol/openid-connect/auth?client_id=UI&redirect_uri=http%3A%2F%2Fpmararat-qa-shva.thedevcloud.net%2F&state=4c343fd2-2b63-46e5-85b7-ba624202e6ba&response_mode=fragment&response_type=code&scope=openid&nonce=2a97b7fd-1a53-4def-b941-f79cd132a45b
    await this.page.goto('http://pmararat-qa-shva.thedevcloud.net/auth/realms/Swisslog/protocol/openid-connect/auth?client_id=UI&redirect_uri=http%3A%2F%2Fpmararat-qa-shva.thedevcloud.net%2F&state=4c343fd2-2b63-46e5-85b7-ba624202e6ba&response_mode=fragment&response_type=code&scope=openid&nonce=2a97b7fd-1a53-4def-b941-f79cd132a45b');
    
    // Fill input[name="username"]
    await this.page.locator('input[name="username"]').fill('shane');

    // Fill input[name="password"]
    await this.page.locator('input[name="password"]').fill('password');

    // Click input:has-text("Sign In")
    await this.page.locator('input:has-text("Sign In")').click();
    //await expect(this.page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/dashboard');
     }
     
}