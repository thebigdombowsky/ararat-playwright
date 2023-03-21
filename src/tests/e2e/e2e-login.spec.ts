import test from './../fixtures/basePage'
import { expect } from '@playwright/test'

test.describe.parallel('Login + Logout', () => {



    test('PMBOX-734 Load Products Info @regression @load', async ({loginPage, landingPage, loadProductsPage}) => {

        await loginPage.login('shane', 'password')
        await landingPage.verifyDashboard()
 
        await landingPage.logout()

    })

   
})