import { test, expect } from '@playwright/test'

test('operation1 kv', async ({ request }) => {
  const response = await response.get(`http://pmararat-qa-shva.thedevcloud.net:8500/v1/kv/config/operation1/data`) 

})