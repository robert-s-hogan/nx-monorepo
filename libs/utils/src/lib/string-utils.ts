// libs/utils/src/lib/string-utils.ts

export function fixUrl(url: string): string {
  const fixedUrl = url.replace(/ /g, '-');
  return fixedUrl;
}

export function capitalize(str: string): string {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowercase(str: string): string {
  return str.toLowerCase();
}

export function uppercase(str: string): string {
  return str.toUpperCase();
}

export function titleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function trim(str: string): string {
  return str.trim();
}

export function startsWith(
  str: string,
  searchString: string,
  position?: number
): boolean {
  return str.startsWith(searchString, position);
}

export function endsWith(
  str: string,
  searchString: string,
  position?: number
): boolean {
  return str.endsWith(searchString, position);
}
