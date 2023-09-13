
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPodiumThirdIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'podium-third'];
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
        <path fill="currentColor" d="M417.945 168.902c-11.593 0-23 12.8-23 31 0 18.201 11.407 31 23 31 11.594 0 23-12.799 23-31 0-18.2-11.406-31-23-31zm-103.95 2.975l-16.099 8.05c15.093 30.185 51.37 56.81 82.188 74.442l14.195 184.533h14.666v-103h18v103h14.666l11.854-154.093 13.928 51.892 17.382-4.664c-6.156-34.54-15.319-97.864-34.212-102.39-7.307 11.535-18.869 19.255-32.618 19.255-13.749 0-25.31-7.72-32.617-19.256-26.443-8.62-51.424-27.87-71.334-57.769zM169 313v96H25v78h462v-30H343V313H169z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPodiumThirdIcon);
    