
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLogIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'log'];
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
        <path fill="currentColor" d="M391.69 15.94c-16.368.073-31 5.07-41.975 16.044L73.83 307.87c4.225-.493 8.42-.613 12.56-.372 3.104.18 6.177.564 9.21 1.14 13.84 2.63 26.617 8.977 37.984 17.714 27.167-24.11 141.885-119.71 141.885-119.71-40.545 46.737-88.255 89.892-120.536 140.76.593.734 1.195 1.46 1.775 2.205 15.83 20.355 26.67 45.27 29.923 69.563.955 7.135 1.235 14.277.74 21.23l181.06-181.06-7.742-4.647c-.48.215-.962.43-1.493.647l-45.254 22.627 45.254-45.254c0 .09.02.18.026.27l.072-.12 43.52 26.114c1.272-5.898 3.794-11.413 7.824-16.05 4.662-5.37 11.21-9.078 19-10.74l-26.124-43.542 15.435-9.262 11.04 18.4 42.762-42.762c21.036-21.035 26.396-41.327 23.27-60.39-1.63-9.942-5.823-19.683-11.913-28.747l-72.876 72.875 63.522-84.697c-3.586-3.89-7.52-7.585-11.752-11.03-8.926-7.268-19.102-13.37-29.695-17.936.182.177.37.35.55.527l-56.567 33.942 21.668-43.337c-1.333-.107-2.66-.187-3.974-.233-1.106-.04-2.205-.055-3.297-.05zm43.593 233.36c-5.373.6-8.696 2.71-11.058 5.43-2.093 2.41-3.55 5.79-4.127 9.872 4.65-.945 7.952-2.652 10.228-4.928 2.3-2.3 4.02-5.645 4.957-10.375zM81.69 325.282c-15.297-.065-31.403 6.298-48.342 23.08-14.82 15.01-19.83 34.54-17.672 55.385 2.17 20.985 12 42.9 26.424 59.945 2.267 2.68 4.655 5.22 7.125 7.633 3.784-12.452 22.964-33.344 33.912-49.724-7.955 21.334-13.49 43.014-12.62 65.61 7.806 4.22 16.034 7.09 24.415 8.25 19.47 2.693 40.22-3.064 61.29-23.92 11.398-11.606 15.307-29.53 12.57-49.983-2.76-20.61-12.425-43.073-26.292-60.902-13.867-17.83-31.744-30.818-50.262-34.338-3.472-.66-6.987-1.022-10.547-1.037zm-8.21 19.8a73.833 55.395 45 0 1 60.14 26.034 73.833 55.395 45 0 1 13.038 91.377 73.833 55.395 45 0 1-46.732 11.692 61.463 48 45 0 0 29.154-11.608 61.463 48 45 0 0-9.52-77.4 61.463 48 45 0 0-77.402-9.522 61.463 48 45 0 0-11.62 29.147A73.833 55.395 45 0 1 42.24 358.08a73.833 55.395 45 0 1 31.237-12.998z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLogIcon);
    