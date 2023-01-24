import { test as base } from '@playwright/test'
import { CreateManualOrderPage } from '../../page-objects/CreateManualOrderPage'
import { LandingPage } from '../../page-objects/LandingPage'
import { LoginPage } from '../../page-objects/LoginPage'

type testFixtures = {
    loginPage: LoginPage
    landingPage: LandingPage
    createManualOrderPage: CreateManualOrderPage

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
    page: async ({ baseURL, page }, use) => {
        baseURL && (await page.goto(baseURL));
        await use(page);
      },
})

export default test
export { expect } from '@playwright/test'