import { test, expect } from '@playwright/test';

test('Delete Event', async ({ page }) => {

  await page.goto('about:blank');

  await page.goto('http://localhost:3000/admin');

  await page.goto('http://localhost:3000/admin/login');

  await page.locator('input[name="email"]').click();

  await page.locator('input[name="email"]').fill('sachin@gmail.com');

  await page.locator('input[name="email"]').press('Tab');

  await page.locator('input[name="password"]').fill('@Sachin123');

  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/admin');

  await page.getByRole('button', { name: 'Incidents' }).click();

  await page.getByRole('link', { name: 'View Incidents' }).click();
  await expect(page).toHaveURL('http://localhost:3000/admin/view-events');

  await page.locator('tr:nth-child(1) > td:nth-child(13) > .font-medium').click();

  await page.locator('tr:nth-child(4) > td:nth-child(13) > .font-medium').click();

});