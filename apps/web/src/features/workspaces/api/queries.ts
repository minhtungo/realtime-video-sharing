import { workspaceKeys } from '@/features/workspaces/lib/queryKeys';
import { verifyWorkspaceAccessService } from '@/features/workspaces/lib/services';
import { useQuery } from '@tanstack/react-query';

export const useVerifyWorkspaceAccess = (workspaceId: string) => {
  return useQuery({
    queryKey: workspaceKeys.verifyAccess,
    queryFn: async () => verifyWorkspaceAccessService(workspaceId),
  });
};
