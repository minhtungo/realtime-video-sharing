import { getSessionToken } from '@/lib/auth';
import { env } from '@/lib/env';
import type { ApiResponse } from '@repo/validation/api';

interface FetchOptions extends RequestInit {
  body: any;
}

const API_BASE_URL = env.NEXT_PUBLIC_EXTERNAL_SERVER_URL;

const createBaseConfig = async (options: Partial<FetchOptions>) => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    const sessionToken = await getSessionToken();

    options.headers = {
      Cookie: `${env.SESSION_COOKIE_NAME}=${sessionToken}`,
    };
  }

  return {
    ...options,
    ...(options?.body ? { body: JSON.stringify(options.body) } : {}),
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
    credentials: 'include' as RequestCredentials,
  };
};

const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    throw new Error('An error occurred please try later.');
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'An error occurred please try later.');
  }

  return data;
};

const request = async <T>(url: string, options: Partial<FetchOptions> = {}) => {
  const config = await createBaseConfig(options);
  return await fetch(url, config);
};

export const apiClient = {
  get: async <T>(endpoint: string, options?: Omit<FetchOptions, 'method' | 'body'>): Promise<ApiResponse<T>> => {
    const response = await request(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: 'GET',
    });

    return handleResponse<T>(response);
  },
  post: async <T>(endpoint: string, options?: Omit<FetchOptions, 'method'>): Promise<ApiResponse<T>> => {
    const response = await request(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: 'POST',
    });

    return handleResponse<T>(response);
  },
  put: async <T>(endpoint: string, options?: Omit<FetchOptions, 'method'>): Promise<ApiResponse<T>> => {
    const response = await request(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: 'PUT',
    });

    return handleResponse<T>(response);
  },
  patch: async <T>(endpoint: string, options?: Omit<FetchOptions, 'method'>): Promise<ApiResponse<T>> => {
    const response = await request(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: 'PATCH',
    });

    console.log('response', response);

    return handleResponse<T>(response);
  },
  delete: async <T>(endpoint: string, options?: Omit<FetchOptions, 'method'>): Promise<ApiResponse<T>> => {
    const response = await request(`${API_BASE_URL}${endpoint}`, {
      ...options,
      method: 'DELETE',
    });

    return handleResponse<T>(response);
  },
};
