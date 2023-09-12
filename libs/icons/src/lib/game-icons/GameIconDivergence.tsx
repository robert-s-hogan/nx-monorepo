
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDivergenceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'divergence'];
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
        <path fill="currentColor" d="M258.594 13.75l-8.03 13.438-80.69 135.187-8.436 14.125H220.435v208.75l-69.092-86.188 36.25-29 12.875-10.28-15.407-5.75-147.47-55.188-14.656-5.47 2.125 15.5L46.5 364.845l2.25 16.28 12.844-10.28 30.062-24.03 116.75 145.842h32.656l-138.156-178.78-40.125 32.093-7.405-53.94c6.306 5.892 14.752 9.5 24.063 9.5 19.49 0 35.312-15.79 35.312-35.28 0-7.974-2.665-15.34-7.125-21.25l55.438 20.75-45.563 36.47L248.72 472V157.812h-54.345l29.28-49.03c1.594 18.015 16.697 32.124 35.126 32.124 18.23 0 33.26-13.796 35.126-31.53l28.906 48.436h-55.406v317l133.5-172.718-45.437-36.344 53.124-19.875c-4.073 5.754-6.47 12.79-6.47 20.375 0 19.49 15.792 35.28 35.282 35.28 10.322 0 19.61-4.434 26.063-11.5l-7.69 55.94-40.28-32.22-138.25 178.906h32.78L426.814 346.75l30.125 24.094 12.875 10.28 2.218-16.28 21.44-155.97 2.124-15.5-14.656 5.47L333.5 254.03l-15.406 5.75 12.844 10.283L367.125 299l-70.438 87.875V176.5h59.033l-8.44-14.125-80.655-135.188-8.03-13.437z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDivergenceIcon);
    