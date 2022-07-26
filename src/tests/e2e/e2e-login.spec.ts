import { test, expect } from '@playwright/test'
import { loadAraratHomePage } from '../../../helpers'

test.describe('Login/Logout flow', () => {

    test.beforeEach(async ({ page }) => {

    await loadAraratHomePage(page)
        
    })

    test('Negative scenario for Login', async ({ page }) => {

        await page.locator('input[name="username"]').fill('Invalid Username')
        await page.locator('input[name="password"]').fill('password')
        await page.locator('input:has-text("Sign In")').click()
        const errLogin = await page.locator('text=Invalid username or password.')
        await expect(errLogin).toContainText('Invalid username or password.')

    })

    test('Positive scenario for Login + Logout', async ({ page }) => {

        await page.locator('input[name="username"]').fill('shane')
        await page.locator('input[name="password"]').fill('password')
        await page.locator('input:has-text("Sign In")').click()

        const overviewText = await page.locator('h1:has-text("Overview")')
        await expect(overviewText).toBeVisible()

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()

    })

})