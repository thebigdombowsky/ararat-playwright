import { test as base } from '@playwright/test'
import { CreateManualOrderPage } from '../../page-objects/CreateManualOrderPage'
import { LandingPage } from '../../page-objects/LandingPage'
import { LoginPage } from '../../page-objects/LoginPage'
import { LoadProductsPage } from '../../page-objects/LoadProductsPage'
import { InventoryProductsPage } from '../../page-objects/InventoryProductsPage'
import { ConfirmProduct } from '../../page-objects/ConfirmProduct'



type testFixtures = {
    loginPage: LoginPage
    landingPage: LandingPage
    createManualOrderPage: CreateManualOrderPage
    loadProductsPage: LoadProductsPage
    inventoryProductsPage: InventoryProductsPage 
    confirmProduct: ConfirmProduct

} 

 const test = base.extend<testFixtures>({
    createManualOrderPage: async ({page}, use) => {
        await use(new CreateManualOrderPage(page))
    },
    landingPage: async ({page}, use) => {
        await use(new LandingPage(page))
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