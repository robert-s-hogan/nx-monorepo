
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalScalesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-scales'];
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
        <path fill="currentColor" d="M38.676 18.352V122.57l129.047 129.045V18.352H79.727l.002 99.343H61.04V18.352H38.675zm147.734 0v244.793h141.496V18.352H186.41zm160.184 0v230.945L473.322 122.57V18.352h-19.818l.002 99.343h-18.69l-.002-99.343h-88.22zm83.152 174.224l-18.46 18.46.003 80.677H392.6l-.002-61.992-52.114 52.114h-13.632v122.47L429.746 301.41V192.576zm-347.492.002v108.834l104.408 104.406V281.834h-15.15l-51.627-51.625.002 61.503H101.2l-.003-80.192-18.943-18.942zm124.123 35.125h101.207v18.69H206.377v-18.69zm-1.027 54.13V413.91h102.816V281.834H205.35zm-83.55 85.558v126.346h80.026v-61.138H187.01l-28.08-28.08.002 65.443h-18.69l-.002-84.132-18.44-18.437zm268.343.055l-17.15 17.15v85.366h-18.688l-.002-66.677-29.315 29.315h-13.3v61.138h78.455v-126.29zm-164.106 9.52h64.953v18.687h-64.953v-18.687zm-5.52 55.633v61.138H293v-61.138h-72.484z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalScalesIcon);
    