import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSilenceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'silence'];
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
        d="M299.05 19.174c-1.69.003-3.38.038-5.064.103-58.35 2.28-110.84 41.947-126.736 101.272l-15.37 57.356 44.378 11.89 14.597-54.476c13.028-48.618 62.988-77.523 111.518-64.52 48.53 13.004 77.047 64.12 64.316 111.634l-14.598 54.478 44.38 11.89 15.368-57.355c19.06-71.135-23.9-147.997-96.897-167.556-11.998-3.214-24.046-4.738-35.892-4.716zM125.21 190.107L67.366 405.98l311.108 83.362 57.843-215.873-311.105-83.363zm123.257 59.026l87.955 51.064-13.57 51.98-63.05-42.04-11.888 96.78-1.154-.14c-.02.27-.034.544-.067.81-.772 6.284-4.553 10.746-12.172 13.825-7.617 3.08-18.856 3.833-31.178.53-12.323-3.3-23.08-9.927-30.12-17.444-7.038-7.517-10.04-15.49-9.27-21.775.773-6.285 4.554-10.748 12.173-13.827 3.81-1.54 8.524-2.497 13.826-2.658 5.303-.16 11.194.476 17.355 2.127 9.618 2.577 18.273 7.184 24.96 12.655l16.202-131.887z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSilenceIcon })
);
