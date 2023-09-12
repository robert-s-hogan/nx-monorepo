
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSafetyPinIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'safety-pin'];
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
        <path fill="currentColor" d="M453.096 68.55c-15.573-15.573-39.254-25.555-62.635-27.537-23.38-1.98-45.7 4.102-58.84 17.242l-55.593 55.592 40.055 40.054 58.762-15.03a23.294 21.14 45 0 1 1.985-26.995 23.294 21.14 45 0 1 31.42 1.52 23.294 21.14 45 0 1 1.522 31.423 23.294 21.14 45 0 1-26.998 1.988l-15.03 58.758L407.8 245.62l55.59-55.593c13.14-13.14 19.224-35.46 17.243-58.842-1.98-23.38-11.964-47.062-27.537-62.635zM208.488 21.342l-28.57 43.076-140.32 327.15c-14.33 25.316-10.752 58.19 10.77 79.71 25.838 25.84 68.048 25.84 93.887 0l15.323-15.322c3.484-9.32 5.35-20.678 4.01-33.593-.482-16.35-6.913-32.552-19.333-44.972-18.608-18.607-45.707-23.812-69.068-15.618l123.998-289.09 9.303-51.34zm150.72 205.335l-177.68 177.68c2.314 9.15 3.345 17.964 3.34 26.308L374.034 241.5l-14.824-14.823zM129.432 392.215c17.828 17.827 17.828 46.413 0 64.24-17.826 17.826-46.41 17.826-64.238 0-11.94-11.94-15.87-28.7-11.818-43.825l5.094-11.873c1.855-3.034 4.09-5.908 6.724-8.542 17.827-17.826 46.412-17.826 64.24 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSafetyPinIcon);
    