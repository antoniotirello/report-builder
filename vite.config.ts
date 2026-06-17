import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const appUrl = env.APP_URL || 'http://localhost:8888';

    return {
        plugins: [
            react(),
            laravel({
                input: [
                    'resources/sass/app.scss',
                    'resources/js/app.tsx',
                ],
                refresh: true,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
            },
        },
        server: {
            host: 'localhost',
            port: 5173,
            proxy: {
                '/api': { target: appUrl, changeOrigin: true },
                '/sanctum': { target: appUrl, changeOrigin: true },
            },
        },
    };
});
