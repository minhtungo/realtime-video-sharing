import { ServiceResponse } from '@/common/models/serviceResponse';
import { StatusCodes } from 'http-status-codes';
import { workspaceRepository } from './workspaceRepository';
import { handleServiceError } from '@/common/lib/utils';

const verifyAccess = async (workspaceId: string, userId: string) => {
  try {
    const workspace = await workspaceRepository.getWorkspaceById(workspaceId);

    if (!workspace) {
      return ServiceResponse.failure('Workspace not found', null, StatusCodes.NOT_FOUND);
    }

    if (workspace.userId !== userId) {
      return ServiceResponse.failure('Unauthorized access to workspace', null, StatusCodes.FORBIDDEN);
    }

    return ServiceResponse.success('Access verified', { workspace }, StatusCodes.OK);
  } catch (ex) {
    return handleServiceError(ex as Error, 'Verifying workspace access');
  }
};

export const workspaceService = {
  verifyAccess,
};
