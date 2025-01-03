import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { workspaces } from './workspaces';

export const insertWorkspacesSchema = createInsertSchema(workspaces);
export const selectWorkspacesSchema = createSelectSchema(workspaces);

export type InsertWorkspaces = typeof workspaces.$inferInsert;
export type Workspaces = typeof workspaces.$inferSelect;
