
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMatchHeadIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'match-head'];
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
        <path fill="currentColor" d="M316.594 18.375c40.733 49.672 27.644 86.682 5.344 122.688.783-42.897-37.23-58.073-83.282-44.032 71.457.144 63.504 53.747 47.25 101.095-8.392 16.15-14.28 33.228-14.28 52.094 0 30.375 13.866 52.983 36.78 67.155-9.875-13.69-13.797-31.204-9.344-51.97 10.182-47.473 52.14-72.297 70.688-112.124 9.593 17.684 24.242 30.335 38.53 30.376 19.437.056 30.155-22.576 25.126-50.812 41.403 59.58 28.32 151.878-11.687 193.875 65.79-30.04 89.29-136.86 44.842-216.783.594 13.805-1.266 27.485-6.187 40.72-10.366-39.618-30.658-94.73-90.78-120.626l-.19-.06c-15.86-5.534-33.44-9.5-52.81-11.595zM358.5 238.53c-23.074 0-41.625 18.543-41.625 41.72S335.425 322 358.5 322c23.074 0 41.594-18.573 41.594-41.75s-18.52-41.72-41.594-41.72zm-88.188 75.75L17.75 468.657v23.938h59.97l237.718-148c-16.89-5.172-32.555-15.733-45.125-30.313z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMatchHeadIcon);
    