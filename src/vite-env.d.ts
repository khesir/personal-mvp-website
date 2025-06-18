/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_WEBHOOK_CONTACT: string;
	// Add more env vars here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
