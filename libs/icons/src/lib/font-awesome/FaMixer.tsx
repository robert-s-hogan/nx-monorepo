import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaMixerIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'mixer'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa mixer ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M114.57,76.07a45.71,45.71,0,0,0-67.51-6.41c-17.58,16.18-19,43.52-4.75,62.77l91.78,123L41.76,379.58c-14.23,19.25-13.11,46.59,4.74,62.77A45.71,45.71,0,0,0,114,435.94L242.89,262.7a12.14,12.14,0,0,0,0-14.23ZM470.24,379.58,377.91,255.45l91.78-123c14.22-19.25,12.83-46.59-4.75-62.77a45.71,45.71,0,0,0-67.51,6.41l-128,172.12a12.14,12.14,0,0,0,0,14.23L398,435.94a45.71,45.71,0,0,0,67.51,6.41C483.35,426.17,484.47,398.83,470.24,379.58Z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaMixerIcon);
