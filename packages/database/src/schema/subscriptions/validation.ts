import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { subscriptions } from './subscriptions';

export type InsertSubscriptions = typeof subscriptions.$inferInsert;
export type Subscriptions = typeof subscriptions.$inferSelect;

export const insertSubscriptionsSchema = createInsertSchema(subscriptions);
export const selectSubscriptionsSchema = createSelectSchema(subscriptions);
