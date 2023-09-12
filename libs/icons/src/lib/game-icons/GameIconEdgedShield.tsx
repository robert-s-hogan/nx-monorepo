
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEdgedShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'edged-shield'];
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
        <path fill="currentColor" d="M460.406 22.125l-10.47 1.25c-132.005 15.758-263.716 19.22-395.248.03L54 23.282H44v9.345c0 103.06 10.502 205.848 41.25 289.22 30.748 83.37 82.665 147.96 164.344 170.405l2.22.594 2.217-.47c89.592-19.1 142.168-83.93 171-168.155 28.835-84.225 35.376-188.492 35.376-291.595v-10.5zm-18.78 20.906c-.265 56.583-2.753 113.052-9.813 165.595l-97.282 41.28L417.22 285c-2.957 11.405-6.22 22.478-9.876 33.156-22.214 64.89-57.017 114.956-112.97 141.188l-41.843-98.375-40.75 95.842c-50.813-28.117-85.577-77.93-109-141.437-3.886-10.54-7.41-21.46-10.655-32.688l77.188-32.78-93.657-41.376c-8.595-52.263-12.39-108.494-12.812-165.186 49.124 6.71 98.217 10.326 147.28 11.406l42.595 100.188 42.843-100.782c48.718-1.684 97.41-5.558 146.062-11.125zM86.218 66.78c0 43.91 2.32 87.696 7.968 129.157l122.937 54.313-101.344 43.03c18.374 55.7 46.708 101.438 88.75 129.033l48.19-113.375 49.468 116.375c46.042-26.184 74.48-72.526 91.75-129.563l-107.22-45.5 126.313-53.625c4.576-41.822 6.064-85.915 6.064-129.844-36.633 4.374-73.274 7.63-109.906 9.44l-56.47 132.874L196.5 76.874c-36.768-1.483-73.514-4.73-110.28-10.093z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEdgedShieldIcon);
    