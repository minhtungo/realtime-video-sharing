import { db } from '@repo/database';
import { type InsertWorkspaces, workspaces } from '@repo/database/schema/workspaces';
import { eq } from 'drizzle-orm';

const createWorkspace = async (data: InsertWorkspaces, trx: typeof db = db) => {
  const [workspace] = await trx.insert(workspaces).values(data).returning({
    id: workspaces.id,
  });

  return workspace;
};

const getWorkspaceById = async (id: string) => {
  const workspace = await db.query.workspaces.findFirst({
    where: eq(workspaces.id, id),
  });

  return workspace;
};

export const workspaceRepository = {
  createWorkspace,
  getWorkspaceById,
};
