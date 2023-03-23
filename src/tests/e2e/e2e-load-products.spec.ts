import test from './../fixtures/basePage'

test.describe.parallel('Load Products', () => {


    test('PMBOX-735 LOAD PRODUCTS - Search by Product barcode @regression @load', async ({loginPage, landingPage, loadProductsPage}) => {

        await loginPage.login('shane', 'password')

        await landingPage.pickMenu.click()
        await landingPage.inventoryLoadProductsMenuItem.click()
        await loadProductsPage.productBarcode.fill('123456789012')
        await loadProductsPage.magnifyingGlassSearchButton.click()



    })

})