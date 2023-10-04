import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOrbitIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'orbit'];
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
        d="M249.284 26.032a230.014 230.014 0 0 0-155.95 67.28 230.107 230.107 0 0 0 262.634 369.956 30.059 30.059 0 0 0 49.717-32.61c4.441-3.82 8.76-7.823 12.952-12.008A228.511 228.511 0 0 0 486 255.964 230.014 230.014 0 0 0 249.284 26.032zm8.002 14.89a214.839 214.839 0 0 1 150.299 366.596 236.298 236.298 0 0 1-11.997 11.087 30.059 30.059 0 0 0-46.585 30.582 214.839 214.839 0 1 1-91.717-408.265zm-7.952 62.712a152.485 152.485 0 0 0-103.836 47.257v6.708h24.853l7.85 16.304 20.274-4.576 25.506-1.957 26.786 13.08 13.744 13.789-8.526 11.74-26.786 5.229 13.695 19.262 4.659 7.267-12.472 18.227-18.962-5.334-16.304 6.662-5.88 12.124h-25.506l-10.366-12.974v-23.539L139 230.458l-9.806 20.16-3.273 25.984 8.5 20.963 16.305 18.307 7.293 22.885-6.64 7.85-22.965-7.07A152.566 152.566 0 0 0 402.31 212.873l-11.578 33.867-55.552 50.789-11.157-14.779 24.34-44.99-.757-27.216-23.583 15.651-7.186-27.298 30.78-63.729h1.422a152.485 152.485 0 0 0-99.705-31.534zm32.086 171.091l18.634 4.416 5.951 29.115-29.72 27.858-4.577 49.881-19.426 11.517-13.113-30.151-29.314-16.737-13.266-37.081 12.625-27.836 72.206-10.982z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOrbitIcon })
);
