
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEvilHandIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'evil-hand'];
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
        <path fill="currentColor" d="M165.98 47.744l-25.32 143.443c-28.823 29.04-82.26 43.33-117.54 49.016l.132 218.645.006-.002C60.214 406.14 115.74 321.79 177.84 291.51c87.926-6.233 189.035 1.018 269.29 122.01l-30.286-111.768-114.03-33.826c38.234-48.656 116.253-23.912 190.39 29.45l-63.015-80.312-133.442-13.59c22.58-50.88 108.657-59.573 185.336-7.413L407.95 115.75c-105.138 37.836-182.9 34.318-190.315 9.33-2.432 3.567-4.53 7.19-6.29 10.854-13.455 27.973-8.834 59.176 11.362 86.75l-15.078 11.043c-23.475-32.05-29.726-71.382-13.128-105.893 15.343-31.902 49.35-58.73 103.26-73.768l-131.782-6.32z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEvilHandIcon);
    