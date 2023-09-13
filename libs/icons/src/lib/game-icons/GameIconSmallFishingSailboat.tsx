
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSmallFishingSailboatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'small-fishing-sailboat'];
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
        <path fill="currentColor" d="M109.2 63.18l-3.5 15.74 87 77.68 29.6 195.2 14.4 1.2-35.4-242.7-15.5 1.1 3.4 22.2zm155.6 22.28L261.7 102l59.3 53.5 16.5 191.3 14.9-2.2-20.6-232.7-14.5 1.3 1.7 19.4zM97.61 93.4L38.27 310.2 200.8 326l-21.3-157.4zm159.69 25.4l-11.1 47.8 13.7 10.4v171.6l62.1-1.7-14.4-178.7zm89.6 26.6l3.3 22.6 22.7 19.7-3.5-19.7zM223 170.7l3.1 17 18.3 10.5-.3-14.6zm130.9 18.6L367 342.5l16.4.2L381 318l97.8 21-86 13.4-2.5 12.2 99-14.5-.6-12.6c-.9-1.1-60.8-94.2-89.8-140l-20.5 93.1-8.5-87.9zm-125.7 10.6l16.9 120-1.1-109.8zM21.89 322.4l2.33 15.4L207 353.3l-1.5-11.7zm358.31 29.2l-10.4 2.3c-2.6 7.8-5.2 21.8-7.2 29.7-3.1 12-6.2 24.8-10.4 30.9-6.2 10.7-18.7 15.3-35.3 17.3-16.5 2.1-44.5 1.8-71.5 2-41.5.2-66.6 2.9-85-4.8-9.2-3.8-16.1-10.3-21.8-20.5l-1-1.9-1.4.3 8.4 41.9 212.8-5.7zm-23.5 4.3c-80 15.9-141.1 14.5-224.1 3 16.5 74.4 39.5 62.3 115.1 62 52.9-.2 82.8 3.8 93.4-14.7 5.9-9.9 15.6-50.3 15.6-50.3zm-241.2 1.7l-4.4.3-7.9 1.2c-.1 0 3.1 8.6 5 16.5 2.1 7.9-7.1 25.2-7.1 34.7 0 9.3 6.3 24.3 11.3 25.6 5.6 1.3 18.1-1.3 18.1-1.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSmallFishingSailboatIcon);
    