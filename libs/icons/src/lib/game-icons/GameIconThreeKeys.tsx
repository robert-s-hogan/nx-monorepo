
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconThreeKeysIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'three-keys'];
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
        <path fill="currentColor" d="M82.875 19.125c-33.954 0-62.5 31.494-62.5 71.844 0 40.348 28.545 71.84 62.5 71.843 28.553 0 53.19-22.276 60.406-53.5l1.657-7.25h133.594v61.313h22.564V134.5h24.78v28.875h47.845v-16.5h-23.064V117.97h23.063V102.06h30.967v-26.28H144.125l-1.906-6.813c-8.274-29.326-31.934-49.845-59.345-49.845zm0 24.063c22.423 0 40.594 21.41 40.594 47.812 0 26.403-18.174 47.78-40.595 47.78-22.42 0-40.594-21.377-40.594-47.78 0-26.403 18.172-47.813 40.595-47.813zm44.25 138.53c-33.954 0-62.5 31.495-62.5 71.845 0 40.35 28.545 71.84 62.5 71.843 28.553 0 53.16-22.276 60.375-53.5l1.688-7.25H322.78v36.814h26.69v24.5h23.967V278.31h24.782v47.657h19.75v-61.314h30.936v-26.28h-260.53l-1.907-6.814c-8.274-29.324-31.934-49.843-59.345-49.843zm-23.03 49.47c.366-.02.752 0 1.124 0 11.905 0 21.53 9.625 21.53 21.53 0 11.907-9.625 21.563-21.53 21.563-11.907 0-21.564-9.655-21.564-21.56 0-11.535 9.047-20.955 20.438-21.532zM182 352.063l-51.844 28.593v81.125l51.47 27.47 56.468-55.375 2.72-2.688H374.28V448.75h40.533v24.78H374.28v19h119.126v-38h-34.812v-24.78h34.812v-24.844H241.062l-2.656-2.375L182 352.064zm-19.22 53.312c8.26 0 14.97 6.68 14.97 14.938 0 8.257-6.71 14.968-14.97 14.968-8.256 0-14.936-6.71-14.936-14.967 0-8.258 6.68-14.938 14.937-14.938z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconThreeKeysIcon);
    