
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDogHouseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dog-house'];
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
        <path fill="currentColor" d="M256 27.52L25 212.3v41L256 68.48 487 253.3v-41L256 27.52zm0 64L73 237.9V487h94c.1-32.3.8-79.5 10.2-121 5.2-22.7 12.9-43.9 25.4-60 12.6-16.2 30.7-27 53.4-27s40.8 10.8 53.4 27c12.5 16.1 20.2 37.3 25.4 60 9.4 41.5 10.1 88.7 10.2 121h94V237.9L256 91.52zM163.9 198.2a25.03 14.73 15.04 0 1 12.1 2.2 25.03 14.73 15.04 0 1 17.7 14.6h124.6a14.73 25.03 74.96 0 1 17.7-14.6 14.73 25.03 74.96 0 1 12.1-2.2 14.73 25.03 74.96 0 1 17.8 7.8 14.73 25.03 74.96 0 1-13 19.6 25.03 14.73 15.04 0 1 10.7 18.4 25.03 14.73 15.04 0 1-29.9 5.7 25.03 14.73 15.04 0 1-18.1-16.7H196.4a14.73 25.03 74.96 0 1-18.1 16.7 14.73 25.03 74.96 0 1-29.9-5.7 14.73 25.03 74.96 0 1 10.7-18.4 25.03 14.73 15.04 0 1-13-19.6 25.03 14.73 15.04 0 1 17.8-7.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDogHouseIcon);
    