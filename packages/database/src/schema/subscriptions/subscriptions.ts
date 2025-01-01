import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { subscriptionPlanEnum } from '../constants';
import { users } from '../users';

export const subscriptions = pgTable('subscription', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text()
    .references(() => users.id)
    .unique(),
  createdAt: timestamp().defaultNow().notNull(),
  plan: subscriptionPlanEnum().default('FREE').notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  customerId: text().unique(),
});