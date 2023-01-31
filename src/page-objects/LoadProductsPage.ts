import { expect, Locator, Page } from  '@playwright/test'

export class LoadProductsPage {

    readonly page: Page
    readonly genericOrBrandNameInput: Locator
    readonly resetFiltersButton: Locator
    readonly helpButton: Locator
    readonly genericOrBrandNameSearchButton: Locator
    readonly genericOrBrandNameClearButton: Locator
    readonly confirmButton: Locator
    readonly lotInput: Locator
    readonly expiryDateInput: Locator
    readonly quantityBeingLoaded: Locator
    readonly saveButton: Locator
    readonly startLoadingButton: Locator

    constructor(page:Page){

        this.page=page
        this.genericOrBrandNameInput = page.locator('#idOrNameFilter')
        this.resetFiltersButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Reset Filters' })
        this.helpButton = page.locator('#helpButton')
        this.genericOrBrandNameSearchButton = page.locator('#searchIdOrName')
        this.genericOrBrandNameClearButton = page.locator('#clearIdOrName')
        this.confirmButton = page.getByRole('button', { name: 'Confirm' })
        this.lotInput = page.getByLabel('Lot')
        this.expiryDateInput = page.getByLabel('Expiry Date')
        this.quantityBeingLoaded = page.getByLabel('Quantity Being Loaded')
        this.saveButton = page.getByRole('button', { name: '.b{fill:#26193c;} Save' })
        this.startLoadingButton = page.getByRole('button', { name: 'Start Loading' })
    
    }


}






