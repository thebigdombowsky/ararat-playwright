import { test, expect } from '@playwright/test'
import { AraratLoginPage } from '../../pages/login.page'

//const user = 'shane'
//const password = 'password'

test('Create manual order', async ({ page }) => {
 
  let newlogin = new AraratLoginPage(page)
  await newlogin.login()

  // Click #medportal_pick span >> nth=2
  await page.locator('#medportal_pick span').nth(2).click();

  // Click text=Create Manual Order
  await page.locator('text=Create Manual Order').click();
  await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/pick/create-manual-order');

  // Click [aria-label="Cabinet Refill"]
  await page.locator('[aria-label="Cabinet Refill"]').click();

  // Click text=Type any part of location's name
  await page.locator('text=Type any part of location\'s name').click();

  // Click text=Nurse Station 1
  await page.locator('text=Nurse Station 1').click();

  // Click text=.cls-1{fill:#26193c;} Next >> nth=1
  await page.locator('text=.cls-1{fill:#26193c;} Next').nth(1).click();

  await page.screenshot({path: 'screenshot.png', fullPage: true})

  await page.isVisible('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon')
  
  // Click text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #addProduct
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Add >> #addProduct').click();

  // Click text=Selected Products(1)
  await page.locator('text=Selected Products(1)').click();

  // Click text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Remove >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9000 10 TABLET 1.25SWLG9000 Not a Hazard5454 Remove >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click button:has-text("Remove")
  await page.locator('button:has-text("Remove")').click();

  // Click text=Create Manual OrderSwisslog HCS NA Cancel .cls-1{fill:#26193c;} Back .cls-1{fill >> #backButton
  await page.locator('text=Create Manual OrderSwisslog HCS NA Cancel .cls-1{fill:#26193c;} Back .cls-1{fill >> #backButton').click();

  // Click #profile-menu-button
  await page.locator('#profile-menu-button').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
  //await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/auth/realms/Swisslog/protocol/openid-connect/auth?client_id=UI&redirect_uri=http%3A%2F%2Fpmararat-qa-shva.thedevcloud.net%2F&state=80cded93-36f8-42ba-92a0-e2f63c4fdc4a&response_mode=fragment&response_type=code&scope=openid&nonce=073e4690-ebdd-4d00-8246-32852db713f5');

  
})