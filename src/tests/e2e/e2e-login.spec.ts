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

    test('PMBOX-523 Incorrect username/password', async () => {

        await loginPage.login('Invalid username', 'Invalid password')
        await loginPage.assertErrorMessage()

    })

    test('PMBOX-524 Successful login/logout', async () => {

        await loginPage.login('shane', 'password')
 
        await landingPage.logout()

    })

    test('PMBOX-525 Display username when no last name populated in Keycloak', async () => {
 
        await loginPage.login('FirstNameOnly', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('firstnameonly')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })

    test('PMBOX-526 Display username when no first name populated in Keycloak', async () => {

        await loginPage.login('LastNameOnly', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('lastnameonly')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })

    test('PMBOX-527 Display username when no first and last name populated in Keycloak', async () => {
        await loginPage.login('NoNames', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('nonames')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })
})