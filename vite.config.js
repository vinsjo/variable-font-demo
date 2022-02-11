import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/variable-font-demo/',
	plugins: [react()],
	build: {
		target: 'es2015',
	},
});
