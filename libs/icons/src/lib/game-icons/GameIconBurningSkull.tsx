
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBurningSkullIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'burning-skull'];
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
        <path fill="currentColor" d="M268.725 389.28l3.74 28.7h-30.89l3.74-28.7a11.705 11.705 0 1 1 23.41 0zm33.84-71.83a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zm-94.4 0a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zm245.71-62c0 98.2-48.22 182.68-117.39 220.24-46 28.26-112.77 28.26-156.19 2.5-71.72-36.21-122.17-122.29-122.17-222.73 0-78.16 30.54-147.63 77.89-191.67 0 0-42.08 82.86 9.1 135-11.67-173.77 169.28-63 118-184 151.79 83.33 9.14 105 84.1 148.21 0 0 66.21 47 36.4-91.73 42.95 43.99 70.25 110.3 70.25 184.19zm-68.54 29.87c-2.45-65.49-54.88-119.59-120.26-124.07-3.06-.21-6.15-.31-9.16-.31a129.4 129.4 0 0 0-129.43 129.35 132.15 132.15 0 0 0 24.51 76v25a35 35 0 0 0 34.74 34.69h6.26v16.61a34.66 34.66 0 0 0 34.71 34.39h61.78a34.48 34.48 0 0 0 34.51-34.39v-16.61h5.38a34.89 34.89 0 0 0 34.62-34.75v-28a129.32 129.32 0 0 0 22.33-77.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBurningSkullIcon);
    