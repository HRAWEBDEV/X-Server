import { mysqlTable, varchar, text, datetime } from 'drizzle-orm/mysql-core';
import { users } from './users.ts';
import { defaultTimestamps } from '../utils/defaultTimestamps.ts';

const accounts = mysqlTable('accounts', {
 userId: varchar('user_id', { length: 255 })
  .notNull()
  .references(() => users.id),
 accountId: varchar('account_id', { length: 255 }).notNull(),
 provider: varchar('provider', { length: 255 }).notNull(),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 accessTokenExpiresAt: datetime('access_token_expires_at'),
 refreshTokenExpiresAt: datetime('refresh_token_expires_at'),
 scope: varchar('scope', { length: 255 }),
 idToken: text('id_token'),
 password: text('password'),
 ...defaultTimestamps,
});

export { accounts };
