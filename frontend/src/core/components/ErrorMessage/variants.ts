import { clsx } from 'clsx';

export interface ErrorMessageVariantProps {
  className?: string;
}

export function getErrorMessageClassName(props: ErrorMessageVariantProps): string {
  const { className } = props;

  return clsx('min-h-screen flex items-center justify-center bg-gray-50 p-4', className);
}
