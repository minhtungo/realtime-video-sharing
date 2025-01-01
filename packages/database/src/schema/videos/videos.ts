import { boolean, integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { folders } from '../folders';
import { users } from '../users';
import { workspaces } from '../workspaces';

export const videos = pgTable('video', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text().default('Untilted Video'),
  description: text().default('No Description'),
  source: text().notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  folderId: text().references(() => folders.id, { onDelete: 'cascade' }),
  userId: text().references(() => users.id, { onDelete: 'cascade' }),
  processing: boolean().default(true).notNull(),
  workSpaceId: text().references(() => workspaces.id, { onDelete: 'cascade' }),
  views: integer('views').default(0).notNull(),
  summery: text(),
});
