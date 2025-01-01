import { comments } from './comments';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export type InsertComments = typeof comments.$inferInsert;
export type Comments = typeof comments.$inferSelect;

export const insertCommentsSchema = createInsertSchema(comments);
export const selectCommentsSchema = createSelectSchema(comments);
