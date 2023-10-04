import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGoldMineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gold-mine'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M403.818 33.117l-369.554 15.4v46.012L426.97 79.425l-23.152-46.31zM385.334 99.04l-30.408 1.17 9.78 185.806 38.554-7.71L385.334 99.04zm-135.152 5.198l-18.39.71-2.694 15.61-26.578 18.75.13.866-.273-.047-3.063 17.738 6.188 1.07 4.617 30.395 31.532 5.445 14.543-27.088 6.186 1.07 3.063-17.74-.273-.046.416-.773-18.75-26.578 3.346-19.382zm-77.444 2.98l-22.82.878-39.47 54.775-1.692 33.138 63.982-88.79zm-77.625 2.985l-31.275 1.203-28.72 272.832 45.66 6.733 14.335-280.767zM236.928 128.1l14.457 20.49-34.947-6.035 20.49-14.455zm-20.516 32.718l28.87 4.985-7.012 13.064-19.63-3.39-2.228-14.66zM437.12 289.89l-76.434 15.288-44.99-14.998-28.706 28.703h169.457L437.12 289.89zm-260.05 2.268l-9.42 20.725h-16.386v18h8.205l-7.275 16h-22.93v18h14.75l-8.183 18h-26.568v18h18.386l-13.636 30h-24.75v18h16.568l-8.762 19.275 16.387 7.45 12.147-26.725h143.423l-6.75-18H133.785l13.637-30h103.605l-6.75-18h-88.673l8.18-18h73.74l-6.75-18h-58.807l7.273-16h45.535l-4.498-12h41.258l6-6h-80.113l6.035-13.276-16.387-7.45zm69.182 44.725l40.36 107.635c6.022-8.242 15.748-13.635 26.652-13.635 11.916 0 22.43 6.438 28.234 16h55.53c5.804-9.562 16.32-16 28.236-16 10.424 0 19.768 4.93 25.832 12.564l26.64-106.564H246.252zm67.012 112c-8.39 0-15 6.61-15 15s6.61 15 15 15 15-6.61 15-15-6.61-15-15-15zm112 0c-8.39 0-15 6.61-15 15s6.61 15 15 15 15-6.61 15-15-6.61-15-15-15z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGoldMineIcon })
);
