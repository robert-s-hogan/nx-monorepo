
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEarthAmericaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'earth-america'];
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
        <path fill="currentColor" d="M256 32c-37.764.086-74.894 9.72-107.938 28.002l27.52 19.36 40.033-13.694 24.582 5.62 8.78 49.864 15.1-11.588 41.087-14.046 18.26 27.742-35.82 18.963-22.473 16.152-2.458 22.475-24.932 21.07-7.023 34.064-14.047 1.053 7.023-38.63-53.027-2.807-12.64 18.61-.1-.01v26.644l25.824 1.986 23.838 16.885-1.986 25.328 33.77 5.96-.36.76 53.004-30.558 90.88 59.098-20.51 48.548-32.685 20.156-61.143 77.965-13.498-3.845L262.216 365l-42.213-42.213 7.853-13.86-25.732-9.482-25.326-30.79-21.853-4.967L116.422 208H112l-5.117 26.746-3.64-39.146 5.267-29.147-.7-23.178L97.247 98.2C55.516 140.12 32.06 196.847 32 256c0 123.712 100.288 224 224 224 82.413-.028 158.155-45.308 197.195-117.887L442.82 298.14l-5.62-36.17-34.06-27.392 6.67-37.926 15.803-20.367 37.555-5.05C428.766 87.086 346.913 32.072 256 32zm89.047 48H368v48l-32 16v-23.836zm-122.76 166.518l29.85 4.918-4.213 6.32-24.23-4.916z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEarthAmericaIcon);
    