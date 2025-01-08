import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { folders } from './folders';

export const insertFolderSchema = createInsertSchema(folders);
export const selectFolderSchema = createSelectSchema(folders);

export type InsertFolder = typeof folders.$inferInsert;
export type Folder = typeof folders.$inferSelect;
