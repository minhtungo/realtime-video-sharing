import { api } from '@/lib/api';
import { apiRoutes } from '@/lib/config';
import { ApiResponse } from '@repo/validation/api';

export const verifyWorkspaceAccessService = async (workspaceId: string): Promise<ApiResponse> => {
  const response = await api.get(apiRoutes.workspace.verifyAccess(workspaceId));

  return response;
};
