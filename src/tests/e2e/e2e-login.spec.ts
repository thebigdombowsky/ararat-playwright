import { test, expect } from '@playwright/test'
//import { loadAraratHomePage } from '../../../helpers'
import { LoginPage } from '../../page-objects/LoginPage'
import { LandingPage } from '../../page-objects/LandingPage'

test.describe.parallel('Login + Logout', () => {

    let loginPage: LoginPage
    let landingPage: LandingPage

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page)
        landingPage = new LandingPage(page)

        await loginPage.visit()
        
    })

    test('Incorrect username/password', async ({ page }) => {

        await loginPage.login('Invalid username', 'Invalid password')
        await loginPage.assertErrorMessage()

    })

    test('Successful login/logout', async ({ page }) => {

        await loginPage.login('shane', 'password')
 
        await landingPage.logout()

    })

    test('Display username when no last name populated in Keycloak', async ({ page }) => {
 
       await loginPage.login('FirstNameOnly', 'max')

       await page.locator('#profile-menu-button').click();
       const displayName = await page.locator('text=First undefined')
       await expect(displayName).toContainText('FirstNameOnly')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })

    test('Display username when no first name populated in Keycloak', async ({ page }) => {

        await loginPage.login('LastNameOnly', 'max')

        await page.locator('#profile-menu-button').click();
        const displayName = await page.locator('text=Last undefined')
        await expect(displayName).toContainText('LastNameOnly')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })

    test('Display username when no first and last name populated in Keycloak', async ({ page }) => {
        await loginPage.login('NoNames', 'max')

        await page.locator('#profile-menu-button').click();
        const displayName = await page.locator('text=undefined undefined')
        await expect(displayName).toContainText('NoNames')

        await page.locator('#profile-menu-button').click();
        await page.locator('text=Logout').click();
        const logoutText = await page.locator('input:has-text("Sign In")')
        await expect(logoutText).toBeVisible()
    })
})