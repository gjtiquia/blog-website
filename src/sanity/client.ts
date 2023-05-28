// Reference: https://github.com/sanity-io/sanity-template-astro-clean/blob/main/app/src/utils/sanity.ts

import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: 'lmoctsz6',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache if you want to ensure fresh data
    apiVersion: '2023-05-18', // use current date (YYYY-MM-DD) to target the latest API version
}

export const client = createClient(config)



