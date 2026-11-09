import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    date: z.preprocess(value => {
      if (value instanceof Date && !Number.isNaN(value.getTime())) {
        const year = value.getUTCFullYear()
        const month = String(value.getUTCMonth() + 1).padStart(2, '0')
        const day = String(value.getUTCDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
      return value
    }, z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
    excerpt: z.string().min(1),
    image: z.string().startsWith('/images/'),
    banner: z.string().startsWith('/images/').optional(),
    category: z.string().min(1),
    tags: z.array(z.string()).default([]),
    author: z.string().default('David Larsen'),
    readTime: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
