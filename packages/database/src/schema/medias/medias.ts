import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { presetEnum } from '../constants';
import { users } from '../users';

export const medias = pgTable('media', {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  screen: text(),
  mic: text(),
  camera: text(),
  preset: presetEnum().default('SD').notNull(),
  userId: text()
    .references(() => users.id)
    .unique(),
});
