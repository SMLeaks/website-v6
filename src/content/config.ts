import { defineCollection, z } from 'astro:content';

export const collections = {
    news: defineCollection({
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.date(),
            image: image().optional(),
            draft: z.boolean().default(false),
            hidden: z.boolean().default(false)
        })
    })
}