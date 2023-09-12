
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLoveSongIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'love-song'];
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
        <path fill="currentColor" d="M117.375 25.938l10.094 22.718c33.116 74.398 61.213 153.6 79.186 235.406-20.196-6.522-45.85 4.468-54.25 31.032-30.905-33.787-80.476-10.8-72.062 33.937 8.54 45.403 86.184 61.497 98.28 84.783 1.276-28.646 62.544-70.93 53.657-118.313-.327-1.75-.75-3.423-1.218-5.03-12.258-65.38-31.13-129.108-54.093-190.22l176.405 83.563 42.938 132.625c-19.32-3.615-41.855 7.648-49.625 32.218-30.906-33.785-80.477-10.8-72.063 33.938 8.54 45.402 86.184 61.466 98.28 84.75 1.273-28.583 62.278-70.746 53.72-118l-.03-.063c-.016-.082-.017-.166-.033-.25-.873-4.658-2.255-8.807-4.062-12.467l-70.906-218.97-1.25-3.874-3.72-1.72-206.687-95.625-22.562-10.438zm36.906 37.656l180.782 83.656 10.407 32.156-178.25-84.47c-4.2-10.534-8.526-20.98-12.94-31.342z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLoveSongIcon);
    