import pageIndicatorStyles from './page-indicator.module.css';
import { PageIndicatorProps } from '@with-nx/types';

export const PageIndicator = (props: PageIndicatorProps) => {
  const { page, total, className } = props;

  const indicators = [];
  for (let i = 0; i < total; i++) {
    const isCurrent = i === page;
    indicators.push(
      <div
        key={i}
        className={`rounded h-1.5 ${className ? className : 'bg-red-500'} ${
          isCurrent ? 'w-6' : 'opacity-40 w-4'
        }`}
      ></div>
    );
  }

  return <div className="flex items-center space-x-1 p-2">{indicators}</div>;
};
