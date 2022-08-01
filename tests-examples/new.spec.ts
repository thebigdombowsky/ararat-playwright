import { test, expect } from '@playwright/test'
import { AraratLoginPage } from '../pages/login.page'
import { loadAraratHomePage } from '../../helpers'

test('test', async ({ page }) => {

  let newlogin = new AraratLoginPage(page)
  await newlogin.login()

  // Click #medportal_pick span >> nth=2
  await page.locator('#medportal_pick span').nth(2).click();

  // Click text=Create Manual Order
  await page.locator('text=Create Manual Order').click();
  await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/pick/create-manual-order');

  // Click text=Type any part of location's name
  await page.locator('text=Type any part of location\'s name').click();

  // Click [aria-label="Nurse Station 3"]
  await page.locator('[aria-label="Nurse Station 3"]').click();

  // Click text=.cls-1{fill:#26193c;} Next >> nth=1
  await page.locator('text=.cls-1{fill:#26193c;} Next').nth(1).click();

  await page.locator('#quantityToOrder-numberPickerPlusIcon')
  
  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard198198 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard198198 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #quantityToOrder-numberPickerPlusIcon
   await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard198198 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #addProduct
  await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard198198 Add >> #addProduct').click();

  // Click text=.cls-1{fill:#26193c;} Next >> nth=1
  await page.locator('text=.cls-1{fill:#26193c;} Next').nth(1).click();

  // Click text=.cls-1{fill:#26193c;} Start Unloading >> nth=1
  await page.locator('text=.cls-1{fill:#26193c;} Start Unloading').nth(1).click();
  await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/jobQueue');
  
  // Click #profile-menu-button
  await page.locator('#profile-menu-button').click();

  // Click text=Logout
  await page.locator('text=Logout').click();

});