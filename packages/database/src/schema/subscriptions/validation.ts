import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { subscriptions } from './subscriptions';

export const insertSubscriptionSchema = createInsertSchema(subscriptions);
export const selectSubscriptionSchema = createSelectSchema(subscriptions);

export type InsertSubscription = typeof subscriptions.$inferInsert;
export type Subscription = typeof subscriptions.$inferSelect;
