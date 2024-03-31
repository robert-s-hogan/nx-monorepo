export const generateSlug = (name: string): string => {
  // Convert to lowercase and replace spaces and underscores with hyphens
  let slug = name.toLowerCase().replace(/[\s_]+/g, '-');
  // Remove any remaining special characters except hyphens
  slug = slug.replace(/[^a-z0-9-]/g, '');
  // Optional: Append a unique identifier (e.g., a short random string or a timestamp)
  // to ensure uniqueness if required.
  return slug;
};
