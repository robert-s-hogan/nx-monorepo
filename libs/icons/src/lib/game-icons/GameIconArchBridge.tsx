
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArchBridgeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'arch-bridge'];
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
        <path fill="currentColor" d="M256 25c-60.6 0-118.6 34.43-161.37 81.1-39.93 43.6-66 97.7-69.26 140.9h30.17c3.63-35.2 27.67-79.1 61.76-117C154.4 88.8 204 55 256 55c52 0 101.6 33.8 138.7 75 34.1 37.9 58.1 81.8 61.8 117h30.1c-3.2-43.2-29.3-97.3-69.2-140.9C374.6 59.43 316.6 25 256 25zm0 48c-3 0-6 .15-9 .42V247h18V73.42c-3-.27-6-.42-9-.42zm-55 14.06c-6.1 2.98-12.1 6.36-18 10.1V247h18V87.06zm110 0V247h18V97.16c-5.9-3.74-11.9-7.12-18-10.1zM137 135.2c-2.1 2.3-4.2 4.5-6.3 6.8-4.1 4.5-8 9.2-11.7 13.9V247h18V135.2zm238 0V247h18v-91.1c-3.7-4.7-7.6-9.4-11.7-13.9-2.1-2.3-4.2-4.5-6.3-6.8zM25 265v46h462v-46H25zm5.56 64L57 381.9V487h62V379.7l63.3-50.7H30.56zm299.14 0l63.3 50.7V487h62V381.9l26.4-52.9H329.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArchBridgeIcon);
    