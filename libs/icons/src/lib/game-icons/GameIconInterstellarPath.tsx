
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconInterstellarPathIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'interstellar-path'];
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
        <path fill="currentColor" d="M253.625 18.406c-19.833 0-35.688 15.888-35.688 35.72 0 19.833 15.854 35.687 35.688 35.687 19.83 0 35.72-15.857 35.72-35.688 0-19.834-15.89-35.72-35.72-35.72zM93.97 65.25c-5.68 13.142-8.94 26.858-8.94 41.5 0 45.29 29.44 85.21 74.157 108.625L15.75 494.5h77.28l123.564-390.813-37.406 72.813c-50.628-20.564-85.22-61.99-85.22-109.75 0-.505-.007-.977 0-1.5zm315.405 0c.007.505 0 .977 0 1.5 0 46.98-33.468 87.856-82.75 108.75l-39.063-76 129.688 395h73.344L346.47 214.125c43.408-23.57 71.842-62.875 71.842-107.375 0-14.626-3.272-28.37-8.937-41.5zm-173.97 40.938L112.626 494.5h75.47l47.31-388.313zm36.032 4.156L318.25 494.5h79.313L271.438 110.344zm-18.28 4.5L206.906 494.5h92.5l-46.25-379.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconInterstellarPathIcon);
    