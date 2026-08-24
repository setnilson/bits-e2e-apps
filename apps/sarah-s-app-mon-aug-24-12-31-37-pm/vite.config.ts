import { datadogVitePlugin } from '@datadog/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import rootManifest from '../../package.json';
import { version } from './package.json';

const hasDatadogApiKeys = Boolean(
    (process.env.DD_API_KEY || process.env.DATADOG_API_KEY) &&
        (process.env.DD_APP_KEY || process.env.DATADOG_APP_KEY),
);
process.env.DD_SITE ||= rootManifest.datadogApps?.site || 'datadoghq.com';

export default defineConfig({
    base: './',
    build: {
        sourcemap: true,
    },
    plugins: [
        react(),
        datadogVitePlugin({
            logLevel: 'debug',
            auth: {
                site: process.env.DD_SITE || rootManifest.datadogApps?.site || 'datadoghq.com',
                apiKey: process.env.DD_API_KEY,
                appKey: process.env.DD_APP_KEY,
            },
            apps: {
                enable: true,
                authOverrides: {
                    method: hasDatadogApiKeys ? 'apiKey' : 'oauth',
                },
                // Stable identity for this app, generated once when the project was scaffolded.
                // DO NOT change this value, and DO NOT set it to the app's UUID from App Builder.
                // Every upload targets the app matching this identifier — changing it makes the
                // next upload create a brand-new app instead of updating this one.
                identifier: 'c0a56101-c197-4aec-b80f-aa942295c3fe',
            },
            errorTracking: {
                enable: hasDatadogApiKeys,
                sourcemaps: {
                    minifiedPathPrefix: '/',
                    releaseVersion: version,
                    service: 'sarah-s-app-mon-aug-24-12-31-37-pm',
                }
            },
            metadata: {
                name: "Oliver's Forest",
                description: 'A snazzy forest-green Oliver display.',
            },
            metrics: {
                enable: hasDatadogApiKeys,
            },
        }),
    ],
});

// redeploy: reconcile lockfile + staging site
