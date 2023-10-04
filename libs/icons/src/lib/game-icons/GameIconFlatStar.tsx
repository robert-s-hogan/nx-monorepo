import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFlatStarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'flat-star'];
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
        d="M16.076 67.537L144.82 235.373l-45.326 130.8L277.96 341.92l215.024 107.277L364.242 281.36l46.184-130.618-177.946 24.67L16.076 67.537zm149.23 100.42l62.15 13.113c-11.693.526-22.448 3.494-31.317 9.64-9.893 6.852-15.327 17.176-16.605 28.442l-14.23-51.195zm116.85 24.654l54.97 11.6 13.044 46.92c-6.8-12.757-17.554-25.255-31.71-36.583-11.34-9.076-23.714-16.437-36.304-21.936zm-49.168 7.204c5.38.072 11.194.718 17.274 2 18.528 3.91 39.11 13.393 56.52 27.327 17.41 13.934 28.062 29.583 31.566 42.188 3.504 12.606 1.27 20.912-7.63 27.08-8.903 6.168-24.952 8.17-43.48 4.26-18.528-3.91-39.11-13.395-56.52-27.328-17.41-13.934-28.062-29.58-31.566-42.186-3.504-12.605-1.27-20.914 7.63-27.082 5.565-3.855 13.92-6.08 23.927-6.254.75-.013 1.51-.014 2.278-.004zm-42.37 59.207c6.783 10.78 16.37 21.272 28.42 30.916 8.68 6.946 17.966 12.89 27.49 17.765l-45.018-9.497-10.893-39.182zM358.26 280.24l15.072 54.22-55.748-11.765c8.772-1.275 16.852-4.12 23.777-8.92 11.367-7.875 16.85-20.33 16.9-33.535z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFlatStarIcon })
);
