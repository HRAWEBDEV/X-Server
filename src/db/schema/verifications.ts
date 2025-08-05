import { mysqlTable, varchar, datetime } from 'drizzle-orm/mysql-core';
import { defaultTimestamps } from '../utils/defaultTimestamps.ts';

const verifications = mysqlTable('verifications', {
 id: varchar('id', { length: 255 }).primaryKey(),
 identifier: varchar('identifier', { length: 255 }).notNull(),
 value: varchar('value', { length: 255 }).notNull(),
 expiresAt: datetime('expires_at').notNull(),
 ...defaultTimestamps,
});

export { verifications };
