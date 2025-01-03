import { db } from '@repo/database';
import { workspaces } from '@repo/database/schema/workspaces';
import type { InsertWorkspaces } from '@repo/database/schema/workspaces';

const createWorkspace = async (data: InsertWorkspaces, trx: typeof db = db) => {
  const [workspace] = await trx.insert(workspaces).values(data).returning({
    id: workspaces.id,
  });

  return workspace;
};

export const workspaceRepository = {
  createWorkspace,
};
