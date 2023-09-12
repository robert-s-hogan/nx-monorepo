
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLightningFrequencyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lightning-frequency'];
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
        <path fill="currentColor" d="M33.125 19.406L135.5 128.22l81-23.157 18.72-5.344-7.564 17.936-46.125 109.78 134.282-70 26.157-13.655L328.436 170 256.5 309.25l91.25-57.125 22.97-14.375-9.22 25.47-34.625 95.624 71-36.375 21.188-10.845L410.906 334l-33.937 93.063 45.124-6.688 4.53-.656 3.313 3.155 64.313 61.47-30.5-80.5 23.313-46.908-72.5 39.532 51.062-141.158-91.188 47.47 72.344-142.813-128.217 82.81L421.875 70.063 239.03 168.69l30.44-99.563-103.845 25.25-132.5-74.97zM18.155 30.78l77.876 108.25-31.124 75.532 94.125-46.78-98.905 166.812 190.25-99.656-101.03 185.406 140.25-79.063-46.94 102.22 106.5-53-45.655 92.28 86.5-14.467 93.47 31.562-63.158-60.344-56.125 8.314-15.53 2.312 5.374-14.75 31.158-85.437-70.907 36.31-21.124 10.814 8.094-22.313 33.47-92.436-97.22 60.875-28.938 18.092L224.22 331l74.06-143.344-131.06 68.313-22.97 12 10.03-23.908 48.626-115.687-67.75 19.375-5.5 1.563-3.875-4.157L18.157 30.78z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLightningFrequencyIcon);
    