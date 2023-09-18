import { expect, Locator, Page } from  '@playwright/test'

export class LandingPageDashboard {
    
    readonly page: Page
    readonly dashboardLabel: Locator
    readonly dashboardDevice: Locator
    readonly dashboardStatusTitle: Locator
    readonly dashboardStatusValue: Locator
    readonly dashboardStatusDetails: Locator
    readonly dashboardActiveJobsLabel: Locator
    readonly dashboardActiveJobsIcon: Locator
    readonly dashboardActiveJobsDetails: Locator


    constructor(page:Page){

        this.page=page
        this.dashboardLabel = page.getByRole('heading', { name: 'Dashboard' })
        this.dashboardDevice = page.locator('#application-container > main > div > app-dashboard-home > div > div:nth-child(1) > shv-headerbar > div.row.title-with-tooltip > h1')
        this.dashboardStatusTitle = page.locator('#systemStatuses > div > div > div > div > div.dashboard-card-title-container > h2')
        this.dashboardStatusValue = page.locator('#statusIcon')
        this.dashboardStatusDetails = page.locator('#detailsLink > span')
        this.dashboardActiveJobsLabel = page.locator('#activeMachineJobs > div > div > div > div > div.dashboard-card-title-container > h2')
        this.dashboardActiveJobsIcon = page.locator('#info-card-icon')
        this.dashboardActiveJobsDetails = page.locator('#activeMachineJobs > div > div > div > div > div.dashboard-card-content-container.card-size > div > div > h1')
    
    }
       
    async verifyDashboard()
    {

        await expect(this.dashboardLabel).toHaveText('Dashboard')

    }

}
