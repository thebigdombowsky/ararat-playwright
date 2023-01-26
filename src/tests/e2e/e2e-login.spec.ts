import test from './../fixtures/basePage'
import { expect } from '@playwright/test'

test.describe.parallel('Login + Logout', () => {


    test('PMBOX-523 Incorrect username/password', async ({loginPage}) => {

        await loginPage.login('Invalid username', 'Invalid password')
        await loginPage.assertErrorMessage()

    })

    test('PMBOX-524 Successful login/logout', async ({loginPage, landingPage}) => {

        await loginPage.login('shane', 'password')
        await landingPage.verifyDashboard()
 
        await landingPage.logout()

    })

    test('PMBOX-525 Display username when no last name populated in Keycloak', async ({loginPage, landingPage}) => {
 
        await loginPage.login('FirstNameOnly', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('firstnameonly')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })

    test('PMBOX-526 Display username when no first name populated in Keycloak', async ({loginPage, landingPage}) => {

        await loginPage.login('LastNameOnly', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('lastnameonly')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })

    test('PMBOX-527 Display username when no first and last name populated in Keycloak', async ({loginPage, landingPage}) => {
        await loginPage.login('NoNames', 'max')

        await landingPage.profileMenuButton.click()
        await expect(landingPage.userProfileData).toContainText('nonames')

        await landingPage.logoutLink.click()
        await expect(loginPage.signinButton).toBeVisible()
    })
})