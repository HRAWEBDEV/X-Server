import { mysqlTable, varchar, text, datetime } from 'drizzle-orm/mysql-core';
import { users } from './user.ts';
import { defaultTimestamps } from '../utils/defaultTimestamps.ts';

const sessions = mysqlTable('sessions', {
 id: varchar('id', { length: 255 }).primaryKey(),
 userId: varchar('user_id', { length: 255 })
  .notNull()
  .references(() => users.id),
 token: text('token').notNull(),
 expiresAt: datetime('expires_at').notNull(),
 ipAddress: varchar('ip_address', { length: 255 }),
 userAgent: varchar('user_agent', { length: 255 }),
 ...defaultTimestamps,
});

export { sessions };
