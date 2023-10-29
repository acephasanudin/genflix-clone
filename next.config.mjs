/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd10j0070m15qtm.cloudfront.net',
                port: '',
                pathname: '',
            },
            {
                protocol: 'https',
                hostname: 'genflix-prd-uploads.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '',
            },
        ],
    },
};

export default config;
