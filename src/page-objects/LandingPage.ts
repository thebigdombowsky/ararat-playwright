import { expect, Locator, Page } from  '@playwright/test'

export class LandingPage {
    
    readonly page: Page
    readonly profileMenuButton: Locator
    readonly logoutLink: Locator
    readonly userProfileData: Locator

    constructor(page:Page){

        this.page=page
        this.profileMenuButton = page.locator('#profile-menu-button')
        this.logoutLink = page.locator('text=" Logout "')
        this.userProfileData = page.locator('user-profile-card__wrapper ng-star-inserted')
    
    }
    
    async logout()
    {

        await this.profileMenuButton.click()
        await this.logoutLink.click()

    }

}
