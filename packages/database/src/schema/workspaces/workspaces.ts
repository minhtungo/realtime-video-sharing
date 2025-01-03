import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { workspaceTypeEnum } from '../constants';
import { users } from '../users';

export const workspaces = pgTable('workspaces', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  type: workspaceTypeEnum('type').notNull(),
  name: text().notNull(),
  userId: text().references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
