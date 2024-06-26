/**
 * Combines class names into a single string with spaces.
 * Filters out falsy values to prevent unnecessary spaces.
 *
 * @param classes - Array of class names (including undefined) to combine
 * @return Combined class string
 */
export function combineClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
