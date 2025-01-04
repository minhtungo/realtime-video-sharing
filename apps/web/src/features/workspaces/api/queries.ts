import { verifyWorkspaceAccessService } from '@/features/workspaces/lib/services';
import { useQuery } from '@tanstack/react-query';

export const authKeys = {
  session: ['session'],
} as const;

export const useVerifyWorkspaceAccess = (workspaceId: string) => {
  return useQuery({
    queryKey: authKeys.session,
    queryFn: async () => verifyWorkspaceAccessService(workspaceId),
  });
};
