
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBandagedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bandaged'];
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
        <path fill="currentColor" d="M243.47 20.938c-.43.002-.78 0-1.064.03-24.635 2.647-45.48 20.252-54.03 44.407l111.81-18C288.274 31.26 269.767 21 249.096 21c-2.406 0-4.337-.07-5.625-.063zm66.093 43.874L184.406 84.94c-.104 1.602-.187 3.21-.187 4.843 0 12.11 3.082 23.387 8.343 33.22l121.312-29.938c.05-1.083.094-2.184.094-3.28 0-8.85-1.583-17.25-4.408-24.97zm.406 48.438L204.5 139.28c.21.217.41.445.625.657l13.063 13.032-18.22 2.81c-11.08 1.724-20.266 5.504-28.124 11.032l179.125 21.032c-2.535-4.082-5.316-7.858-8.376-11.25-10.392-11.523-23.76-19.223-43-21.688l-18.47-2.344 12.907-13.406c6.954-7.205 12.48-16.027 15.94-25.906zm-154.94 70.406c-7.154 9.81-12.79 21.855-17.124 35.375l170.75-17.343-153.625-18.03zM363 214.97l-230.22 23.374c-4.68 21.507-6.833 45.063-7.75 67.906l248.064-28.813c-1.21-19.302-3.536-38.297-8.03-55.312-.645-2.434-1.333-4.816-2.064-7.156zm10.97 81.186L136.81 323.72l186.157 22.905.374-4.594.687-8.624h50.376c-.006-12-.047-24.575-.437-37.25zm-195.283 51.53l6.313 70.44 130.438 23.093 6.062-75.94-142.813-17.592zm8.063 89.752l4.906 54.5h119.72l2.562-32-127.188-22.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBandagedIcon);
    