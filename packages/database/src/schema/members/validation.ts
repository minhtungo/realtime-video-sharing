import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { members } from './members';

export const insertMemberSchema = createInsertSchema(members);
export const selectMemberSchema = createSelectSchema(members);

export type InsertMember = typeof members.$inferInsert;
export type Member = typeof members.$inferSelect;
