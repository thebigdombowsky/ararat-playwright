import { test, expect } from '@playwright/test';

import { loadAraratHomePage } from 'helpers'

test('test', async ({ page }) => {

  // Go to http://pmararat-qa-shva.thedevcloud.net/
  await page.goto('http://pmararat-qa-shva.thedevcloud.net/');

  // Go to http://pmararat-qa-shva.thedevcloud.net/auth/realms/Swisslog/protocol/openid-connect/auth?client_id=UI&redirect_uri=http%3A%2F%2Fpmararat-qa-shva.thedevcloud.net%2F&state=2afbe677-9e2b-4d53-8156-bc420383b2aa&response_mode=fragment&response_type=code&scope=openid&nonce=e22a5739-2f60-4546-8922-c91b45a94db1
  await page.goto('http://pmararat-qa-shva.thedevcloud.net/auth/realms/Swisslog/protocol/openid-connect/auth?client_id=UI&redirect_uri=http%3A%2F%2Fpmararat-qa-shva.thedevcloud.net%2F&state=2afbe677-9e2b-4d53-8156-bc420383b2aa&response_mode=fragment&response_type=code&scope=openid&nonce=e22a5739-2f60-4546-8922-c91b45a94db1');

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('shane');

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('password');

  // Click input:has-text("Sign In")
  await page.locator('input:has-text("Sign In")').click();
  await expect(page).toHaveURL('http://pmararat-qa-shva.thedevcloud.net/dashboard');

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

  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #quantityToOrder-numberPickerPlusIcon
  await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #quantityToOrder-numberPickerPlusIcon').click();

  // Click text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #addProduct
  await page.locator('text=QA Drug 9004 25 CREAM 6.0SWLG9004 Not a Hazard9999 Add >> #addProduct').click();

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