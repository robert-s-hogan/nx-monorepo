
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPeaksIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'peaks'];
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
        <path fill="currentColor" d="M245.795 19.12l-52.363 153.513 26.67 61.937 38.884-52.37 53.217 67.493 11.682-40.486-78.09-190.086zM101.172 193.69l-29.06 80.222 24.54-12.715 24.803 14.33 11.64-48.013-31.923-33.825zm83.267 5.308l-20.776 60.904-15.27-16.177-14.662 60.48-37.568-21.707-33.44 17.324L19.04 420.42l84.884 30.937 73.418-22.437 73.935 19.47 71.66-21.536 91.973 25.226 77.28-31.66-48.44-89.006-39.045 26.664-38.892-27.576-27.153 42.79-15.78-10.013 39.032-61.51-26.6-64.752-15.246 52.83-60.634-76.9-43.664 58.81-31.33-72.76zm223.06 65.81L375.84 314.7l29.066 20.61 29.865-20.394-27.27-50.11z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPeaksIcon);
    