
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStilettoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stiletto'];
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
        <path fill="currentColor" d="M62.5 17.28c-9.747.288-20.824 5.23-29.844 14.25-15.192 15.193-18.838 36.194-8.125 46.907 7.99 7.988 21.716 8.027 34.47 1.22 16.167 30.05 42.154 57.687 71.438 76.374-18.77 24.156-29.97 54.48-29.97 87.376h18.688c0-28.9 9.828-55.474 26.344-76.53l2.156 39.405C274.5 320.554 402.09 428.196 496.062 494.94c-65.54-95.294-176.99-224.638-288.687-348.407l-38.97-2.124c20.764-15.68 46.638-24.967 74.72-24.97V100.75c-32.2.002-61.945 10.725-85.844 28.78-18.696-29.383-46.39-55.48-76.53-71.686 6.795-12.748 6.796-26.423-1.188-34.407-4.352-4.352-10.393-6.352-17.062-6.156z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStilettoIcon);
    