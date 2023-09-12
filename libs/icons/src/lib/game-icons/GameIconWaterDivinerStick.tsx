
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWaterDivinerStickIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'water-diviner-stick'];
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
        <path fill="currentColor" d="M273.7 21.16c-11.7-.12-24.4 6.27-21.8 17.57 14 59.46 42.9 185.87 62.6 249.67-57-65.7-187.4-138.8-258.56-179.1-24.32-13.81-35.48 23.9-13.84 33.2 82.2 35.3 201.7 120.7 268.4 182 64.4 62.1 65.9 82.2 115.8 146 .9-8.3 4.5-16.4 10.6-22.9 9-9.6 21.8-13.8 33.7-11.9-57-61.6-76.9-69.6-121.9-135.8-20.1-72.2-55.3-194.9-57.2-265.89-.2-8.73-8.7-12.76-17.8-12.85zM465.4 453.2c-5.4-.2-11 2-15.4 6.7-7.9 8.4-7.7 20.1-.9 26.6 6.9 6.4 18.6 5.9 26.5-2.4 7.8-8.3 7.6-20 .8-26.5-3-2.8-6.9-4.3-11-4.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWaterDivinerStickIcon);
    