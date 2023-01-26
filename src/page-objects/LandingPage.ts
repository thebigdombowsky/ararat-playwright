import { expect, Locator, Page } from  '@playwright/test'

export class LandingPage {
    
    readonly page: Page
    readonly profileMenuButton: Locator
    readonly logoutLink: Locator
    readonly userProfileData: Locator
    readonly cartMenu: Locator
    readonly remoteOrdersMenu: Locator
    readonly createRemoteOrderMenuItem: Locator
    readonly closedRemoteOrdersMenuItem: Locator
    readonly openRemoteOrdersMenuItem: Locator
    readonly receiveMenu: Locator
    readonly receiveOpenPosMenuItem: Locator
    readonly receiveClosedPosMenuItem: Locator
    readonly receiveDiscrepanciesMenuItem: Locator
    readonly pickMenu: Locator
    readonly pickNewOrdersMenuItem: Locator
    readonly pickStockoutsMenuItem: Locator
    readonly pickConfirmedOrdersMenuItem: Locator
    readonly pickCanceledOrdersMenuItem: Locator
    readonly pickExpiredInventoryMenuItem: Locator
    readonly pickCreateManualOrderMenuItem: Locator
    readonly inventoryMenu: Locator
    readonly inventoryOverviewMenuItem: Locator
    readonly inventoryLocationsMenuItem: Locator
    readonly inventoryProductsMenuItem: Locator
    readonly inventoryStockAdjustmentsMenuItem: Locator
    readonly inventoryViewTransfersMenuItem: Locator
    readonly inventoryCreateTransferOrderMenuItem: Locator
    readonly inventoryLoadProductsMenuItem: Locator
    readonly reportsMenu: Locator
    readonly dashboardLabel: Locator


    constructor(page:Page){

        this.page=page
        this.profileMenuButton = page.locator('#profile-menu-button-icon')
        this.logoutLink = page.locator('text="Logout"')
        this.userProfileData = page.locator('#global > div > div > sl-cui-list > ul > sl-cui-user-profile-card > div > h3')
        this.cartMenu = page.locator('#medportal_cart')
        this.remoteOrdersMenu = page.locator('#remote_orders >> text=Remote Orders')
        this.createRemoteOrderMenuItem = page.locator('text=Create Remote Order')
        this.closedRemoteOrdersMenuItem = page.locator('text=Closed Remote Orders')
        this.openRemoteOrdersMenuItem = page.locator('text=Open Remote Orders')
        this.receiveMenu = page.locator('text=Receive')
        this.receiveOpenPosMenuItem = page.locator('text=Open POs')
        this.receiveClosedPosMenuItem = page.locator('text=Closed POs')
        this.receiveDiscrepanciesMenuItem = page.locator('text=Discrepancies')
        this.pickMenu = page.locator('#medportal_pick >> text=Pick')
        this.pickNewOrdersMenuItem = page.locator('text=New Orders')
        this.pickStockoutsMenuItem = page.locator('text=Stockouts')
        this.pickConfirmedOrdersMenuItem = page.locator('text=Confirmed Orders')
        this.pickCanceledOrdersMenuItem = page.locator('text=Canceled Orders')
        this.pickExpiredInventoryMenuItem = page.locator('text=Expired Inventory')
        this.pickCreateManualOrderMenuItem = page.locator('text=Create Manual Order')
        this.inventoryMenu = page.locator('#medportal_inventory >> text=Inventory')
        this.inventoryOverviewMenuItem = page.locator('text=Overview')
        this.inventoryLocationsMenuItem = page.locator('text=Locations')
        this.inventoryProductsMenuItem = page.locator('#medportal_products >> text=Products')
        this.inventoryStockAdjustmentsMenuItem = page.locator('text=Stock Adjustments')
        this.inventoryViewTransfersMenuItem = page.locator('text=View Transfers')
        this.inventoryCreateTransferOrderMenuItem = page.locator('text=Create Transfer Order')
        this.inventoryLoadProductsMenuItem = page.locator('text=Load Products')
        this.reportsMenu = page.locator('text=Reports')
        this.dashboardLabel = page.getByRole('heading', { name: 'Dashboard' })
    
    }
    
    async logout()
    {

        await this.profileMenuButton.click()
        await this.logoutLink.click()

    }

    async verifyDashboard()
    {

        await expect(this.dashboardLabel).toHaveText('Dashboard')

    }

}
