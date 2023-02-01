import { expect, Locator, Page } from  '@playwright/test'

export class LoadProductsPage {

    readonly page: Page
    readonly productBarcode: Locator
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
        this.productBarcode = page.locator('#scanInput')
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