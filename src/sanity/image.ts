// Reference: https://github.com/sanity-io/sanity-template-astro-clean/blob/main/app/src/utils/image.ts

import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
    return builder.image(source);
}