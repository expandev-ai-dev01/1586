/**
 * @summary
 * Global error handling middleware
 *
 * @module middleware/error
 *
 * @description
 * Provides centralized error handling for all API endpoints.
 * Formats error responses consistently and logs errors for monitoring.
 */

import { Request, Response, NextFunction } from 'express';

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export async function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.error('Error:', {
    message: error.message,
    stack: error.stack,
    path: req.path,
    method: req.method,
  });

  const statusCode = error.statusCode || error.status || 500;
  const errorCode = error.code || 'INTERNAL_SERVER_ERROR';
  const errorMessage = error.message || 'An unexpected error occurred';

  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  res.status(statusCode).json(errorResponse);
}
