export const STORE_ORDER = [
  'Costco',
  'Trader Joes',
  'Target',
  'Smart & Final',
  'Asia Mart',
];

export const CATEGORIES = [
  'Produce',
  'Meat & Seafood',
  'Dairy & Eggs',
  'Bakery',
  'Frozen',
  'Pantry',
  'Beverages',
  'Snacks',
  'Household',
  'Personal Care',
];

export function toClassSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/\s*&\s*/g, '-and-')
    .replace(/\s+/g, '-');
}

export function toEmbedUrl(url: string): string {
  const watch = url.match(/youtube\.com\/watch\?.*v=([^&]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}?autoplay=1`;
  const short = url.match(/youtu\.be\/([^?]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}?autoplay=1`;
  return url;
}
