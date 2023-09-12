
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWingedShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'winged-shield'];
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
        <path fill="currentColor" d="M133.813 37.28C103.96 66.698 96.25 109.353 110.28 145.47c-36.49-20.383-64.53-55.487-74.624-98.907-24.28 73.892 10.364 151.554 77.406 183.812-32.378 8.965-67.574-2.14-92.843-33.03 13.227 64.09 61.895 103.305 111.843 93.905-6.975 30.883-30.75 49.33-62.032 44.438 34.323 27.377 71.306 27 91.157 2.437 12.456 22.323 27.246 44.204 44.375 65.438l-23.125 12.062c16.96 26.955 42.62 53.035 75.907 77.125 31.79-23.093 55.416-48.452 72.437-74.28l-22.81-11.845c18.262-22.29 33.963-45.313 47.124-68.844 19.78 24.912 56.984 25.416 91.47-2.092-31.284 4.89-55.09-13.554-62.064-44.438 49.96 9.422 98.644-29.8 111.875-93.906-25.27 30.89-60.465 41.996-92.844 33.03 67.044-32.257 101.688-109.92 77.408-183.81-10.097 43.428-38.153 78.525-74.657 98.905 14.035-36.12 6.356-78.772-23.5-108.19 12.743 50.553-15.21 102.74-63.842 120.345-39.307 2.985-81.754 3.038-121.063.094-48.77-17.527-76.824-69.81-64.063-120.44zm252.156 130.595c-3.963 92.26-46.662 184.737-127.908 265.78-81.665-81.18-123.585-173.522-127.437-265.75 75.58 14.548 179.816 14.366 255.344-.03z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWingedShieldIcon);
    