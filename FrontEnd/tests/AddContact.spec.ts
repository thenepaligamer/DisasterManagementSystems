import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://localhost:3000/admin');

  await page.goto('http://localhost:3000/admin/login');

  await page.getByText('Email addressPasswordLogin').click();

  await page.locator('input[name="email"]').click();

  await page.locator('input[name="email"]').fill('sachin@gmail.com');

  await page.locator('input[name="email"]').press('Tab');

  await page.locator('input[name="password"]').fill('@Sachin123');

  await page.locator('input[name="password"]').press('Enter');
  await expect(page).toHaveURL('http://localhost:3000/admin');

  await page.getByRole('button', { name: 'Contacts' }).click();

  await page.getByRole('link', { name: 'Add Contacts' }).click();
  await expect(page).toHaveURL('http://localhost:3000/admin/add-contact');

  await page.getByPlaceholder('Full name').click();

  await page.getByPlaceholder('Full name').click();

  await page.getByPlaceholder('Full name').fill('Mr. Suman Khatri');

  await page.getByRole('combobox', { name: 'Province' }).selectOption('Madhesh');

  await page.getByRole('combobox', { name: 'District' }).selectOption('Parsa');

  await page.getByRole('combobox', { name: 'Local' }).selectOption('Parsha Gadhi Municipality');

  await page.getByLabel('Email').click();

  await page.getByLabel('Email').fill('suman20@gmail.com');

  await page.getByLabel('Email').press('Tab');

  await page.getByLabel('Phone').fill('9800000000');

  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('http://localhost:3000/admin/view-contact');

});