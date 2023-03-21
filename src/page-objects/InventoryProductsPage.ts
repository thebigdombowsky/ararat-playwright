import { expect, Locator, Page } from '@playwright/test'


export class InventoryProductsPage {
    
    readonly page: Page
    readonly filterSelect: Locator
    readonly filterByBarcode: Locator
    readonly filterByProductId: Locator
    readonly filterByName: Locator
    readonly filterByNameInput: Locator
    readonly filterbyStrengthInput: Locator
    readonly filterByDosageForm: Locator
    readonly filterByFacilityStatusDropdown: Locator
    readonly filterByFacilityStatusActive: Locator
    readonly filterByFacilityStatusInactive: Locator
    readonly filterByFacilityStatusObsolete: Locator
    readonly filterByHazardousTypesDropdown: Locator
    readonly filterByHazardousTypesHighRisk: Locator
    readonly filterByHazardousTypesLowRisk: Locator
    readonly filterByHazardousTypesReproductiveRisk: Locator
    readonly filterByHazardousTypesNone: Locator
    readonly filterResetButton: Locator
    readonly chooseFilterType: Locator
    readonly filterButton: Locator
    readonly exportButton: Locator
    readonly addProductButton: Locator
    readonly modalDismissButton: Locator
    readonly barcodeInput: Locator
    readonly productIDInput: Locator
    filterByDropdown: any


    constructor(page:Page){

        this.page=page
        this.filterSelect = page.locator('#filterSelect').getByRole('button', { name: 'dropdown trigger' })
        this.filterByBarcode = page.getByRole('option', { name: 'Find By Barcode' })
        this.filterByProductId = page.getByRole('option', { name: 'Find By Product ID' })
        this.filterByName = page.getByText('Filter By Name, Strength, Dosage, Facility Status, Hazardous Types')
        this.filterByNameInput = page.getByPlaceholder('Name')
        this.filterbyStrengthInput = page.getByPlaceholder('Strength')
        this.filterByDosageForm = page.getByPlaceholder('Dosage Form')
        this.filterByFacilityStatusDropdown = page.getByRole('button', { name: 'dropdown trigger' })
        this.filterByFacilityStatusActive = page.getByRole('option', { name: 'Active', exact: true })
        this.filterByFacilityStatusInactive = page.getByRole('option', { name: 'Inactive', exact: true })
        this.filterByFacilityStatusObsolete = page.getByRole('option', { name: 'Obsolete', exact: true })
        this.filterByHazardousTypesDropdown = page.locator('#hazardousTypes').getByRole('button', { name: 'dropdown trigger' })
        this.filterByHazardousTypesHighRisk = page.getByText('High Risk Hazardous')
        this.filterByHazardousTypesLowRisk = page.getByText('Low Risk Hazardous')
        this.filterByHazardousTypesLowRisk = page.getByText('Reproductive Risk Hazardous')
        this.filterByHazardousTypesReproductiveRisk = page.getByText('Reproductive Risk Hazardous')
        this.filterByHazardousTypesNone = page.getByRole('option', { name: 'None' })
        this.filterResetButton = page.getByRole('button', { name: 'Reset' })
        this.chooseFilterType = page.getByText('Choose Filter Type')
        this.filterButton = page.getByRole('button', { name: 'Filter' })
        this.exportButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Export' })
        this.addProductButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Add' })
        this.modalDismissButton = page.locator('#modalDismissButton').getByRole('button', { name: 'Close' })
        this.barcodeInput = page.getByPlaceholder('Barcode')
        this.productIDInput = page.getByPlaceholder('Product ID')
    
    }
    
    async productSearch(searchType: string, searchValue: any) {
        await this.filterSelect.click()
        await this.filterByName.click()
        await this.filterByDropdown.click()
        const map = new Map();
        map.set('Barcode', this.barcodeInput);
        map.set('Product ID', this.productIDInput);
        map.set('Name', this.filterByNameInput);
        map.set('Strength', this.filterbyStrengthInput);
        map.set('Dosage Form', this.filterByDosageForm);
        map.set('Facility Status', this.filterByFacilityStatusDropdown);
        map.set('Hazardous Types', this.filterByHazardousTypesDropdown);
        await map.get(searchType).click();
        await map.get(searchValue).type(searchValue);                


        await this.filterButton.click()
    }
}
