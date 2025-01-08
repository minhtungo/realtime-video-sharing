import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { medias } from './medias';

export const insertMediaSchema = createInsertSchema(medias);
export const selectMediaSchema = createSelectSchema(medias);

export type InsertMedia = typeof medias.$inferInsert;
export type Media = typeof medias.$inferSelect;
