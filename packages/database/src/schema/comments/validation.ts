import { comments } from './comments';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const insertCommentSchema = createInsertSchema(comments);
export const selectCommentSchema = createSelectSchema(comments);

export type InsertComment = typeof comments.$inferInsert;
export type Comment = typeof comments.$inferSelect;
