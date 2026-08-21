import { datadogVitePlugin } from '@datadog/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { version } from './package.json';

const hasDatadogApiKeys = Boolean(
    (process.env.DD_API_KEY || process.env.DATADOG_API_KEY) &&
        (process.env.DD_APP_KEY || process.env.DATADOG_APP_KEY),
);
const datadogSite = process.env.DATADOG_SITE || process.env.DD_SITE || 'datadoghq.com';

process.env.DATADOG_SITE ||= datadogSite;
process.env.DD_SITE ||= datadogSite;

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
                site: datadogSite,
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
                identifier: '23fc1b63-4cc4-444d-ad50-192e6d4f9b15',
            },
            errorTracking: {
                enable: hasDatadogApiKeys,
                sourcemaps: {
                    minifiedPathPrefix: '/',
                    releaseVersion: version,
                    service: 'sarah-s-app-fri-aug-21-1-35-59-pm',
                }
            },
            metadata: {
                name: "Sarah's App Fri, Aug 21, 1:35:59 pm",
            },
            metrics: {
                enable: hasDatadogApiKeys,
            },
        }),
    ],
});
