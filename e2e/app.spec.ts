import { test, expect } from '@playwright/test';

test.describe('NEAR Starter Kit', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Near/i);
    
    await expect(page.locator('h1')).toContainText('NEAR Protocol Starter Kit');
  });

  test('wallet login button visible', async ({ page }) => {
    await page.goto('/');
    
    const connectButton = page.getByRole('button', { name: /connect/i });
    await expect(connectButton).toBeVisible();
  });

  test('NEAR logo visible in navigation', async ({ page }) => {
    await page.goto('/');
    
    const nearLogo = page.locator('nav img[alt="NEAR"]');
    await expect(nearLogo).toBeVisible();
  });

  test.skip('health endpoint returns ok (requires cf-dev)', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.status).toBe('ok');
    expect(data.network).toBeDefined();
  });
});
