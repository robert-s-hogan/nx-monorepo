import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FaUberIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'uber'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={`fa uber ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M414.1 32H33.9C15.2 32 0 47.2 0 65.9V446c0 18.8 15.2 34 33.9 34H414c18.7 0 33.9-15.2 33.9-33.9V65.9C448 47.2 432.8 32 414.1 32zM237.6 391.1C163 398.6 96.4 344.2 88.9 269.6h94.4V290c0 3.7 3 6.8 6.8 6.8H258c3.7 0 6.8-3 6.8-6.8v-67.9c0-3.7-3-6.8-6.8-6.8h-67.9c-3.7 0-6.8 3-6.8 6.8v20.4H88.9c7-69.4 65.4-122.2 135.1-122.2 69.7 0 128.1 52.8 135.1 122.2 7.5 74.5-46.9 141.1-121.5 148.6z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FaUberIcon })
);
