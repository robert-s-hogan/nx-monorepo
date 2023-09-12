
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStarSwirlIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'star-swirl'];
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
        <path fill="currentColor" d="M436.406 29.625l-18.094 42.22-48.562 5.905 42.156 25.656 1.375 13.47C367.938 90.74 302.435 75.36 214.78 82.31l-20.186-3.343-24.125-38.407.5 39.78-49.22 16.438 55.063 4.564 7.843 33.78 17.094-37.78 17.906-2.75c203.993 22.03 277.475 204.75 77.875 207.625l5.22-37.595 36.75-43.72-51.344-24.968-30.22-48.468-39.623 41.124-4.125 1.03C-8.4 163.078-31.708 304.485 98.844 376.125l-11.938 12.688L39.844 374.5l33.03 39.406-15.124 42.53 36.375-31.155 47.03 18.095-30.374-43.875 4.69-15.03c62.43 28.648 153.852 42.16 270.5 20.717-241.042 33.38-364.142-137.94-219.283-195.687l23.032 43.25-4 56.97 56.218-9.97 19.25 7.813c218.255 102.608 297.46-83.917 171.843-177.75l14.376-22.22 46.47-16.5-41.907-14.812-15.564-46.655zM34.53 79.03l4.845 26.095-19.47 22 27.22-3.25 17.563 23.344.687-29.47 24.78-17.906-33.218-1.72-22.406-19.093zm358.564 298.5l14.25 51.658-31.375 41.062 49.592-12.688 33.688 34.282-2.53-51.406 35.217-30.375-51.593 1.562-47.25-34.094z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStarSwirlIcon);
    