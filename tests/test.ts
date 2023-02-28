import { expect, test } from '@playwright/test';

test('verify the GET request', async ({ page }) => {
	await page.goto('/');
	await page.locator('button', { hasText: 'Request Data from GET endpoint' }).click();
	const logElement = await page.locator('ul');
	const logHtml = await logElement.innerHTML();
	// console.log('Log HTML', logHtml);
	expect(logHtml).toContain('[GET] data received:');
});

test('verify the WebSocket connection', async ({ page }) => {
	await page.goto('/');
	await page.locator('button', { hasText: 'Establish WebSocket connection' }).click();
	await page.locator('button', { hasText: 'Request Data from GET endpoint' }).click();
	await page.waitForLoadState('networkidle');
	const logElement = await page.locator('ul');
	const logHtml = await logElement.innerHTML();
	// console.log('Log HTML', logHtml);
	expect(logHtml).toContain('[websocket] connection open');
	expect(logHtml).toContain('[websocket] message received:');
	expect(logHtml).toContain('[GET] data received:');
});
