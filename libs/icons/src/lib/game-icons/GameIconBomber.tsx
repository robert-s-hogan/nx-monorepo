import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBomberIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bomber'];
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
        d="M220.3 22.738S90.967 121.512 87.466 156.875c-2.045 20.625 15.52 99.266 15.52 99.266s-17.602 39.467-33.96 79.432C59.515 358.81 51 434.418 51 434.418s75.3-8.543 98.44-18.092c39.8-16.428 79.11-34.11 79.11-34.11s78.57 18.053 99.235 15.966C363 394.622 461 264.424 461 264.424L220.3 22.738zm87.993 19.094l-18.39 18.473 14.71 14.77 18.397-18.468-14.717-14.775zm114.023 3.71L348.762 119.4l14.71 14.774 73.56-73.856-14.716-14.777zm-66.203 7.38l-36.775 36.935 14.71 14.772 36.784-36.933-14.72-14.775zm58.85 59.098l-36.772 36.927 14.708 14.776 36.782-36.93-14.717-14.773zm11.043 48.01l-18.387 18.468 14.706 14.773 18.395-18.467-14.714-14.774zM176.502 287.987c5.502.13 10.354 1.896 13.89 5.446 10.288 10.33 5.537 31.85-10.61 48.068-16.147 16.21-37.578 20.982-47.864 10.656-10.29-10.334-5.536-31.853 10.613-48.066 10.597-10.64 23.468-16.353 33.972-16.104zm57.076 104.024c-4.956-.228-11.433 5.645-15.42 14.416-4.557 10.023-4.135 20.03.94 22.357 5.073 2.324 12.88-3.912 17.437-13.935 4.556-10.022 4.136-20.032-.937-22.358-.635-.29-1.312-.448-2.02-.48zm22.506 41.355c-4.955-.226-11.432 5.647-15.418 14.416-4.558 10.023-4.137 20.033.936 22.36 5.075 2.324 12.883-3.915 17.44-13.936 4.555-10.023 4.134-20.037-.94-22.36-.635-.292-1.31-.448-2.018-.48zM295.027 452c-4.955-.227-11.43 5.646-15.42 14.416-4.556 10.022-4.135 20.033.94 22.36 5.073 2.324 12.882-3.916 17.437-13.938 4.557-10.022 4.136-20.032-.937-22.358-.634-.29-1.312-.448-2.02-.48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBomberIcon })
);
