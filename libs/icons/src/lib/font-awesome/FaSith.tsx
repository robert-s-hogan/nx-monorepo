import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaSithIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'sith'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={`fa sith ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M0 32l69.71 118.75-58.86-11.52 69.84 91.03a146.741 146.741 0 0 0 0 51.45l-69.84 91.03 58.86-11.52L0 480l118.75-69.71-11.52 58.86 91.03-69.84c17.02 3.04 34.47 3.04 51.48 0l91.03 69.84-11.52-58.86L448 480l-69.71-118.78 58.86 11.52-69.84-91.03c3.03-17.01 3.04-34.44 0-51.45l69.84-91.03-58.86 11.52L448 32l-118.75 69.71 11.52-58.9-91.06 69.87c-8.5-1.52-17.1-2.29-25.71-2.29s-17.21.78-25.71 2.29l-91.06-69.87 11.52 58.9L0 32zm224 99.78c31.8 0 63.6 12.12 87.85 36.37 48.5 48.5 48.49 127.21 0 175.7s-127.2 48.46-175.7-.03c-48.5-48.5-48.49-127.21 0-175.7 24.24-24.25 56.05-36.34 87.85-36.34zm0 36.66c-22.42 0-44.83 8.52-61.92 25.61-34.18 34.18-34.19 89.68 0 123.87s89.65 34.18 123.84 0c34.18-34.18 34.19-89.68 0-123.87-17.09-17.09-39.5-25.61-61.92-25.61z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaSithIcon);
