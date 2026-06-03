import { test, expect } from '@playwright/test';

test('auth', async ({ page }) => {
    await page.goto('https://followish.io/');

    await page.getByRole('link', { name: 'Создать вишлист' }).nth(0).click();

    await expect(page.getByRole('heading', { name: 'Войти или создать профиль' })).toBeVisible();

    await page.getByPlaceholder('mywishlist@gmail.com').fill('');

    await page.getByText('Продолжить').click();

    expect(page.waitForURL('**/auth/login'));
    await expect(page.getByRole('heading', { name: 'Введи пароль' })).toBeVisible();

    await page.locator('input[name="password"]').fill('');

    await page.getByRole('button', { name: 'Войти' }).click();
});
