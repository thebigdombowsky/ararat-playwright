import { test, expect, type Page } from '@playwright/test'

var pageTitle

test.describe('LOGIN', () => {
    test('Login to ARARAT.bin', async ({ page }) => {
      await page.goto('http://pmararat-qa-shva.thedevcloud.net/')
      pageTitle = await page.locator('title')
      await expect(pageTitle).toContainText('Sign in to Swisslog')
      await page.fill('#username', 'shane')
      await page.fill('#password', 'password')
      await page.click('#kc-login')
      pageTitle = await page.locator('title')
      await expect(pageTitle).toContainText('Swisslog Healthcare')
      })
      test('Create manual order', async ({ page }) => {
        await page.goto('http://pmararat-qa-shva.thedevcloud.net/')
      pageTitle = await page.locator('title')
      await expect(pageTitle).toContainText('Sign in to Swisslog')
      await page.fill('#username', 'shane')
      await page.fill('#password', 'password')
      await page.click('#kc-login')
      pageTitle = await page.locator('title')
      await expect(pageTitle).toContainText('Swisslog Healthcare')
        await page.goto('http://pmararat-qa-shva.thedevcloud.net/overview')
        pageTitle = await page.locator('title')
        await expect(pageTitle).toContainText('Swisslog Healthcare')
        await page.click('#medportal_create_manual_order', { force: true })
        pageTitle = await page.locator('title')
        await expect(pageTitle).toContainText('Create Manual Order')
        })
})