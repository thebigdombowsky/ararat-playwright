import { expect, Locator, Page } from  '@playwright/test'

export class LoginPage {
    
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signinButton: Locator
    readonly errorMessage: Locator
    readonly landingPageType: Locator

    constructor(page:Page){

        this.page=page
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.signinButton = page.locator('#kc-login')
        this.errorMessage = page.locator('text=Invalid username or password.')
        this.landingPageType = page.locator('h2:has-text("Dashboard")')
    
    }
    
    async visit() {
        await this.page.goto('http://pmararat-qa-shva.thedevcloud.net/')
    }

    async login(username: string, password: string, stationType: string)
    {

        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.signinButton.click()

        switch (stationType) {
            case 'operator':
                await expect(this.landingPageType).toContainText('Dashboard')
              break;
            case "workstation":
                await expect(this.page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net')
              break;
            default:
              console.log('default station type')
              break;
          }
     }

    async assertErrorMessage()
    {
        await expect(this.errorMessage).toContainText('Invalid username or password')
    }
}
