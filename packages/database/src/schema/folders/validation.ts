import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { folders } from './folders';

export const insertFoldersSchema = createInsertSchema(folders);
export const selectFoldersSchema = createSelectSchema(folders);

export type InsertFolders = typeof insertFoldersSchema;
export type Folders = typeof selectFoldersSchema;
