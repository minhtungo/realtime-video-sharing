import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { videos } from './videos';

export const insertVideosSchema = createInsertSchema(videos);
export const selectVideosSchema = createSelectSchema(videos);

export type InsertVideo = typeof videos.$inferInsert;
export type Video = typeof videos.$inferSelect;
