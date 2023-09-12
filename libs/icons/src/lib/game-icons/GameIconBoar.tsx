
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBoarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'boar'];
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
        <path fill="currentColor" d="m244.3 66.3 11.5 25.2-36.4-13.9 3.4 21.5-190.66 122-10.27 125.1 18.23-1.9C77.07 386.1 47.94 462 47.94 462h32.17l30.79-63.1s-41.49-73.4-7.8-124.9c-3.69 81 43.7 117.1 43.7 117.1l35.3-9.4-2 17.1 59-16.9s-66.8-57.8-36.5-128.1l15.3-9c-16.2 119 72 114.5 91.6 217.2h26.1l-51.5-223.9 17.7 10s13.1 37.7 23.3 66.9c7 20 26.2 33.2 47.4 32.6l29.3-.9c11.8-8.9 16.4-18 17-26.4.3-5-.6-9.6-2-13.4-7.5 10.7-21.3 23.5-44.5 24.3l-.5-16.7c28.4-.9 36.7-27.4 36.7-27.4.9-2.9 3.3-5 6.3-5.7 2.9-.6 6 .5 8 2.8 0 0 14 16.4 12.6 37.2-.5 7.7-3 16.1-9.2 24.5l18.9-.6 45-48c-69.5-46.6-55-96.4-43.9-146.8l-63.7-26.6c2.1 20.1 1.9 36.9 1.9 36.9l-16.7-.2s.6-39.5-7.7-68.1c-2.3-7.9-5-15.2-9.1-19.7-44.2 33.7-31.6 97.8-31.6 97.8l-16.3 3.1s-7.7-41.4 9.7-78.9l-68.4-28.5zm231.7 0-55.7 46.9 33.6 18.6L476 66.3zM346.4 209.4s9.7.2 19.5 4.8c9.7 4.5 19.6 13.3 19.8 30.3-53.7 4.1-39.3-35.1-39.3-35.1zm10.9 171.1 17.8 81h28.2l-7.6-77.1-38.4-3.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBoarIcon);
    