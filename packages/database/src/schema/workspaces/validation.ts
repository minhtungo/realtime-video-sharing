import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { workspaces } from './workspaces';

export const insertWorkspacesSchema = createInsertSchema(workspaces);
export const selectWorkspacesSchema = createSelectSchema(workspaces);

export type InsertWorkspace = typeof workspaces.$inferInsert;
export type Workspace = typeof workspaces.$inferSelect;
