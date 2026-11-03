// Card HTML comes from imported decks, so it's untrusted. Everything
// outside these allow-lists is unwrapped to its text (or dropped, for
// script-like tags), event handlers and javascript: links never survive,
// and inline styles keep only harmless properties. Images point at the
// person's own media (by name) or https/data URLs.
const ALLOWED = new Set([
  'B', 'STRONG', 'I', 'EM', 'U', 'S', 'STRIKE', 'DEL', 'INS', 'MARK', 'BR', 'HR', 'P', 'DIV', 'SPAN',
  'UL', 'OL', 'LI', 'SUB', 'SUP', 'CODE', 'PRE', 'SMALL', 'BIG', 'FONT', 'BLOCKQUOTE', 'CENTER',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR', 'TD', 'TH',
  'CAPTION', 'IMG', 'A', 'RUBY', 'RT', 'RP', 'DETAILS', 'SUMMARY', 'BUTTON', 'KBD', 'DL', 'DT', 'DD',
  'FIGURE', 'FIGCAPTION',
]);

const DROP = new Set([
  'SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'TEMPLATE', 'NOSCRIPT', 'TITLE', 'HEAD',
  'LINK', 'META', 'FORM', 'INPUT', 'TEXTAREA', 'SELECT', 'SVG', 'MATH', 'VIDEO', 'AUDIO', 'BASE',
]);

const ATTRS: Record<string, string[]> = {
  '*': ['class', 'style', 'title', 'dir', 'lang', 'id'],
  IMG: ['src', 'alt', 'width', 'height'],
  A: ['href'],
  FONT: ['color', 'face', 'size'],
  TD: ['colspan', 'rowspan', 'align'],
  TH: ['colspan', 'rowspan', 'align'],
  P: ['align'],
  DIV: ['align'],
  OL: ['start', 'type'],
  // Only the reviewer's own replay buttons (template.ts) carry this.
  BUTTON: ['data-sound', 'type', 'aria-label'],
};

const STYLE_PROPS = new Set([
  'color', 'background-color', 'font-weight', 'font-style', 'font-size', 'font-family',
  'text-align', 'text-decoration', 'vertical-align', 'line-height', 'white-space',
  'margin', 'margin-left', 'margin-right', 'margin-top', 'margin-bottom',
  'padding', 'padding-left', 'padding-right', 'border', 'border-radius', 'width', 'max-width',
  'height', 'max-height', 'display', 'direction',
]);

function cleanStyle(style: string): string {
  return style
    .split(';')
    .map((d) => d.trim())
    .filter((d) => {
      const [prop, ...rest] = d.split(':');
      const value = rest.join(':').toLowerCase();
      return STYLE_PROPS.has(prop?.trim().toLowerCase()) && !/url\(|expression|@import|\\/.test(value);
    })
    .join('; ');
}

export type MediaResolver = (name: string) => string | null;

function clean(parent: Element, resolve: MediaResolver) {
  for (const child of Array.from(parent.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) continue;
    if (child.nodeType !== Node.ELEMENT_NODE) {
      child.remove();
      continue;
    }
    const el = child as Element;
    if (DROP.has(el.tagName)) {
      el.remove();
      continue;
    }
    clean(el, resolve);
    if (!ALLOWED.has(el.tagName)) {
      el.replaceWith(...Array.from(el.childNodes));
      continue;
    }
    const allowed = new Set([...ATTRS['*'], ...(ATTRS[el.tagName] ?? [])]);
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase();
      if (!allowed.has(name)) {
        el.removeAttribute(attr.name);
      } else if (name === 'style') {
        const s = cleanStyle(attr.value);
        if (s) el.setAttribute('style', s);
        else el.removeAttribute('style');
      }
    }
    if (el.tagName === 'IMG') {
      const src = el.getAttribute('src') ?? '';
      const url = /^(https:|data:image\/(png|jpe?g|gif|webp);)/i.test(src)
        ? src
        : src && !/^[a-z]+:/i.test(src)
          ? resolve(decodeURIComponent(src))
          : null;
      if (url) el.setAttribute('src', url);
      else el.remove();
    }
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') ?? '';
      if (/^https?:\/\//i.test(href)) {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      } else {
        el.removeAttribute('href');
      }
    }
  }
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function sanitizeHtml(html: string, resolve: MediaResolver = () => null): string {
  // No DOM during server render: show it escaped until the client takes over.
  if (typeof DOMParser === 'undefined') return escapeHtml(html);
  const doc = new DOMParser().parseFromString(html, 'text/html');
  clean(doc.body, resolve);
  return doc.body.innerHTML;
}

/** Note type CSS goes inside a shadow root; still keep it from loading URLs. */
export function sanitizeCss(css: string): string {
  return css.replace(/@import[^;]*;?/gi, '').replace(/url\([^)]*\)/gi, 'none');
}
