export default function FixUrl(url) {
  const fixedUrl = url.replace(/ /g, '-');
  return fixedUrl;
}
