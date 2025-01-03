import { handleServiceResponse } from '@/common/lib/httpHandlers';
import { workspaceService } from './workspaceService';
import type { RequestHandler } from 'express';
import { ServiceResponse } from '@/common/models/serviceResponse';
import { StatusCodes } from 'http-status-codes';

const verifyAccess: RequestHandler = async (req, res) => {
  const { workspaceId } = req.params;
  const userId = req.user?.id;

  if (!userId) {
    return handleServiceResponse(ServiceResponse.failure('Unauthorized', null, StatusCodes.UNAUTHORIZED), res);
  }

  const serviceResponse = await workspaceService.verifyWorkspaceAccess(workspaceId, userId);
  return handleServiceResponse(serviceResponse, res);
};

export const workspaceController = {
  verifyAccess,
};
