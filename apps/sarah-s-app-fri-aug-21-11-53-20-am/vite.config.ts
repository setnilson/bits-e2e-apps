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
                identifier: '017218f2-dcee-42cd-9dac-29db5456b4f7',
            },
            errorTracking: {
                enable: hasDatadogApiKeys,
                sourcemaps: {
                    minifiedPathPrefix: '/',
                    releaseVersion: version,
                    service: 'sarah-s-app-fri-aug-21-11-53-20-am',
                }
            },
            metadata: {
                name: "Sarah's App Fri, Aug 21, 11:53:20 am",
            },
            metrics: {
                enable: hasDatadogApiKeys,
            },
        }),
    ],
});
