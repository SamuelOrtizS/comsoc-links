import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const links = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/links' }),
  schema: z.object({
    titulo: z.string(),
    url: z.string(),
    icono: z.string(),
    categoria: z.string(),
    orden: z.number().optional().default(99),
    destacado: z.boolean().optional().default(false),
    descripcion: z.string().optional(),
  }),
});

export const collections = { links };
