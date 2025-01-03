import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../users';
import { videos } from '../videos';

export const comments = pgTable('comments', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  comment: text().notNull(),
  userId: text().references(() => users.id, { onDelete: 'cascade' }),
  videoId: text().references(() => videos.id, { onDelete: 'cascade' }),
  createdAt: timestamp().defaultNow().notNull(),
});
