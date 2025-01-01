import { pgEnum } from 'drizzle-orm/pg-core';

export const roleSchema = pgEnum('role', ['member', 'admin']);

export const subscriptionPlanEnum = pgEnum('subscription_plan', ['FREE', 'PRO']);

export const accountTypeSchema = pgEnum('type', ['email', 'google', 'facebook']);

export const workspaceTypeEnum = pgEnum('workspace_type', ['PERSONAL', 'TEAM']);

export const presetEnum = pgEnum('preset', ['SD', 'HD', '4K']);
