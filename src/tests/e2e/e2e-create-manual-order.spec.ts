import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { LandingPage } from '../../page-objects/LandingPage'
import { CreateManualOrderPage} from "../../page-objects/CreateManualOrderPage"

let loginPage: LoginPage
let landingPage: LandingPage
let createManualOrderPage: CreateManualOrderPage

    test.beforeEach(async ({ page }) => {

      loginPage = new LoginPage(page)
      landingPage = new LandingPage(page)
      createManualOrderPage = new CreateManualOrderPage(page)
      let user = 'shane'
      let password = 'password'

      await loginPage.visit()
      await loginPage.login(user, password)

    })

test('PMBOX-514 Create manual order', async () => {

  await landingPage.pickMenu.click()
  await landingPage.pickCreateManualOrderMenuItem.click()
  await createManualOrderPage.manualOrderLocationDropdown.click()
  await createManualOrderPage.manualOrderLocationSelection.click()
  await createManualOrderPage.manualOrderNextButton.click()
  await createManualOrderPage.manualOrderSelectMedication.click()
  await createManualOrderPage.manualOrderIncreaseQuantity.click()
  await createManualOrderPage.manualOrderAddQuantity.click()
  await createManualOrderPage.manualOrderNextButton.click()
  await createManualOrderPage.manualOrderStartUnloadingButton.click()

  await landingPage.logout()
  
})
