/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly PUBLIC_APPOINTMENT_SYSTEM_URL: string;
	readonly GEMINI_API_KEY: string;
	readonly WP_API_KEY: string;
	readonly WP_API_USER: string;
	// mais variáveis de ambiente...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
