import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../users';
import { workspaces } from '../workspaces';

export const members = pgTable('member', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  member: boolean().default(true).notNull(),
  workSpaceId: text().references(() => workspaces.id),
});
