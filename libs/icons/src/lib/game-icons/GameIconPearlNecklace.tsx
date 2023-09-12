
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPearlNecklaceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pearl-necklace'];
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
        <path fill="currentColor" d="M70.184 23.738C55.614 23.738 44 35.35 44 49.91s11.614 26.174 26.184 26.174c14.569 0 26.183-11.614 26.183-26.174 0-14.56-11.614-26.172-26.183-26.172zm371.632 0c-14.569 0-26.183 11.612-26.183 26.172s11.614 26.174 26.183 26.174C456.386 76.084 468 64.47 468 49.91c0-14.56-11.614-26.172-26.184-26.172zM70.184 94.084C55.614 94.084 44 105.696 44 120.256s11.614 26.172 26.184 26.172c14.569 0 26.183-11.612 26.183-26.172S84.753 94.084 70.184 94.084zm371.632 0c-14.569 0-26.183 11.612-26.183 26.172s11.614 26.172 26.183 26.172c14.57 0 26.184-11.612 26.184-26.172s-11.614-26.172-26.184-26.172zm-354.04 70.344c-14.57 0-26.184 11.614-26.184 26.174 0 14.56 11.614 26.171 26.183 26.171 14.57 0 26.186-11.612 26.186-26.171 0-14.56-11.616-26.174-26.186-26.174zm336.449 0c-14.57 0-26.186 11.614-26.186 26.174 0 14.56 11.616 26.171 26.186 26.171 14.569 0 26.183-11.612 26.183-26.171 0-14.56-11.614-26.174-26.183-26.174zM122.96 234.773c-14.57 0-26.186 11.613-26.186 26.172 0 14.56 11.617 26.174 26.186 26.174 14.57 0 26.184-11.614 26.184-26.174 0-14.56-11.615-26.172-26.184-26.172zm266.078 0c-14.57 0-26.184 11.613-26.184 26.172 0 14.56 11.615 26.174 26.184 26.174 14.57 0 26.186-11.614 26.186-26.174 0-14.56-11.617-26.172-26.186-26.172zm-203.406 42.868c-14.57 0-26.186 11.612-26.186 26.171 0 14.56 11.617 26.172 26.186 26.172 14.57 0 26.183-11.612 26.183-26.171 0-14.56-11.614-26.172-26.183-26.172zm140.734 0c-14.57 0-26.183 11.612-26.183 26.171 0 14.56 11.614 26.172 26.183 26.172 14.57 0 26.186-11.612 26.186-26.171 0-14.56-11.617-26.172-26.186-26.172zM256 295.227c-14.57 0-26.184 11.612-26.184 26.171 0 14.56 11.615 26.174 26.184 26.174 14.57 0 26.184-11.614 26.184-26.174 0-14.56-11.615-26.171-26.184-26.171zm0 70.345c-34 0-61.367 27.359-61.367 61.344s27.366 61.346 61.367 61.346c34 0 61.37-27.361 61.37-61.346S290 365.572 256 365.572z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPearlNecklaceIcon);
    