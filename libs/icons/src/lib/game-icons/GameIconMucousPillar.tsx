
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMucousPillarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mucous-pillar'];
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
        <path fill="currentColor" d="M134.03 19.938c-1.902 9.598-3.692 19.185-5.374 28.78-17.01 60.474-23.59 125.95-18.594 185.844-.226 10.01-.312 20.024-.28 30.032C103.523 335 111.15 412.7 131.405 482.47c.817 4.12 1.668 8.252 2.53 12.374h51.47c-8.876-20.718-12.494-54.164-5.75-92.406 19.663 14.656 36.074 57.923 35.313 92.406h62.968c-5.56-16.518-9.622-44.473-11.657-77.75l-17.53 56.656c-13.64-27.468-22.648-100.036-24.5-183.406-4.885 34.097-13.57 67.383-26.28 97.53-49.444-53.084-39.555-175.16 11.093-285.562l16.937 80s12.138-103.81 22.78-148.687c-.005-.022-.024-.04-.03-.063h.03c-.003.02.006.044 0 .063 16.58 60.65 25.145 127.882 27.44 202.438 3.847-20.063 8.51-39.06 14.592-54.907 35.655 48.09 50.52 247.99 14.563 313.688h71.406c9.802-45.45 17.053-90.884 21.564-136.28 15.02-68.99 12.157-138.86.53-207.283-4.32-43.783-11.546-87.567-21.937-131.343h-38.062c4.322 39.652 4.63 113.673-10.5 166.032-30.267-41.15-47.72-111.623-48.656-166.032H134.03zm26.532 22.593c20.65 69.454 10.268 138.823-26.5 208.282-1.57-2.767-3.062-5.52-4.5-8.28-6.134-57.806-.59-122.652 15.375-182.47 4.745-5.884 9.943-11.737 15.625-17.53zm212.563 90.907c1.825 3.09 3.59 6.188 5.28 9.313 13.14 71.08 16.93 142.932 1.408 213.125-6.022 8.736-12.98 16.996-20.938 24.688-28.872-74.96-23.262-172.173 14.25-247.125zM126.97 287.781c29.516 56.466 37.825 128.855 21.218 185.19-16.653-59.234-24.03-124.576-21.22-185.19z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMucousPillarIcon);
    