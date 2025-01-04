import { apiClient } from '@/lib/api-client';
import { apiRoutes } from '@/lib/config';
import type { Session } from '@repo/validation/user';
import { useQuery } from '@tanstack/react-query';

export const authKeys = {
  session: ['session'],
} as const;

export const useSession = () => {
  return useQuery({
    queryKey: authKeys.session,
    queryFn: async () => {
      const response = await apiClient.get<Session>(apiRoutes.auth.session);
      if (!response.success) return null;
      return response.data;
    },
  });
};
