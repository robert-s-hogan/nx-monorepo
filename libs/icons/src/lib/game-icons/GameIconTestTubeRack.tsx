
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTestTubeRackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'test-tube-rack'];
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
        <path fill="currentColor" d="M103.8 54.7v16.7h70.9V54.7h-70.9zm116.7 0v16.7h71V54.7h-71zm116.8 0v16.7h70.9V54.7h-70.9zM116.8 88.8V138h44.9V88.8h-44.9zm116.7 0V138h45V88.8h-45zm116.8 0V138h44.9V88.8h-44.9zM38.47 156.4v34.4h19.72V429H38.47v40H473.5v-40h-19.7V190.8h19.7v-34.4H38.47zm44.72 34.4H428.8v120.8H83.19V190.8zm33.61 18.3v85.3h44.9v-85.3h-44.9zm116.7 0v85.3h45v-85.3h-45zm116.8 0v85.3h44.9v-85.3h-44.9zM83.19 335.5H428.8V414H83.19v-78.5zm33.61 17.3V373c0 5.9 2.4 11.6 6.6 15.9 4.2 4.2 9.9 6.5 15.9 6.5 5.9 0 11.6-2.3 15.8-6.5 4.3-4.3 6.6-10 6.6-15.9v-20.2h-44.9zm116.7 0V373c0 5.9 2.4 11.6 6.6 15.9 4.2 4.2 9.9 6.5 15.9 6.5s11.7-2.3 15.9-6.5c4.2-4.3 6.6-10 6.6-15.9v-20.2h-45zm116.8 0V373c0 5.9 2.3 11.6 6.6 15.9 4.2 4.2 9.9 6.5 15.8 6.5 6 0 11.7-2.3 15.9-6.5 4.2-4.3 6.6-10 6.6-15.9v-20.2h-44.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTestTubeRackIcon);
    