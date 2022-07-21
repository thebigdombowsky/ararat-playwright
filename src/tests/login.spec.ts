//example.spec.ts
import { test, expect } from '@playwright/test';
import { LoginClass } from '../pages/login.page';
test('Login', async ({ page }) => {
  let exampletest = new LoginClass(page);
  await exampletest.login();
})