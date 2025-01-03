import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Router } from 'express';
import { z } from 'zod';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { workspaceController } from './workspaceController';
import assertAuthenticated from '@/middlewares/assertAuthenticated';

export const workspaceRegistry = new OpenAPIRegistry();
export const workspaceRouter: Router = express.Router();

workspaceRegistry.registerPath({
  method: 'get',
  tags: ['Workspace'],
  path: '/workspaces/{workspaceId}/verify-access',
  request: {
    params: z.object({
      workspaceId: z.string(),
    }),
  },
  responses: createApiResponse(
    z.object({
      workspace: z.object({
        id: z.string(),
        name: z.string(),
        userId: z.string(),
      }),
    }),
    'Success'
  ),
});

workspaceRouter.get('/:workspaceId/verify-access', assertAuthenticated, workspaceController.verifyAccess);
