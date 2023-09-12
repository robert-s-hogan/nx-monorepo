
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShoulderScalesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shoulder-scales'];
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
        <path fill="currentColor" d="M289.5 18.23c-1.8 38.71-3.3 77.44-5.1 116.17C193 155.6 90.37 194.8 19.02 245c18.37 36.5 37.26 73.4 53.17 104.7C54 365.3 35.9 381.4 18.32 397.8v96H460.6c-9.3-7.5-18.8-14.9-28.7-22.2l20.5-21.3c10.2 13 19.8 26.6 28.8 40.9l-14 2.6h26.5V249.7l-23.8 30c-6.7-9.4-13.7-18.7-21-27.8l27-57.1c6.3 9.9 12.3 19.9 17.8 29.7V18.23zm17.3 29.34c15.8 5.74 30.8 12.97 45 21.36l-11.9 78.17c-12.4-8.9-25-17-37.6-24.1zm62.2 32.4c16.1 11.1 31 23.83 44.8 37.43l-23.9 70.8c-10.8-10-21.8-19.5-33-28.4zm59.4 52.63c12.9 14.1 24.6 29 35.3 44.2l-27.9 59.3c-10-11.6-20.3-22.8-31.1-33.6zM101.8 264.2l17 73c-11.1-1.2-22.23-2.1-33.33-2.5l-36.75-72.3c17.48-.4 37.15.4 53.08 1.8zm19.8 2.2c20.7 2.6 41.6 6.7 62.4 12l.7 70.8c-15.2-3.8-30.6-7-46.1-9.4zm81.1 17.2c18.8 5.6 37.5 12.3 55.9 20.2L247.7 369c-14.6-5.5-29.4-10.4-44.3-14.7zm73.6 28.1c17.2 8.1 34.2 17.2 50.7 27.4l-19.8 55.8c-13.7-6.7-27.6-13-41.8-18.9zm66.9 37.8c16.4 11 32.3 23.1 47.5 36.2l-25.4 41.1c-13.4-8.1-27.2-15.9-41.4-23.3zm61.6 49c12.4 11.6 24.4 24.1 35.7 37.3l-23.9 24.8c-11.5-8.2-23.3-16.2-35.4-23.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShoulderScalesIcon);
    