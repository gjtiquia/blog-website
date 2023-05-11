import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean()
    })
});

export const collections = {
    "blog": blogCollection
}