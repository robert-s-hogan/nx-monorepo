import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  actions?: ReactNode;
}

export default function RecipesNavbar({ actions }: Props) {
  return (
    <nav className="bg-blue-600 shadow">
      <div className="container mx-auto max-w-4xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-white font-bold text-lg">
          My Recipes
        </Link>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
    </nav>
  );
}
