import { test, expect } from '@playwright/test'
import { AraratLoginPage } from '../../pages/login.page'

//const user = 'shane'
//const password = 'password'

test('Create manual order', async ({ page }) => {
 
  let newlogin = new AraratLoginPage(page)
  await newlogin.login()


  await page.locator('#medportal_pick >> text=Pick').click()
  await page.locator('text=Create Manual Order').click()
  await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/pick/create-manual-order')

  await page.locator('[aria-label="Cabinet Refill"]').click()

  await page.locator('text=Type any part of location\'s name').click()

  await page.locator('text=Nurse Station 1').click()

  await page.locator('text=Create Manual OrderSwisslog HCS NA Cancel .cls-1{fill:#26193c;} Next >> #nextButton').click()

  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> input[name="quantityToOrder-numberPickerInput"]').click();
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> input[name="quantityToOrder-numberPickerInput"]').fill('3');
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #addProduct').click();

  await page.locator('[id="name\\ \\+\\ \\\'close-button"]').click()

  await page.locator('text=Create Manual OrderSwisslog HCS NA Cancel .cls-1{fill:#26193c;} Back .cls-1{fill >> #nextButton').click()

  await page.locator('#profile-menu-button').click();

  await page.locator('text=Logout').click();
  
})