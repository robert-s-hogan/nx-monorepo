
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWallLightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wall-light'];
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
        <path fill="currentColor" d="M304 32l-32 48 9.5 9.5c6.774-1.596 14.267-2.498 22.5-2.498s15.726.902 22.5 2.498L336 80l-32-48zm0 72.998c-22 0-35.334 7.062-43.637 15.365-4.704 4.704-7.58 9.97-9.316 14.639h105.906c-1.735-4.668-4.612-9.935-9.316-14.639C339.334 112.06 326 104.998 304 104.998zm-91.182 48l-20.004 30.004h222.372l-20.002-30.004H212.818zm5.805 48l29 174.004h9.662L272 272c9.33-65.307 54.67-65.307 64 0l14.715 103.002h9.662l29-174.004H218.623zm-193.625 7.816v222.372l30.004-20.002V228.816l-30.004-20.002zm48 72.184v78.004h14.004v-78.004H72.998zm32 33.432v18.886c5.62 2.256 10.39 5.308 14.615 8.971 9.382 8.135 16.116 19.757 21.377 33.002 5.261 13.245 8.991 27.937 12.875 41.629 3.884 13.692 7.696 26.41 14.826 36.334 17.755 24.71 52.946 32.73 84.034 27.066 15.544-2.831 30.381-9.273 41.648-20.002 9.365-8.917 16.013-20.987 17.996-35.318h-18.166c-1.696 9.19-6.035 16.373-12.242 22.283-8.103 7.716-19.71 13.007-32.463 15.33-25.504 4.647-54.313-3.334-66.19-19.863-4.397-6.12-8.35-17.426-12.128-30.742-3.778-13.316-7.607-28.618-13.463-43.361-5.857-14.744-13.8-29.106-26.315-39.957-7.253-6.29-16.052-11.216-26.404-14.258zm156.725 78.568l14.004 14.004h56.546l14.004-14.004h-84.554z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWallLightIcon);
    