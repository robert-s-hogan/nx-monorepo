
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCadillacHelmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cadillac-helm'];
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
        <path fill="currentColor" d="M256 105c-117.2 0-173.246 53.452-202.066 107.25-21.827 40.743-27.162 81.332-28.479 98.75h461.09c-1.317-17.418-6.652-58.007-28.479-98.75C429.246 158.452 373.2 105 256 105zm42 151s15.334 15.333 15.334 30.666h-46C298.001 271.333 298 256 298 256zm-83.666.666s0 15.335 30.666 30.668h-46c0-15.333 15.334-30.668 15.334-30.668zM201.115 329c.16 4.592.503 10.464 1.313 16.781 1.73 13.51 6.81 27.767 11.111 31.125 10.54 8.23 26.436 12.864 42.461 12.864s31.921-4.635 42.46-12.864c4.302-3.358 9.381-17.614 11.112-31.125.81-6.317 1.153-12.189 1.313-16.781h-109.77zM256 336c15.085 0 32 32 32 32-16-16-48-16-64 0 0 0 16.915-32 32-32z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCadillacHelmIcon);
    