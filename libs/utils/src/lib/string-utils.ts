// libs/utils/src/lib/string-utils.ts

export function fixUrl(url: string): string {
  const fixedUrl = url.replace(/ /g, '-');
  return fixedUrl;
}
