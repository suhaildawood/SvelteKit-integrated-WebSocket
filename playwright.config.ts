import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run prodServer',
		port: 3005,
	},
	testDir: 'tests'
};

export default config;
