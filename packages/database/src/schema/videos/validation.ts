import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { videos } from './videos';

export const insertVideosSchema = createInsertSchema(videos);
export const selectVideosSchema = createSelectSchema(videos);

export type InsertVideos = typeof insertVideosSchema;
export type Videos = typeof selectVideosSchema;
