import breadcrumbsStyles from './breadcrumbs.module.css';
import Link from '../link/link';

/* eslint-disable-next-line */
interface BreadcrumbItem {
  title: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={breadcrumbsStyles.breadcrumb}>
      <ol>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li
              key={index}
              className={isLastItem ? breadcrumbsStyles.active : ''}
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

export default Breadcrumbs;
