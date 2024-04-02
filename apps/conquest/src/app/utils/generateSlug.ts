export const generateSlug = (name) => {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/&/g, '-and-') // Replace '&' with 'and'
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
};
