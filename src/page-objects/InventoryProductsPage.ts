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
        switch (searchType) {  
            case 'Barcode':
                await this.filterByBarcode.click()
                await this.barcodeInput.type(searchValue)
                break;
            case 'Product ID':
                await this.filterByProductId.click()
                await this.productIDInput.type(searchValue)
                break;
            case 'Name':
                await this.filterByName.click()
                await this.filterByNameInput.type(searchValue)
                break;
            case 'Strength':
                await this.filterByName.click()
                await this.filterbyStrengthInput.type(searchValue)
                break;
            case 'Dosage Form':
                await this.filterByName.click()
                await this.filterByDosageForm.type(searchValue)
                break;
            case 'Facility Status':
                await this.filterByName.click()
                await this.filterByFacilityStatusDropdown.click()
                switch (searchValue) {
                    case 'Active':
                        await this.filterByFacilityStatusActive.click()
                        break;
                    case 'Inactive':
                        await this.filterByFacilityStatusInactive.click()
                        break;
                    case 'Obsolete':
                        await this.filterByFacilityStatusObsolete.click()
                        break;
                    default:
                        break;
                }
            case 'Hazardous Types':
                await this.filterByName.click()
                await this.filterByHazardousTypesDropdown.click()
                switch (searchValue) {
                    case 'High Risk Hazardous':
                        await this.filterByHazardousTypesHighRisk.click()
                        break;
                    case 'Low Risk Hazardous':
                        await this.filterByHazardousTypesLowRisk.click()
                        break;
                    case 'Reproductive Risk Hazardous':
                        await this.filterByHazardousTypesReproductiveRisk.click()
                        break;
                    case 'None':
                        await this.filterByHazardousTypesNone.click()
                        break;
                    default:
                        break;
                }
                default:
                    break;
            }
        await this.filterButton.click()
    }
}
