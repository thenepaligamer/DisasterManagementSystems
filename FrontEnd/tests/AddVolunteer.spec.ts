import { test, expect } from "@playwright/test";

test("Add Volunteer", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.getByRole("link", { name: "Volunteer" }).click();
    await expect(page).toHaveURL("http://localhost:3000/volunteer");

    await page.locator('select[name="type"]').selectOption("Organization");

    await page.getByPlaceholder("Ram Bahadhur Thapa").click();

    await page.getByPlaceholder("Ram Bahadhur Thapa").fill("Ram Bahadur");

    await page
        .getByRole("combobox", { name: "Province" })
        .selectOption("Madhesh");

    await page
        .getByRole("combobox", { name: "District" })
        .selectOption("Parsa");

    await page
        .getByRole("combobox", { name: "Local" })
        .selectOption("Jagarnathpur Rural Municipality");

    await page.locator("#ward_no").click();

    await page.locator("#ward_no").fill("5");

    await page.getByPlaceholder("98-********").click();

    await page.getByPlaceholder("98-********").fill("9800000000");

    await page.getByPlaceholder("Email").click();

    await page.getByPlaceholder("Email").click();

    await page.getByPlaceholder("Email").fill("volunteer@gmail.com");

    await page.getByPlaceholder("Location").click();

    await page.getByPlaceholder("Location").fill("Jagarnathapur area");

    await page.getByPlaceholder("Manpower in numbers").click();

    await page.getByPlaceholder("Manpower in numbers").fill("10");

    await page.getByRole("button", { name: "Submit" }).click();
});
