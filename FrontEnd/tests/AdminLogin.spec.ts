import { test, expect } from '@playwright/test';

test('Login as Admin', async ({ page }) => {

  await page.goto('http://localhost:3000/');

  await page.goto('http://localhost:3000/admin');

  await page.goto('http://localhost:3000/admin/login');

  await page.locator('input[name="email"]').click();

  await page.locator('input[name="email"]').fill('sachin@gmail.com');

  await page.locator('input[name="email"]').press('Tab');

  await page.locator('input[name="password"]').fill('@Sachin123');

  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/admin');

});

