
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shower'];
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
        <path fill="currentColor" d="M54.42 18l21.598 37.41 39.837-23-8.32-14.41H54.42zm70.435 29.998l-39.837 23 8 13.857 39.837-23-8-13.857zm97.01 3.805c-1.94.005-3.882.069-5.824.185-32.718 1.964-66.393 20.955-94.105 36.955-27.713 16-60.995 35.669-79.055 63.022-17.151 25.977-22.485 58.618 3.46 107.639L307.53 108.807c-27.637-44.044-56.554-57.083-85.664-57.004zm94.84 72.492l-261.539 151 8 13.855 261.54-151-8-13.855zm19.385 28.066l-17.934 10.356L494 265.68v-20.858l-157.91-92.46zm-58.182 33.592l-16.039 9.26L494 438.95V412.85L277.908 185.953zm67.455 17.113l-11.345 13.973 107.533 87.307 11.345-13.975-107.533-87.305zm-124.99 16.104l-15.588 9.002 84.194 148.133 15.648-8.895-84.254-148.24zm-28.586 34.238l-16.24 7.762L286.83 494h19.953L191.787 253.408zm96.533 5.916l-14.463 10.715L439.801 494h22.404L288.32 259.324zm-162.103 14.21l-16.1 9.294L168.836 494h18.682l-61.301-220.467zM90.28 294.278l-16.562 9.563 12.416 68.678 17.713-3.202L90.28 294.28zm91.194 27.746l-16.875 6.266L226.133 494h19.199l-63.857-171.975zm140.93 80.065l-15.52 9.119L355.535 494h20.877l-54.008-91.91zm-210.96 11.683l-17.81 2.61L105.015 494h18.192l-11.762-80.227z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShowerIcon);
    