import { test} from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('row', { name: 'Metoprolol Succinate ER 50 CAPSULE SWLG7000 Swisslog Rossa 2020 SwisslogRossa2020 Swisslog Rossa 2020 0 0 .cls-1{fill:#26193c;} Load' }).getByRole('button', { name: '.cls-1{fill:#26193c;} Load' }).click();
  await page.getByText('Swisslog Rossa 2020').nth(3).click();
  await page.getByText('Swisslog Rossa 2020').nth(3).dblclick();
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('Swisslog Rossa 2020');
  await page.locator('#barcode-action-dialog-button').click();
  await page.getByRole('button', { name: 'Start Loading' }).nth(1).click();
  await page.getByRole('tabpanel', { name: 'In Progress' }).locator('div').filter({ hasText: 'Abort All Jobs TypeBinStatusProductPriorityOrder IdLotExpiry DateQty.cls-1{fill:' }).first().click();
  await page.getByRole('tab', { name: 'In Progress' }).click();
  await page.getByRole('tab', { name: 'Complete' }).click();
  await page.getByRole('heading', { name: 'Job Queue' }).click();
  await page.getByRole('tab', { name: 'In Progress' }).click();
  await page.locator('#modal-template').getByText('Load Product').click();
  await page.getByRole('tab', { name: 'Job' }).click();
  await page.getByLabel('Bay').click();
  await page.getByLabel('Bin').click();
  await page.getByLabel('Lot').click();
  await page.getByLabel('Expiry Date').click();
  await page.getByLabel('Expected Quantity').click();
  await page.locator('#qtyBeingLoaded-numberPickerInput').click();
  await page.locator('#qtyBeingLoaded-numberPickerPlusIcon').click();
  await page.locator('#qtyBeingLoaded-numberPickerMinusIcon').click();
  await page.getByLabel('Doses Per Compartment').click();
  await page.getByPlaceholder('Scan barcode').click();
  await page.getByPlaceholder('Scan barcode').fill('Swisslog Rossa 2020');
  await page.locator('app-bay-compartment-slice div').filter({ hasText: 'Place here 1' }).nth(1).click();
  await page.getByText('Place here').click();
  await page.locator('app-bay-compartment-slice').getByText('1').click();
  await page.locator('#scanBarcode-action-dialog-button').click();
  await page.locator('#barcode-action-dialog-button').click();
  await page.getByLabel('Lot').click();
  await page.getByLabel('Lot').fill('Lot1');
  await page.getByLabel('Expiry Date').fill('2024-12-31');
  await page.getByLabel('Quantity Being Loaded').click();
  await page.getByLabel('Quantity Being Loaded').fill('1');
  await page.getByRole('button', { name: '.b{fill:#26193c;} Save' }).click();
  await page.getByRole('button', { name: 'Start Loading' }).nth(1).click();
  await page.getByRole('tabpanel', { name: 'In Progress' }).locator('div').filter({ hasText: 'Abort All Jobs TypeBinStatusProductPriorityOrder IdLotExpiry DateQty.cls-1{fill:' }).first().click();
  await page.getByRole('tab', { name: 'In Progress' }).click();
  await page.getByRole('tab', { name: 'Complete' }).click();
  await page.getByRole('heading', { name: 'Job Queue' }).click();
  await page.getByRole('tab', { name: 'In Progress' }).click();
  await page.locator('#modal-template').getByText('Load Product').click();
  await page.getByRole('tab', { name: 'Job' }).click();
  await page.getByLabel('Bay').click();
  await page.getByLabel('Bin').click();
  await page.getByLabel('Lot').click();
  await page.getByLabel('Expiry Date').click();
  await page.getByLabel('Expected Quantity').click();
  await page.locator('#qtyBeingLoaded-numberPickerInput').click();
  await page.locator('#qtyBeingLoaded-numberPickerPlusIcon').click();
  await page.locator('#qtyBeingLoaded-numberPickerMinusIcon').click();
  await page.getByLabel('Doses Per Compartment').click();
  await page.getByPlaceholder('Scan barcode').click();
  await page.getByPlaceholder('Scan barcode').fill('Swisslog Rossa 2020');
  await page.locator('app-bay-compartment-slice div').filter({ hasText: 'Place here 1' }).nth(1).click();
  await page.getByText('Place here').click();
  await page.locator('app-bay-compartment-slice').getByText('1').click();
  await page.locator('#scanBarcode-action-dialog-button').click();
  await page.getByRole('menuitem', { name: 'Inventory ' }).click();
  await page.getByRole('menuitem', { name: 'Load Products' }).click();
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('Swisslog Rossa 2020');
  await page.locator('#scanFilter-action-dialog-button').click();
  await page.getByText('Description').click();
  await page.locator('#modal-template').getByText('Metoprolol Succinate ER 50 CAPSULE').click();
  await page.getByText('Hazard').click();
  await page.getByText('HT1f').click();
  await page.getByText('Controlled Substance').click();
  await page.locator('div:nth-child(3) > pm-product-detail-slice > .base-box > .container > .row > .col-6').click();
  await page.getByText('Storage Category').click();
  await page.getByText('Ambient').click();
  await page.locator('#modal-template').getByText('Product ID').click();
  await page.locator('#modal-template').getByText('SWLG7000').click();
  await page.locator('#modal-template').getByText('Brand Name').click();
  await page.getByText('Swisslog Rossa 2020').nth(2).click();
  await page.locator('pm-product-details div').filter({ hasText: 'NDC SwisslogRossa2020' }).nth(1).click();
  await page.locator('#modal-template').getByText('SwisslogRossa2020').click();
  await page.locator('#modal-template').getByText('Barcode').click();
  await page.getByText('Swisslog Rossa 2020').nth(3).click();
  await page.getByRole('button', { name: 'Cancel' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('Swisslog Rossa 2020');
  await page.getByPlaceholder(' ').press('Tab');
  await page.locator('#barcode-action-dialog-button').press('Tab');
  await page.locator('#barcode-clear-dialog-button').press('Tab');
  await page.getByLabel('Lot').fill('Lot1');
  await page.getByLabel('Lot').press('Tab');
  await page.getByLabel('Expiry Date').fill('2024-12-31');
  await page.getByLabel('Expiry Date').press('Tab');
  await page.locator('#expiryDate-calendar-button').press('Tab');
  await page.getByLabel('Quantity Being Loaded').fill('96');
  await page.getByRole('button', { name: '.b{fill:#26193c;} Save' }).click();
  await page.getByRole('heading', { name: 'Specify Quantities Being Loaded' }).click();
  await page.getByRole('heading', { name: 'Product' }).click();
  await page.getByText('Description').click();
  await page.getByText('Metoprolol Succinate ER 50 CAPSULE').click();
  await page.getByText('Hazard').click();
  await page.locator('pm-product-detail-slice').filter({ hasText: 'Hazard HT1f' }).locator('#undefined-value-icon').click();
  await page.getByText('HT1f').click();
  await page.getByText('Controlled Substance').click();
  await page.getByText('Class III').click();
  await page.getByText('Storage Category').click();
  await page.getByText('Ambient').click();
  await page.getByText('Product ID').click();
  await page.getByText('SWLG7000').click();
  await page.getByRole('columnheader', { name: 'Barcode' }).click();
  await page.getByRole('cell', { name: 'Swisslog Rossa 2020' }).click();
  await page.getByRole('columnheader', { name: 'Lot' }).click();
  await page.getByRole('cell', { name: 'Lot1' }).click();
  await page.getByRole('columnheader', { name: 'Expiry Date' }).click();
  await page.getByRole('cell', { name: '12/31/24' }).click();
  await page.getByRole('columnheader', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: '96' }).click();
  await page.getByRole('button', { name: 'Edit' }).click({
    button: 'right'
  });
  await page.locator('mat-header-cell:nth-child(6)').click();
  await page.getByRole('button', { name: 'Delete' }).click({
    button: 'right'
  });
  await page.locator('mat-header-cell:nth-child(6)').click();
  await page.getByRole('button', { name: 'Start Loading' }).nth(1).click();
  await page.getByText('Bin B1010 arrived. Open the drawer in bay 1 to continue.').click();
  await page.getByText('Bin arrived Bin B1010 arrived. Open the drawer in bay 1 to continue.').click();
  await page.getByPlaceholder('Scan barcode').click();
  await page.getByPlaceholder('Scan barcode').fill('Swisslog Rossa 2020');
  await page.locator('#scanBarcode-action-dialog-button').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});