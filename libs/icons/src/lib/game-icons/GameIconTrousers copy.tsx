
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTrousers copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'trousers copy'];
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
        <path fill="currentColor" d="M250.45 19.767c-44.556.187-87.24 7.376-118.562 21-16.176 147.458-32.792 298.827-46.72 425.75l123.344 24.814 34.157-262.844h20.63l34.25 263.75h.218l129.063-26.28c-15.71-141.714-31.023-283.473-46.724-425.19-38.697-14.307-85.098-21.17-129.655-21z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTrousers copyIcon);
    