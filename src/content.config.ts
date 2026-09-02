import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()).min(1),
    date: z.coerce.date(),
    version: z.string(),
    abstract: z.string(),
    status: z.enum(['draft', 'preprint', 'published']).default('draft'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { research };
