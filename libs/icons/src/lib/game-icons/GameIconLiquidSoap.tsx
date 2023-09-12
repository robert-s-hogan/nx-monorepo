
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLiquidSoapIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'liquid-soap'];
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
        <path fill="currentColor" d="M233 52.96v20h-24V151h86v-30.3l7.2-1.5c64.8-13.5 104.2 5.7 133.1 31.8h30.1c-23.1-40.6-78.1-87.52-160.4-78.1l-10 1.15V52.96h-62zM233 169v30h46v-30h-46zm-34.9 48l-93.9 234.7-.1.3c-3.1 6.1-2.9 10-1.4 13.8 1.4 3.9 4.7 7.8 8.9 11.2 7.7 6.1 16.6 9.4 18.2 10H384s10.1-.4 17.4-4.7c3.6-2.2 6.3-4.9 7.8-9.4s1.8-11.3-1.7-21.9l-93.6-234H198.1zm57.9 58.4l6.3 6.2s22.7 22.2 42.4 50c9.9 13.8 19.1 29.1 24.4 44.3 5.3 15.3 6.8 31.4-1.4 44.8-13.9 22.4-43.2 31.5-71.7 31.5s-57.8-9.1-71.7-31.5c-8.2-13.4-6.7-29.5-1.4-44.8 5.3-15.2 14.5-30.5 24.4-44.3 19.7-27.8 42.4-50 42.4-50l6.3-6.2zm0 25.7c-6.8 7-19.9 21-34.1 40.9-9.3 13-17.6 27.3-22 39.8-4.3 12.6-4.5 22.6-.2 29.5 8.5 13.9 32 22.9 56.3 22.9 24.3 0 47.8-9 56.3-22.9 4.3-6.9 4.1-16.9-.2-29.5-4.4-12.5-12.7-26.8-22-39.8-14.2-19.9-27.3-33.9-34.1-40.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLiquidSoapIcon);
    