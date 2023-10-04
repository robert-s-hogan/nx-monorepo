import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRazorBladeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'razor-blade'];
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
        d="M385.594 45.156L13.03 260.25l20.345 35.25L405.938 80.406l-20.344-35.25zm29.687 51.438L42.72 311.688l8.155 14.125c16.17-5.228 33.86-.587 45.25 11.937l28.53-16.47L134 337.47l-28.53 16.467c5.14 16.12.317 33.767-12.282 45.157l8.156 14.125 372.562-215.095L465.75 184c-16.157 5.214-33.86.563-45.25-11.938l-28.53 16.47-9.345-16.188 28.53-16.47c-5.147-16.134-.35-33.8 12.283-45.186l-8.157-14.094zm-83.124 90.812c8.675-.225 17.2 4.207 21.844 12.25 6.755 11.7 2.762 26.652-8.938 33.406-8.828 5.097-19.48 4.032-27.093-1.812l-22.283 12.844c4.868 16.798-2.108 35.36-17.937 44.5-15.835 9.142-35.388 5.904-47.5-6.72l-22.22 12.845c1.253 9.516-3.197 19.274-12.03 24.374-11.7 6.755-26.65 2.762-33.406-8.938-6.755-11.7-2.73-26.65 8.97-33.406 3.655-2.11 7.618-3.18 11.56-3.28 5.583-.146 11.1 1.637 15.564 5.06l22.218-12.81c-4.867-16.806 2.11-35.394 17.938-44.533 5.818-3.36 12.13-5.055 18.406-5.218 10.803-.282 21.43 3.975 29.094 11.968l22.25-12.844c-1.274-9.527 3.158-19.302 12-24.406 3.656-2.11 7.62-3.18 11.562-3.282zm151.094 26.906L110.687 429.406l20.344 35.25 372.564-215.094-20.344-35.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRazorBladeIcon })
);
