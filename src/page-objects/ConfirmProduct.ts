import { expect, Locator, Page } from  '@playwright/test'

export class ConfirmProduct {

    readonly page: Page
    readonly confirmProductLabel: Locator
    readonly descriptionLabel: Locator
    readonly hazardLabel: Locator
    readonly controlledSubstanceLabel: Locator
    readonly storageCategoryLabel: Locator
    readonly productIdLabel: Locator

    constructor(page:Page){

        this.page = page
        this.confirmProductLabel = page.getByText('Confirm Product')
        this.descriptionLabel = page.getByText('Description')
        this.hazardLabel = page.getByText('Hazard')
        this.controlledSubstanceLabel = page.getByText('Controlled Substance')
        this.storageCategoryLabel = page.getByText('Storage Category')
        this.productIdLabel = page.locator('#modal-template').getByText('Product ID')
}

}