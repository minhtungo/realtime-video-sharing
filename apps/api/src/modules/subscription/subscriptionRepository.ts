import { db } from '@repo/database';
import { subscriptions } from '@repo/database/schema/subscriptions';
import type { InsertSubscriptions } from '@repo/database/schema/subscriptions';

const createSubscription = async (data: InsertSubscriptions, trx: typeof db = db) => {
  const [subscription] = await trx.insert(subscriptions).values(data).returning({
    id: subscriptions.id,
  });

  return subscription;
};

export const subscriptionRepository = {
  createSubscription,
};
