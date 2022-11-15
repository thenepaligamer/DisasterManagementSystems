import { test, expect } from "@playwright/test";

test("Verify Events as Admin", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.goto("http://localhost:3000/admin");

    await page.goto("http://localhost:3000/admin/login");

    await page.locator('input[name="email"]').click();

    await page.locator('input[name="email"]').fill("sachin@gmail.com");

    await page.locator('input[name="email"]').press("Tab");

    await page.locator('input[name="password"]').fill("@sachin123");

    await page.locator('input[name="password"]').press("Enter");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByRole("button", { name: "Login" }).click();

    await page.locator('input[name="password"]').click();

    await page.locator('input[name="password"]').press("Control+Shift+I");

    await page.locator('input[name="password"]').fill("@Sachin123");

    await page.locator('input[name="password"]').press("Enter");
    await expect(page).toHaveURL("http://localhost:3000/admin");

    await page.getByRole("button", { name: "Incidents" }).click();

    await page.getByRole("link", { name: "Pending Incidents" }).click();
    await expect(page).toHaveURL("http://localhost:3000/admin/pending-events");

    await page.locator(".px-6 > .font-medium").first().click();

    await page.locator(".px-6 > .font-medium").first().click();
});
