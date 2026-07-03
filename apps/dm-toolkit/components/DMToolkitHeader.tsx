import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'Home', exact: true },
  { href: '/characters', label: 'Characters' },
  { href: '/session', label: 'Session' },
  { href: '/map', label: 'Map', soon: true },
];

export default function DMToolkitHeader() {
  const router = useRouter();

  return (
    <nav className="bg-stone-900 border-b border-stone-700 px-6 py-3 flex items-center gap-6">
      <span className="font-bold text-lg tracking-widest uppercase" style={{ color: '#7a9e3a' }}>
        DM Toolkit
      </span>
      <div className="flex gap-4 ml-4">
        {links.map((link) => {
          if (link.soon) {
            return (
              <span
                key={link.href}
                className="text-stone-600 text-sm cursor-not-allowed flex items-center gap-1"
                title="Coming in Phase 3"
              >
                {link.label}
                <span className="text-xs bg-stone-800 text-stone-500 px-1.5 py-0.5 rounded">soon</span>
              </span>
            );
          }
          const isActive = link.exact
            ? router.pathname === link.href
            : router.pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive ? 'text-green-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
