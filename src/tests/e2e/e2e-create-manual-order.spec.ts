import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { LandingPage } from '../../page-objects/LandingPage'
import { CreateManualOrderPage} from "../../page-objects/CreateManualOrderPage";

let user = 'shane'
let password = 'password'

let loginPage: LoginPage
let landingPage: LandingPage
let createManualOrderPage: CreateManualOrderPage

    test.beforeEach(async ({ page }) => {

      loginPage = new LoginPage(page)
      landingPage = new LandingPage(page)

      await loginPage.visit()
      await loginPage.login(user, password)

    })

test('[PMBOX-514] Create manual order', async ({ page }) => {

  await createManualOrderPage.manualOrderCabinetRefill.click()
  await createManualOrderPage.manualOrderLocationDropdown.click()
  await createManualOrderPage.manualOrderLocationSelection.click()
  await createManualOrderPage.manualOrderNextButton.click()
  await createManualOrderPage.manualOrderSelectMedication.locator('#undefined-plus-icon').click()


  await landingPage.logout()
  
})