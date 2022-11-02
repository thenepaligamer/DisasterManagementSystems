import { test, expect } from '@playwright/test';

test('Add-event with incomplete information', async ({ page }) => {

  await page.goto('http://localhost:3000/add-event');

  await page.getByPlaceholder('1 or 2 words').click();

  await page.getByPlaceholder('1 or 2 words').fill('Earthquake');

  await page.locator('select[name="type"]').selectOption('earthquake');

  await page.getByLabel('Description').click();

  await page.getByLabel('Description').fill('N/A');

  await page.getByPlaceholder('Rs.').click();

  await page.getByPlaceholder('Rs.').fill('20000');

  await page.getByLabel('Death').click();

  await page.getByLabel('Death').fill('1');

  await page.getByLabel('Missing').click();

  await page.getByLabel('Missing').fill('0');

  await page.getByLabel('Injured').click();

  await page.getByLabel('Injured').fill('1');

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByText('*Provide Province, District and Local by clicking on Map').click();

  await page.getByRole('button', { name: 'Submit' }).click();

});

test('Add Incident as User', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Incidents' }).click();
  await page.getByRole('link', { name: 'View Incidents' }).click();
  await expect(page).toHaveURL('http://localhost:3000/view-events');
  await page.getByRole('button', { name: 'Incidents' }).click();
  await page.getByRole('link', { name: 'Add Incidents' }).click();
  await expect(page).toHaveURL('http://localhost:3000/add-event');
  await page.getByPlaceholder('1 or 2 words').click();
  await page.getByPlaceholder('1 or 2 words').fill('Earthquake');
  await page.locator('#root div:has-text("+− Leaflet | © OpenStreetMap contributors")').nth(3).click();
  await page.locator('select[name="type"]').selectOption('earthquake');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('N/A');
  await page.getByPlaceholder('Rs.').click();
  await page.getByPlaceholder('Rs.').fill('300000');
  await page.getByLabel('Death').click();
  await page.getByLabel('Death').fill('1');
  await page.getByLabel('Missing').click();
  await page.getByLabel('Missing').fill('0');
  await page.getByLabel('Injured').click();
  await page.getByLabel('Injured').fill('1');
  await page.getByRole('button', { name: 'Submit' }).click();
});