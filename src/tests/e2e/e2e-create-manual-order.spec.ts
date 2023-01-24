import test from './../fixtures/basePage'

test('[514] Create manual order', async ({loginPage, landingPage, createManualOrderPage}) => {

  await loginPage.login('shane', 'password')
  
  
  await landingPage.pickMenu.click()
  await landingPage.pickCreateManualOrderMenuItem.click()

  await createManualOrderPage.manualOrderLocationDropdown.click()
  await createManualOrderPage.manualOrderLocationSelection.click()
  await createManualOrderPage.manualOrderNextButton.click()
  await createManualOrderPage.manualOrderSelectMedication.click()
  await createManualOrderPage.manualOrderIncreaseQuantity.click()
  await createManualOrderPage.manualOrderAddQuantity.click()
  await createManualOrderPage.manualOrderNextButton.click()
  await createManualOrderPage.manualOrderStartUnloadingButton.click()

  await landingPage.logout()
  
})
