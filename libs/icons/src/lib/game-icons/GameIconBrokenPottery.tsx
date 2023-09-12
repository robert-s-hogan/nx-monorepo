
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBrokenPotteryIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'broken-pottery'];
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
        <path fill="currentColor" d="M105 32v30h191.607l16.663-30zm3.805 48c4.309 10.899-5.352 29.724-9.276 38.588-11.006 24.703-28.728 57.602-42.02 95.43-13.29 37.828-22.212 80.865-15.15 126.119 7.063 45.254 30.318 92.356 79.56 137.496L124.5 480h263l2.58-2.367c49.243-45.14 72.498-92.242 79.56-137.496 7.063-45.254-1.859-88.291-15.15-126.12-13.29-37.827-31.013-70.726-42.02-95.43-4.475-10.046-7.742-18.751-9.312-25.372l-75.117 35.273 63.037 32.295-36.267 78.457 61.921 19.205-153.521 138.17 65.975-116.119-58.2-3.172 47.735-96.314-73.21-27.018L286.61 80H108.805z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBrokenPotteryIcon);
    