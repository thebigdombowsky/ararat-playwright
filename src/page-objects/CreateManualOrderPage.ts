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
    this.manualOrderSelectMedication = page.getByRole("row",
      { name: "Sertraline Tablet 100mg 100 TAB, EXTENDED REL SWLG9001 Not a Hazard 171 160 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add" }).locator('#undefined-plus-icon')
    this.manualOrderIncreaseQuantity = page.getByRole('cell',
      { name: 'Load Units Lot Expiry Date UPC Qty On Hand Qty Available Qty To Order D#1970-01-01 368180352099 11 11 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add PMBOX-472 11/3/22 368180352099 8 0 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add PMBOX-472 368180352099 44 44 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add MDM-1 9/30/25 5012617016942 100 100 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add D#1970-01-01 5012617016942 5 5 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add D#1970-01-01 1/1/70 5012617016942 3 0 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).getByRole('row', { name: 'MDM-1 9/30/25 5012617016942 100 100 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).locator('#quantityToOrder-numberPickerPlusIcon')
    this.manualOrderAddQuantity = page.getByRole('cell',
      { name: 'Load Units Lot Expiry Date UPC Qty On Hand Qty Available Qty To Order D#1970-01-01 368180352099 11 11 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add PMBOX-472 11/3/22 368180352099 8 0 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add PMBOX-472 368180352099 44 44 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add MDM-1 9/30/25 5012617016942 100 100 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add D#1970-01-01 5012617016942 5 5 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add D#1970-01-01 1/1/70 5012617016942 3 0 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).getByRole('row', { name: 'MDM-1 9/30/25 5012617016942 100 100 .cls-1{fill:#26193c;} .cls-1{fill:#26193c;} Add' }).getByRole('button', { name: 'Add' })
    this.manualOrderStartUnloadingButton = page.getByRole('button', { name: '.cls-1{fill:#26193c;} Start Unloading' }).first()

  }

}