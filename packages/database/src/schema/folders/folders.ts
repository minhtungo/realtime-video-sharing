import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { workspaces } from '../workspaces';

export const folders = pgTable('folder', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text().default('Untitled Folder').notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  workSpaceId: text().references(() => workspaces.id),
});
