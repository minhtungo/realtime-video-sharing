import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  firstName: text().notNull(),
  lastName: text().notNull(),
  email: text().notNull(),
  password: text(),
  emailVerified: timestamp({ mode: 'date' }),
  image: text(),
  plan: varchar({ enum: ['free', 'pro'] }).default('free'),
});
