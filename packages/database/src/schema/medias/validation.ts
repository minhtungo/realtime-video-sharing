import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { medias } from './medias';

export const insertMediasSchema = createInsertSchema(medias);
export const selectMediasSchema = createSelectSchema(medias);

export type InsertMedias = typeof insertMediasSchema;
export type Medias = typeof selectMediasSchema;
