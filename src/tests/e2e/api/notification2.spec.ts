import test from '@playwright/test'
import { Preferences } from '../../../page-objects/api/Preferences'



test("Update notification2 preference via api @regression @api @preference @notification2", async ({ request }) => {

    const preference = new Preferences(request)

    const result = await preference.preferencePut( preference.reqPut, 200)

})
