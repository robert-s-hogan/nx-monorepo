
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSwordWoundIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sword-wound'];
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
        <path fill="currentColor" d="M146.326 6.15l87.813 128.725-60.87-39.916 34.925 62.864L38.56 48.06h-.003c40.207 71.33 82.046 134.913 129.23 191.764L303.94 103.67c-45.164-37.052-96.674-69.324-157.614-97.52zm347.145 9.496L372.983 61.713l-214.59 214.09 13.213 13.215L383.367 77.75l78.078-29.85-29.402 78.56-211.746 211.25 13.213 13.214 214.61-214.106 45.35-121.172zM407.177 89.13l-259.95 259.95c-11.956-17.32-11.687-40.444.25-57.764l-31.26-31.255c-28.637 34.832-28.588 85.102.167 119.864L52.336 443.97c-2.528-.95-5.184-1.43-7.842-1.43-5.74 0-11.476 2.216-15.908 6.647-8.864 8.865-8.866 22.953 0 31.82 8.864 8.863 22.954 8.863 31.818 0 6.512-6.513 8.234-15.844 5.178-23.853l64.057-64.056c34.788 28.437 85.12 28.65 119.817.203l-31.262-31.26c-17.28 11.84-40.352 11.907-57.68.18l259.876-259.874-13.214-13.215zm-2.196 117.01L268.186 342.937c55.29 48.057 118.235 90.138 192.464 127.216L398.783 351.41l102.78 68.85-117.75-164.645 86.816 42.908c-20.895-33.04-42.523-63.772-65.65-92.382z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSwordWoundIcon);
    