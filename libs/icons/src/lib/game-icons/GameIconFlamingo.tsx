
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlamingoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flamingo'];
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
        <path fill="currentColor" d="M411.674 19.82c-.266 0-.532.008-.799.026-11.862.793-66.118 4.177-57.514 78.935 4.69 40.745 35.686 134.777 8.723 137.942-10.085 1.183-21.482-50.259-107.617-49.145-79.045 1.022-105.178 46.044-128.602 76.057-40.892 18.126-62.973 26.188-73.426 62.861 20.703-3.015 38.183-20.096 69.045-27.537 49.206 12.785 111.833 46.992 184.914 4.223 49.809-12.752 105.363-19.901 108.301-82.514-3.586-43.57-16.011-82.308-28.492-120.379-4.426-13.5-11.253-30.65 6.52-37.7 8.378 4.004 15.912 8.46 32.648 5.88 14.265 5.75 19.893 35.658 30.184 35.07 1.182-14.901 6.732-29.728 2.328-44.764-1.932-6.594-18.959-13.676-28.616-20.435-1.59-9.443-9.344-18.484-17.597-18.52zM198.26 338.213l-37.028 55.744 73.073 39.361v60.684h17.998v-50.988l76.674 41.3 8.537-15.843-85.211-45.9v-81.919c-6.043.983-12.069 1.465-17.998 1.54v70.683l-47.159-25.402 30.592-46.057c-6.806-.705-13.347-1.832-19.478-3.203z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlamingoIcon);
    