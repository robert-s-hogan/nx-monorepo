
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDividedSpiralIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'divided-spiral'];
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
        <path fill="currentColor" d="M246.406 21.406c-14.586.572-28.81 2.492-42.594 5.594l9.5 35.438c10.742-2.328 21.784-3.8 33.094-4.313v-36.72zm18.688 0v36.72c11.26.532 22.273 2.01 32.97 4.343l9.53-35.532c-13.753-3.082-27.95-4.97-42.5-5.532zm60.562 10.313l-9.53 35.593c10.674 3.416 20.973 7.725 30.78 12.812l18.47-31.97c-12.604-6.63-25.893-12.154-39.72-16.436zm-139.875.06c-13.773 4.28-27.004 9.798-39.56 16.407l18.343 31.75c9.796-5.057 20.06-9.327 30.718-12.718l-9.5-35.44zM381.5 57.5l-18.47 32c9.345 6.022 18.162 12.792 26.345 20.25l26.156-26.156c-10.5-9.696-21.89-18.423-34.03-26.094zm-251.47.063c-12.167 7.697-23.573 16.455-34.093 26.187l25.876 25.875c8.233-7.492 17.125-14.273 26.53-20.313l-18.312-31.75zM255.626 75.97c-99.678 0-180.656 81.01-180.656 180.686 0 99.65 80.977 180.656 180.655 180.656 99.677 0 180.688-80.98 180.688-180.656 0-45.944-17.214-87.905-45.532-119.812-1.284-1.8-2.583-3.594-3.936-5.344l-.563.438c-32.917-34.474-79.306-55.97-130.655-55.97zm0 18.686c47.59 0 90.35 20.44 119.97 53.03 13.164 18.447 22.208 39.743 25.842 62 10.112 61.704-26.617 129.948-91.062 139.533-41.483 6.182-87.313-18.815-93.03-61.94-1.765-13.308 1.52-27.713 8.686-38.78 7.17-11.067 17.735-18.72 31.44-20.28 7.977-.908 16.773 1.222 23.342 5.593 6.57 4.37 10.854 10.442 11.594 18.437v.03c.094.995.085 2.022 0 3.064-3.712-3.68-8.798-5.938-14.437-5.938-11.344 0-20.564 9.19-20.564 20.53 0 11.344 9.22 20.533 20.563 20.533 3.624 0 7.01-.946 9.967-2.595 7.022-2.2 12.792-6.888 16.625-12.47 5-7.275 7.294-16.084 6.47-24.874-1.3-14.016-9.433-25.333-19.876-32.28-10.442-6.947-23.257-10.05-35.812-8.625-19.64 2.238-35.302 13.744-45 28.72-9.698 14.973-13.907 33.487-11.53 51.405 7.274 54.863 63.562 85.533 114.31 77.97 54.573-8.117 91.783-50.963 104.157-100.75-5.308 84.757-75.54 151.686-161.655 151.686-89.58 0-161.97-72.445-161.97-162 0-89.583 72.39-162 161.97-162zm173.094 2.156L402.56 122.97c7.467 8.202 14.288 17.005 20.313 26.374l32-18.47c-7.685-12.147-16.443-23.556-26.156-34.06zm-345.97.157c-9.647 10.453-18.36 21.797-26 33.874l31.656 18.28c6.015-9.322 12.775-18.114 20.22-26.28L82.75 96.97zm-35.375 50.06c-6.64 12.616-12.183 25.91-16.47 39.75l35.25 9.44c3.43-10.743 7.755-21.076 12.876-30.94l-31.655-18.25zm416.875 0l-32.063 18.5c5.08 9.818 9.376 20.097 12.782 30.782l35.75-9.562c-4.285-13.826-9.838-27.117-16.47-39.72zM26.125 204.813c-3.075 13.723-4.964 27.89-5.53 42.407H57c.53-11.257 2.016-22.28 4.344-32.97l-35.22-9.438zm459.375 0l-35.72 9.563c2.313 10.652 3.787 21.632 4.314 32.844h36.937c-.566-14.518-2.455-28.685-5.53-42.407zM20.594 265.906c.566 14.585 2.466 28.81 5.562 42.594l35.188-9.406C59 288.328 57.52 277.244 57 265.906H20.594zm433.5 0c-.517 11.294-1.986 22.336-4.313 33.063l35.69 9.56c3.1-13.79 4.995-28.03 5.56-42.624h-36.936zm-9.125 51.125c-3.386 10.626-7.648 20.86-12.69 30.626l32 18.47c6.6-12.55 12.103-25.772 16.376-39.532l-35.687-9.563zm-378.814.095l-35.22 9.438c4.277 13.774 9.832 27.003 16.44 39.562l31.562-18.22c-5.082-9.812-9.373-20.1-12.782-30.78zm356.813 46.72c-6.05 9.426-12.87 18.31-20.376 26.56l26.062 26.064c9.76-10.55 18.567-21.983 26.28-34.19l-31.967-18.436zm-334.69.25L56.688 382.31c7.672 12.136 16.43 23.503 26.126 34l25.812-25.812c-7.483-8.21-14.307-17.027-20.344-26.406zm301.126 39.53c-8.177 7.454-17.007 14.198-26.344 20.22l18.407 31.905c12.124-7.66 23.476-16.413 33.967-26.094l-26.03-26.03zm-267.594.094l-25.78 25.78c10.514 9.72 21.903 18.5 34.062 26.188l18.25-31.625c-9.412-6.044-18.294-12.846-26.53-20.344zm225.125 29.53c-9.812 5.092-20.13 9.363-30.812 12.78l9.5 35.47c13.816-4.278 27.093-9.815 39.688-16.438l-18.375-31.812zm-182.406.188l-18.25 31.625c12.54 6.595 25.75 12.103 39.5 16.375l9.47-35.313c-10.655-3.392-20.926-7.63-30.72-12.688zm133.564 17.437c-10.706 2.337-21.728 3.81-33 4.344v36.592c14.54-.562 28.724-2.453 42.47-5.53l-9.47-35.407zm-84.78.063l-9.47 35.28c13.773 3.1 27.988 5.023 42.562 5.594V455.25c-11.31-.512-22.353-1.985-33.094-4.313z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDividedSpiralIcon);
    