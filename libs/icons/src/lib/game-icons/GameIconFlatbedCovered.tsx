
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlatbedCoveredIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flatbed-covered'];
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
        <path fill="currentColor" d="M100.63 319l-59-5.93v-23.45h80.18A53.36 53.36 0 0 0 100.63 319zm385.87 14.56a36.16 36.16 0 1 1-36.17-36.16 36.16 36.16 0 0 1 36.17 36.16zm-6.31 0a29.86 29.86 0 1 0-29.86 29.86 29.89 29.89 0 0 0 29.87-29.86zm-29.86-12.85a12.85 12.85 0 1 0 12.85 12.85 12.85 12.85 0 0 0-12.84-12.85zm-262.41 12.85a36.16 36.16 0 1 1-36.17-36.16 36.16 36.16 0 0 1 36.17 36.16zm-36.17-29.86a29.86 29.86 0 1 0 29.86 29.86 29.89 29.89 0 0 0-29.86-29.86zm0 17a12.85 12.85 0 1 0 12.85 12.85 12.85 12.85 0 0 0-12.85-12.84zm116.44-178.42H25.5v131.37h242.69V142.28zM483.61 282v10.09a53.13 53.13 0 0 0-86.45 41.43H281.6a25.08 25.08 0 0 0-21.83-12.85h-56.42a53.33 53.33 0 0 0-21.68-31.08h102.69v-91.71a12.27 12.27 0 0 1 12.27-12.27h66.31a12.27 12.27 0 0 1 12.27 12.27v2.67h-7.77v43.84H446A37.65 37.65 0 0 1 483.61 282zm-123.34-81.44h-52V252h52v-51.44z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlatbedCoveredIcon);
    