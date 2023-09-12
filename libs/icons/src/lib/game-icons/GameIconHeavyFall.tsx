
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeavyFallIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heavy-fall'];
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
        <path fill="currentColor" d="M21.25 19.03v53.25c64.79 65.858 124.522 170.327 154.156 274.5l-49.78-65.655C97.592 216.785 60.5 158.113 21.25 114v28.906c27.632 34.17 53.875 75.99 75.813 121.47l29.156 125.25-83.064-44.72L90 436.5l-63.188-5.688 56.094 55.407H173.5l-28.625-41.814 49.094 12.938 1.718-64.594 40.468 46.5 40.47-80.97-.845 90.44 41.345-31-29.375 68.5h138.125l66.72-100.126-85.19 23.437 52.533-104.374-104.375 32.656 57.312-193.843-128.78 158.436C260.76 197.538 207.368 90.266 150.81 19.03h-24.218c41.91 49.386 83.752 122.4 112.75 199.97l-8.25 41.125c-35.752-93.2-90.41-180.8-139.938-241.094H21.25zm369.656 49.126l-60 56.03-2.125 78.533 49.345-74.25 12.78-60.314zm103.688 241.406l-34.438 56.657 34.438-16.94v-39.717z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeavyFallIcon);
    