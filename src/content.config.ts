import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    link: z.string().url().optional(),
    cta: z.string().optional()
  })
});

const speaking = defineCollection({
  schema: z.object({
    title: z.string(),
    event: z.string(),
    eventDate: z.coerce.date(),
    description: z.string(),
    topic: z.string()
  })
});

export const collections = { insights, projects, speaking };
