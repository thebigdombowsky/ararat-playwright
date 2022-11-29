export async function loadAraratHomePage(page : any) {
    await page.goto('http://pmararat-qa-shva.thedevcloud.net/')
    await page.waitForSelector('input:has-text("Sign In")')
}