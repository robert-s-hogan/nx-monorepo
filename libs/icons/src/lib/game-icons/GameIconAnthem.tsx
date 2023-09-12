
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAnthemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'anthem'];
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
        <path fill="currentColor" d="M356.906 49.594c-108.533.34-194.246 85.275-306.719 20.312 17.05 30.293 55.26 55.692 101.47 67.688C127.244 173.63 60.63 189.984 15.75 186c141.27 81.595 210.67-64.442 380.313 29.656l-19.907 48.688H18.312v18.687h350.22l-17.907 43.814H17.78v18.687h325.19l-18.845 46.126H19.937v18.688h304.938c1.4 12.458 8.875 23.708 19.625 31.5 14 10.147 33.528 15.774 55.875 15.812 22.347.04 43.583-5.58 60.438-15.062 16.854-9.482 29.862-23.084 33.156-40 3.293-16.916-5.158-32.884-19.158-43.03-14-10.15-33.527-15.776-55.875-15.814-22.347-.038-43.583 5.55-60.437 15.03-.327.185-.645.377-.97.564L471.345 81l-17.313-7.063-.06.126c-34.838-18.096-66.836-24.564-97.064-24.47zm85.53 41.906c.567-.02 1.122-.022 1.69 0 .864.033 1.728.145 2.593.28l-42.75 104.532c-26.664-27.147 4.468-103.57 38.467-104.812z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAnthemIcon);
    