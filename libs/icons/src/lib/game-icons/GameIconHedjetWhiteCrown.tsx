
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHedjetWhiteCrownIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hedjet-white-crown'];
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
        <path fill="currentColor" d="M279.154 488.21l30.902-35.47c-8.54-20.095-28.764-48.896-11.588-64.964 18.374-16.21 31.6 6.588 46.003 13.695 19.627-26.18 38.933-50.192 63.21-67.072-40.06-116.66-159.072-180.152-195.936-214.582-18.14-21.632-37.846-65.983-45.31-73.984-6.99-7.493-28.244-36.454-52.475-13.12-13.956 13.438-11.8 30.595.322 50.625 8.927 14.748 21.834 28.182 36.312 53.188 29.83 51.523 28.345 139.116 35.993 170.663 12.31 50.777 16.17 99.15 92.567 181.02z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHedjetWhiteCrownIcon);
    