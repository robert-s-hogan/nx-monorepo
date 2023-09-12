
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEvilForkIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'evil-fork'];
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
        <path fill="currentColor" d="M257.313 21.813l-8.563 19.75-17.688 40.75-5.656 13.062h23.25v118.47c-13.75.87-27.51 4.044-41.125 9.75v-80.94h22.064l-5.688-13.06-17.656-40.75-8.594-19.75-8.562 19.75-17.688 40.75-5.656 13.06h23.094V254.22l13.844-7.626c15.526-8.545 30.754-13.26 45.968-14.47v111.783l11.906-3.375c63.584-18.07 107.505-12.832 134.063 1.25 26.558 14.085 36.504 36.483 34.063 56.97-2.442 20.487-17.308 39.61-46 46.625-28.693 7.016-71.885 1.21-128.063-32.094-29.367-17.408-66.103-38.01-104.5-43.655-23.335-3.43-47.54-.667-69.844 11.75-9.52-11.33-17.738-24.647-24.686-39.875C34.937 387.392 22.432 437.344 22 493.28c32.185-31.62 70.666-57.006 120.563-71.03-18.796-5.505-35.13-14.682-49.188-27.344 17.083-8.407 35.181-9.553 54.03-6.78 33.512 4.926 68.725 24.047 97.69 41.218 58.958 34.95 106.907 42.776 142.03 34.187 35.123-8.587 56.756-34.316 60.125-62.592 3.37-28.277-11.556-58.518-43.875-75.657-30.33-16.082-75.513-20.825-136.03-5.717v-87.157c15.117 1.588 30.324 6.463 45.905 14.344l13.563 6.875v-110.97H348.875l-5.657-13.06-17.69-40.75-8.56-19.75-8.595 19.75-17.656 40.75-5.69 13.06h23.095v81.376c-13.46-5.4-27.093-8.785-40.78-9.968V95.376h21.905l-5.688-13.063-17.687-40.75-8.563-19.75zM143.438 59.937C118.564 61.831 94.734 77.45 74.53 102 30.083 156.017 4.637 251.026 32.438 327.063c-.4-70.025 48.94-105.56 67.688-39.032 1.38-48.89 41.444-78.51 68.313-42.686v-64.03c-32.01-10.637-47.006-60.076-25-121.376zm227.562 0c22.006 61.3 7.01 110.74-25 121.376v64.03c26.87-35.822 66.933-6.203 68.313 42.688 18.746-66.526 68.09-30.992 67.687 39.033 27.8-76.037 2.386-171.046-42.063-225.063C419.733 77.45 395.873 61.83 371 59.937z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEvilForkIcon);
    