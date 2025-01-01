import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';
import { accounts } from './accounts';

export const insertAccountsSchema = createInsertSchema(accounts);
export const selectAccountsSchema = createSelectSchema(accounts);

export type InsertAccounts = z.infer<typeof insertAccountsSchema>;
export type Accounts = z.infer<typeof selectAccountsSchema>;
