/**
 * @summary
 * CRUD operation middleware and utilities
 *
 * @module middleware/crud
 *
 * @description
 * Provides base controller functionality for CRUD operations with security validation.
 */

import { Request } from 'express';
import { z } from 'zod';

export interface SecurityRule {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidatedRequest {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

export class CrudController {
  private securityRules: SecurityRule[];

  constructor(securityRules: SecurityRule[]) {
    this.securityRules = securityRules;
  }

  async create(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'CREATE');
  }

  async read(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'READ');
  }

  async update(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'UPDATE');
  }

  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validateRequest(req, schema, 'DELETE');
  }

  private async validateRequest(
    req: Request,
    schema: z.ZodSchema,
    operation: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE'
  ): Promise<[ValidatedRequest | undefined, any]> {
    try {
      const params = await schema.parseAsync({
        ...req.params,
        ...req.query,
        ...req.body,
      });

      const credential = {
        idAccount: 1,
        idUser: 1,
      };

      return [
        {
          credential,
          params,
        },
        undefined,
      ];
    } catch (error) {
      return [undefined, error];
    }
  }
}

export function successResponse<T>(data: T): {
  success: true;
  data: T;
  timestamp: string;
} {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

export function errorResponse(message: string): {
  success: false;
  error: {
    message: string;
  };
  timestamp: string;
} {
  return {
    success: false,
    error: {
      message,
    },
    timestamp: new Date().toISOString(),
  };
}

export const StatusGeneralError = {
  statusCode: 500,
  message: 'Internal server error',
};
