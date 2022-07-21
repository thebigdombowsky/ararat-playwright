<<<<<<< HEAD

import { test, expect } from '@playwright/test'
import { AraratLoginPage } from '../pages/login.page'

//const user = 'shane'
//const password = 'password'

test('Login', async ({ page }) => {
  let newlogin = new AraratLoginPage(page)
  await newlogin.login()
  
  // Click #profile-menu-button
  await page.locator('#profile-menu-button').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
})
  
=======
//example.spec.ts
import { test, expect } from '@playwright/test';
import { LoginClass } from '../pages/login.page';
test('Login', async ({ page }) => {
  let exampletest = new LoginClass(page);
  await exampletest.login();
})
>>>>>>> 423bef2dbec03737fa76a80799ab6d00e17cd584
