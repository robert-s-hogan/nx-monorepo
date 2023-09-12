
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSightDisabledIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sight-disabled'];
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
        <path fill="currentColor" d="M405.822 78.899l24.444 24.444L100.485 433.1 76.04 408.657zM168.32 255.677a87.704 87.704 0 0 1 117.196-82.575l43.402-43.402A236.362 236.362 0 0 0 256 118.452a239.715 239.715 0 0 0-84.454 15.616 270.752 270.752 0 0 0-38.861 18.59 293.179 293.179 0 0 0-34.816 23.821 311.884 311.884 0 0 0-29.423 26.507 336.397 336.397 0 0 0-22.681 25.355l-4.46 5.554-3.93 5.267c-2.443 3.204-4.518 6.224-6.2 8.678-1.683 2.455-2.974 4.541-3.85 5.855L26 255.758l1.325 2.063c.876 1.325 2.167 3.457 3.85 5.854 1.682 2.398 3.757 5.475 6.2 8.679l3.93 5.266 4.46 5.555a336.397 336.397 0 0 0 22.68 25.355 311.895 311.895 0 0 0 29.424 26.507q7.145 5.67 14.82 11.018l60.736-60.736a87.508 87.508 0 0 1-5.106-29.642zm316.367-2.086c-.876-1.337-2.166-3.515-3.85-5.889-1.682-2.374-3.756-5.509-6.2-8.736-2.443-3.457-5.255-6.995-8.39-10.867a339.52 339.52 0 0 0-22.68-25.459 311.768 311.768 0 0 0-29.423-26.564 306.188 306.188 0 0 0-17.587-12.954l-59.375 59.375a87.692 87.692 0 0 1-114.35 114.35l-43.31 43.31A240.015 240.015 0 0 0 256 392.913a236.834 236.834 0 0 0 84.454-15.258 269.046 269.046 0 0 0 38.861-18.544 290.32 290.32 0 0 0 34.816-23.822 311.768 311.768 0 0 0 29.423-26.564 339.52 339.52 0 0 0 22.681-25.458c3.146-3.884 5.947-7.457 8.39-10.868 2.443-3.227 4.518-6.247 6.2-8.736 1.683-2.49 2.974-4.61 3.85-5.89L486 255.69z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSightDisabledIcon);
    