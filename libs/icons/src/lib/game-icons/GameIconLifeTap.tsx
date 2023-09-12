
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLifeTapIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'life-tap'];
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
        <path fill="currentColor" d="M345.688 65.844c-35.618.5-72.53 18.186-98.813 55.594 10.073 20.198 14.32 42.84 11.063 66.156L239.405 185c6.576-47.067-22.98-91.607-72.97-112.28-69.356-23.26-149.8 17.77-146.842 110.5 4.334 135.738 198.593 214.873 219.5 292.905 7.42-27.684 42.628-58.402 82.687-93.188-2.85.51-5.782.782-8.78.782-33.258 0-58.156-32.542-58.156-70.19 0-37.646 24.9-70.155 58.156-70.155 15.437 0 29.067 7.034 39.25 18.313H380.312v-19.063H353.72v-18.688h71.905v18.688H399.03v19.063h34.439v3.843c15.718-25.613 25.388-52.978 24.467-82.31-2.326-74.106-53.54-116.433-108.812-117.376-1.146-.02-2.29-.016-3.438 0zM313 262.064c-20.678-.002-39.47 21.928-39.47 51.467 0 29.54 18.792 51.5 39.47 51.5 11.58 0 22.595-6.877 30.03-18.124h-16.217c-11.09 0-20.496-4.162-26.344-10.906-5.85-6.744-8.05-15.39-7.533-23.594.518-8.202 3.65-16.23 9.407-22.562 5.756-6.332 14.48-10.75 24.47-10.75h15.467c-7.414-10.596-18.078-17.03-29.28-17.03zm51.563 18.31v62.907h50.218v-62.905h-50.217zm-37.75 17.407c-4.823 0-8.008 1.747-10.625 4.626-2.618 2.88-4.337 7.11-4.594 11.188-.257 4.077.86 7.72 3 10.187 2.138 2.467 5.4 4.44 12.22 4.44h19.06v-30.44h-19.062zm106.656.158V328.5c10.466 1.267 15.374 7.182 15.374 18.75v34.25h30.437v-34.25c0-27.41-13.77-47.27-45.81-49.313zm29.967 103.218c-5.23 43.36-24.52 37.683-24.906 65-.167 12.38 11.43 22.625 25.814 22.625 14.382 0 26.25-10.24 26.25-22.624 0-27.455-21.384-21.81-27.156-65z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLifeTapIcon);
    