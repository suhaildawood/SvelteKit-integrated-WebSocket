import type { Server } from 'ws';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			wss?: Server;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
