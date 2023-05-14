import { BreadcrumbProps } from '@with-nx/types';
import breadcrumbStyles from './breadcrumb.module.css';
import Link from '../link/link';

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={breadcrumbStyles.breadcrumb}>
      <ol>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li
              key={index}
              className={isLastItem ? breadcrumbStyles.active : ''}
            >
              {item.path && !isLastItem ? (
                <Link href={item.path}>{item.title}</Link>
              ) : (
                item.title
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
