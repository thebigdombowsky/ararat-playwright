import { Locator, Page } from  '@playwright/test'

export class CreateManualOrderPage {

  readonly page: Page
  readonly manualOrderCabinetRefill: Locator
  readonly manualOrderPatientPrescription: Locator
  readonly manualOrderLocationDropdown: Locator
  readonly manualOrderLocationSelection: Locator
  readonly manualOrderNextButton: Locator
  readonly manualOrderSelectMedication: Locator
  readonly manualOrderIncreaseQuantity: Locator
  readonly manualOrderAddQuantity: Locator
  readonly manualOrderStartUnloadingButton: Locator

  constructor(page:Page){

    this.page=page
    this.manualOrderCabinetRefill = page.getByRole('button', { name: 'Cabinet Refill' })
    this.manualOrderPatientPrescription = page.getByRole('button', { name: 'Patient Prescription' })
    this.manualOrderLocationDropdown = page.getByText('Type any part of location\'s name')
    this.manualOrderLocationSelection = page.getByRole('option', { name: 'Nurse Station 2' })
    this.manualOrderNextButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Next' }).first()
    this.manualOrderSelectMedication = page.getByRole('row', { name: 'Metoprolol Succinate ER 50 CAPSULE SWLG7000 Not a Hazard 9 9 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).locator('#undefined-plus-icon')
    this.manualOrderIncreaseQuantity = page.getByRole('cell', { name: 'Load Units Lot Expiry Date UPC Qty On Hand Qty Available Qty To Order BST-1 9/24/25 04150010165179 9 9 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).locator('#quantityToOrder-numberPickerPlusIcon')
    this.manualOrderAddQuantity = page.getByRole('cell', { name: 'Load Units Lot Expiry Date UPC Qty On Hand Qty Available Qty To Order BST-1 9/24/25 04150010165179 9 9 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).getByRole('button', { name: 'Add' })
    this.manualOrderStartUnloadingButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Start Unloading' }).first()

  }

}