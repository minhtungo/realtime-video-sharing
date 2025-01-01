import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { members } from './members';

export const insertMembersSchema = createInsertSchema(members);
export const selectMembersSchema = createSelectSchema(members);

export type Members = typeof insertMembersSchema;
export type SelectMembers = typeof selectMembersSchema;
