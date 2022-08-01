import { test, expect } from '@playwright/test'
//import { AraratLoginPage } from '../pages/login.page'
import { loadAraratHomePage } from '../../helpers'

//const user = 'shane'
//const password = 'password'

test('Login', async ({ page }) => {

  await loadAraratHomePage(page)

})