import { test as base } from '@playwright/test'
import { CreateManualOrderPage } from '../../page-objects/CreateManualOrderPage'
import { LandingPageHeader } from '../../page-objects/LandingPageHeader'
import { LandingPageDashboard } from '../../page-objects/LandingPageDashboard'
import { LoginPage } from '../../page-objects/LoginPage'
import { LoadProductsPage } from '../../page-objects/LoadProductsPage'
import { InventoryProductsPage } from '../../page-objects/InventoryProductsPage'
import { ConfirmProduct } from '../../page-objects/ConfirmProduct'



type testFixtures = {
    loginPage: LoginPage
    landingPageHeader: LandingPageHeader
    landingPageDashboard: LandingPageDashboard
    createManualOrderPage: CreateManualOrderPage
    loadProductsPage: LoadProductsPage
    inventoryProductsPage: InventoryProductsPage 
    confirmProduct: ConfirmProduct

} 

 const test = base.extend<testFixtures>({
    createManualOrderPage: async ({page}, use) => {
        await use(new CreateManualOrderPage(page))
    },
    landingPageHeader: async ({page}, use) => {
        await use(new LandingPageHeader(page))
    },
    landingPageDashboard: async ({page}, use) => {
        await use(new LandingPageDashboard(page))
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
    loadProductsPage: async ({page}, use) => {
        await use(new LoadProductsPage(page))
    },
    inventoryProductsPage: async ({page}, use) => {
        await use(new InventoryProductsPage(page))
    },
    confirmProduct: async ({page}, use) => {
        await use(new ConfirmProduct(page))
    },
    page: async ({ baseURL, page }, use) => {
        baseURL && (await page.goto(baseURL))
        await use(page)
      },
})

export default test