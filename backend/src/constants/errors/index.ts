/**
 * @summary
 * Error codes and messages
 *
 * @module constants/errors
 *
 * @description
 * Defines standard error codes and messages used throughout the application.
 */

export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export const ERROR_MESSAGES = {
  VALIDATION_ERROR: 'Validation failed',
  UNAUTHORIZED: 'Authentication required',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  CONFLICT: 'Resource conflict',
  INTERNAL_ERROR: 'Internal server error',
} as const;
