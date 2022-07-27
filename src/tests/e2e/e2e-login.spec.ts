import { test, expect } from '@playwright/test'
import { loadAraratHomePage } from '../../../helpers'

test.describe.parallel('Login + Logout', () => {

    test.beforeEach(async ({ page }) => {

    await loadAraratHomePage(page)
        
    })

    test('Incorrect username/password', async ({ page }) => {

        await page.locator('input[name="username"]').fill('Invalid Username')
        await page.locator('input[name="password"]').fill('password')
        await page.locator('input:has-text("Sign In")').click()
        const errLogin = await page.locator('text=Invalid username or password.')
        await expect(errLogin).toContainText('Invalid username or password.')

    })

    test('Successful login/logout', async ({ page }) => {

        await page.locator('input[name="username"]').fill('shane')
        await page.locator('input[name="password"]').fill('password')
        await page.locator('input:has-text("Sign In")').click()

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()

    })

    test('Display username when no last name populated in Keycloak', async ({ page }) => {

        await page.locator('input[name="username"]').fill('FirstNameOnly')
        await page.locator('input[name="password"]').fill('max')
        await page.locator('input:has-text("Sign In")').click()

        await page.locator('#profile-menu-button').click();
        const displayName = await page.locator('<h3>First undefined</h3>')
        await expect(displayName).toContainText('FirstNameOnly')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })

    test('Display username when no first name populated in Keycloak', async ({ page }) => {

        await page.locator('input[name="username"]').fill('LastNameOnly')
        await page.locator('input[name="password"]').fill('max')
        await page.locator('input:has-text("Sign In")').click()

        await page.locator('#profile-menu-button').click();
        const displayName = await page.locator('<h3>Last undefined</h3>')
        await expect(displayName).toContainText('LastNameOnly')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })

    test('Display username when no first and last name populated in Keycloak', async ({ page }) => {

        await page.locator('input[name="username"]').fill('NoNames')
        await page.locator('input[name="password"]').fill('max')
        await page.locator('input:has-text("Sign In")').click()

        await page.locator('#profile-menu-button').click();
        const displayName = await page.locator('<h3>undefined undefined</h3>')
        await expect(displayName).toContainText('NoNames')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })
})