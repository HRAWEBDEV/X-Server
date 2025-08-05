import { mysqlTable, varchar, boolean } from 'drizzle-orm/mysql-core';
import { defaultTimestamps } from '../utils/defaultTimestamps.ts';

const users = mysqlTable('users', {
 id: varchar('id', { length: 255 }).primaryKey(),
 name: varchar('name', { length: 255 }).notNull(),
 email: varchar('email', { length: 255 }).notNull(),
 emailVerified: boolean('email_verified').default(false),
 image: varchar('image', { length: 255 }),
 ...defaultTimestamps,
});

export { users };
