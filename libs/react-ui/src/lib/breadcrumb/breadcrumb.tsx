import { BreadcrumbProps } from '@with-nx/types';
import Link from '../link/link';

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap p-3 mb-4 bg-gray-200 rounded-sm">
      <ol className="flex flex-wrap pl-0 mb-0 list-none">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li
              key={index}
              className={`${
                isLastItem ? 'text-black font-semibold' : 'text-gray-600'
              } flex items-center text-sm`}
            >
              {item.path && !isLastItem ? (
                <Link
                  href={item.path}
                  className="text-inherit no-underline hover:underline"
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
              {!isLastItem && <span className="px-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
