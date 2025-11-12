import { format, formatDistance, formatRelative } from 'date-fns';

export const formatDate = (date: Date | string, pattern: string = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, pattern);
};

export const formatDateDistance = (date: Date | string, baseDate: Date = new Date()): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistance(dateObj, baseDate, { addSuffix: true });
};

export const formatDateRelative = (date: Date | string, baseDate: Date = new Date()): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatRelative(dateObj, baseDate);
};
