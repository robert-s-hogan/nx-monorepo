
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCeilingLightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ceiling-light'];
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
        <path fill="currentColor" d="M247 22v81h18V22h-18zm-31.975 99l-11.5 46h104.95l-11.5-46h-81.95zM192 185c-18 0-45.643 21.459-68.973 50.621-19.568 24.46-36.5 53.474-45.869 75.379h357.684c-9.371-21.905-26.308-50.917-45.88-75.377C365.63 206.461 337.983 185 320 185H192zm25.719 144c.687 5.463 2.03 12.676 4.717 19.838 2.655 7.077 6.541 13.756 11.806 18.437C239.507 371.956 246.008 375 256 375c9.992 0 16.493-3.044 21.758-7.725 5.265-4.68 9.15-11.36 11.806-18.437 2.688-7.162 4.03-14.375 4.717-19.838H217.72zm-17.326 6.137l-90.346 20.078 3.906 17.57 90.736-20.164c-2.131-6.242-3.465-12.3-4.296-17.484zm111.214.002c-.83 5.183-2.165 11.241-4.296 17.482l90.736 20.164 3.906-17.57-90.346-20.076zm-97.691 36.13l-60.748 70.874 13.664 11.714 59.775-69.736a46.747 46.747 0 0 1-4.324-3.396c-3.249-2.889-6.006-6.091-8.367-9.455zm84.168 0c-2.361 3.365-5.118 6.567-8.367 9.456a46.749 46.749 0 0 1-4.324 3.396l59.775 69.736 13.664-11.714-60.748-70.873zM247 392.272V492h18v-99.729a55.93 55.93 0 0 1-18 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCeilingLightIcon);
    