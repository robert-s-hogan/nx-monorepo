import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOphiuchusIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ophiuchus'];
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
        d="M88.156 27.25s-4.01 66.82.22 148.875c-35.462 25.506-59.087 71.472-58.94 126.47l72.595-.19c6.342 35.16 15.387 69.205 28.94 99.47 10.45 23.343 23.684 44.876 42.905 62 19.22 17.124 45.834 28.813 74.063 28.813 28.23 0 54.81-11.69 74.03-28.813 19.222-17.124 32.455-38.657 42.907-62 7.628-17.035 13.81-35.266 18.906-54.22 28.346-5.545 55.596-23.202 72.782-49.655 17.925-27.59 26.084-62.656 26-104.562l-76.125.125c5.828-89.823 1.25-166.313 1.25-166.313l-84.843 4.97s5.772 102.672-5.313 203.093c-.418 3.8-.87 7.59-1.343 11.375-9.33-6.544-18.675-14.97-27.156-25.438-31.456-38.824-73.616-62.668-116.468-66.72-2.58-68.13.438-122.31.438-122.31l-84.844-4.97zm91 215.375c14.277 4.834 29.857 14.9 43.813 32.125 21.47 26.5 47.323 47.977 75.593 61.094-3.414 11.558-7.157 22.14-11.25 31.28-7.198 16.076-15.318 27.412-21.907 33.282-6.59 5.87-10.235 7.28-17.47 7.28-7.232 0-10.91-1.41-17.5-7.28-6.588-5.87-14.707-17.206-21.905-33.28-13.695-30.59-23.664-76.837-29.374-124.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOphiuchusIcon })
);
