
  import DynamicIconWrapper from '../DynamicIconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCastle copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'castle copy'];
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
        <path fill="currentColor" d="M254.25 15.344c-132.537 0-240.188 107.62-240.188 240.156 0 132.537 107.65 240.188 240.188 240.188 132.537 0 240.156-107.65 240.156-240.188 0-132.537-107.62-240.156-240.156-240.156zm0 18.687c122.436 0 221.47 99.034 221.47 221.47 0 65.65-28.465 124.583-73.75 165.125V238.75l14-22.78h-7.595L364 101.5l-43.813 114.47h-8.156l14.595 22.78v33.875h-36.813v-88.188l14.625-22.78h-7.593l-44.406-114.47-44.375 114.47h-7.594l14.03 22.78v123.22h-37.375v-18.094l14.594-22.782h-8.19l-43.78-114.467L95.344 266.78H87.75l14.03 22.783V416.25C59.25 375.9 32.75 318.83 32.75 255.5c0-122.436 99.064-221.47 221.5-221.47zm1.094 160.532h18.687v36.344h-18.686v-36.344zm110.156 87.97h18.688v36.312H365.5V282.53zm-246.656 22.03h18.687v36.344h-18.686v-36.344zm50.875 29.407h18.686v36.342H169.72V333.97zm170.81 30.5h18.69v36.342h-18.69V364.47z"/>
      </svg>
    );
  };
  
  export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCastle copyIcon })
);

    