
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMountainCaveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mountain-cave'];
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
        <path fill="currentColor" d="M195.344 71.438c-3.83.12-7.66 1.205-10.938 3.062-9.987 5.66-16.774 16.198-25.062 31.72-8.288 15.52-17.55 36.4-29.03 63.218C107.35 223.07 75.606 300.42 26.843 403.875a9.5 9.5 0 1 0 17.187 8.094c48.966-103.882 80.897-181.682 103.75-235.064 11.428-26.69 20.6-47.274 28.314-61.72 7.713-14.443 14.5-22.366 17.656-24.155 1.578-.893 1.773-.822 2.78-.56 1.01.26 3.136 1.348 6 4.155 5.732 5.614 13.667 17.43 23.314 34.438 19.077 33.636 45.742 87.6 87.28 159.03-4.364 10.616-9.077 21.89-14.25 33.876a9.5 9.5 0 1 0 17.438 7.53c20.076-46.524 33.676-83.107 44.188-106.47 5.256-11.68 9.878-20.06 13.22-24.093 1.445-1.745 2.452-2.466 2.874-2.718.654.36 4.928 3.886 9.937 12.468 5.162 8.84 11.398 22.197 18.845 40 14.893 35.605 34.786 89.108 63.313 162.656a9.503 9.503 0 1 0 17.718-6.875c-28.48-73.43-48.32-126.835-63.5-163.126-7.59-18.146-13.993-31.983-19.97-42.22-5.974-10.235-11.09-17.537-19.78-20.843-2.172-.825-4.596-1.186-7-1.124-2.403.062-4.778.553-6.875 1.47-4.192 1.83-7.355 4.77-10.186 8.186-5.664 6.836-10.42 16.147-15.938 28.407-6.044 13.432-12.834 30.485-20.97 50.624-37.043-64.58-61.375-113.65-79.81-146.156-9.925-17.5-17.96-30.198-26.564-38.626-4.3-4.213-8.923-7.548-14.53-9-1.403-.362-2.857-.563-4.313-.624-.547-.024-1.08-.018-1.626 0zm5.03 258.78c-39.944 0-72.31 39.03-72.31 87.188h144.624c0-48.16-32.368-87.187-72.313-87.187z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMountainCaveIcon);
    