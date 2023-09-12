
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMechaMaskIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mecha-mask'];
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
        <path fill="currentColor" d="M229.096 33l-43.082 71.803 30.744 76.857 15.726 110.098L243.73 303h24.542l11.245-11.242 15.726-110.098 30.744-76.857L282.904 33H265v151h-18V33h-17.904zm-80.77 16l-46.242 57.799 71.719 15.937-7.817-19.539L198.504 49h-50.178zm165.17 0l32.518 54.197-7.815 19.54 71.715-15.938L363.674 49h-50.178zM60.262 115.943l11.353 45.41 131.576 52.631-3.949-27.644-17.346-43.365-121.634-27.032zm391.476 0l-121.634 27.032-17.346 43.365-3.95 27.644 131.577-52.63 11.353-45.41zM89 187.693v73.05l62 74.4v-57.268l16.055-32.111L112 232v-35.107l-23-9.2zm334 0l-23 9.2V232l-55.055 13.764L361 277.875v57.268l62-74.4v-73.05zm-227.986 42.405L169 282.125V390l52-39h70l52 39V282.125l-26.014-52.027-11.115 4.445-9.387 65.7L275.73 321H236.27l-20.755-20.758-9.387-65.699-11.115-4.445zM134.826 343.85l-13.072 91.507L167 462.504V435.5l70-52.5h38l70 52.5v27.004l45.246-27.147-13.074-91.505L361 363.258V426l-76-57h-58l-76 57v-62.742l-16.174-19.408zM243 401l-58 43.5v28.805l9.492 5.695H247v-23h18v23h52.508l9.492-5.695V444.5L269 401h-26z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMechaMaskIcon);
    