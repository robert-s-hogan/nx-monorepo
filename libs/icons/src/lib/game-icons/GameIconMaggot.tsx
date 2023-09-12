
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMaggotIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'maggot'];
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
        <path fill="currentColor" d="M256.125 21.313c-21.555.258-42.353 12.478-51.75 40.062-31.275-32.385-97.713 10.676-87.97 53.094-53.072-25.932-95.368 64.237-60.06 98.155-45.317 10.395-40.488 81.212-3.814 94.22-32.227 43.025-7.694 78.033 31.47 77.53 4.022 19.097 11.888 31.042 21.125 37.594l.094.06c8.953 4.856 24.56 2.825 37.093-4.842 6.776-4.146 12.083-9.32 15.187-15.188 3.102-5.867 3.896-12.004 1.75-18.688l.28-.093c-3.663-9.363-12.124-19-27.25-27.626 6.36-16.708 3.205-38.016-10.25-55.813 22.183-16.804 22.08-38.52 10.72-60.592 21.896-10.4 31.902-24.247 32.594-50.625 3.057-3.222 6.862-4.167 9.78 2.937 21.42 52.122 39.85 45.656 33.907-7.375-1.574-14.063 31.85-10.588 30.064 5.188-6.937 61.29 11.886 76.603 30.25 6 5.39-20.734 32.76-3.333 27.78 7.968-25.11 57.02-12.883 64.416 25.345 18 15.174-18.424 30.523 5.896 21.5 16.47-37.808 44.3-35.244 56.726 12.905 29.03.78-.447 1.596-.86 2.438-1.25 1.196-5.386 2.855-10.744 4.906-15.967 7.79-19.84 21.046-38.1 37.374-50.782 16.327-12.682 35.897-20.147 55.5-15.78 5.836 1.3 11.25 3.598 16.22 6.656 2.937-36.742-21.102-65.87-58.158-56.5 11.587-32.65-7.79-61.53-34.312-73.75-20.627-9.505-45.55-9.277-62.188 7.282-9.412-28.555-36.517-45.688-62.53-45.376zm190.264 179c-10.646-.037-22.24 4.617-33.1 13.052-13.366 10.382-25.04 26.086-31.538 42.635-6.5 16.55-8.142 33.837-2.336 47.305 5.806 13.467 18.623 24.63 44.385 30.37 24.453 5.446 40.05.467 50.81-9.345 10.764-9.81 16.735-25.48 18.105-43.22 1.37-17.738-2.04-37.027-9.344-51.975-7.3-14.95-17.58-25.315-29.784-28.033-2.334-.52-4.74-.78-7.197-.788zm-84.984 107.343c-21.303 28.16-18.983 73.03 11.406 110.875-19.538-46.616-9.817-72.812 8.907-83.717-8.846-6.922-15.272-15.27-19.25-24.5-.382-.882-.727-1.766-1.064-2.657zm117.97 36.47c-7.383 4.792-16.037 8.025-25.845 9.437 10.56 18.267 6.302 45.215-31.592 76.093 48.096-16.604 64.47-51.016 57.437-85.53zm-307.532 70.968c-4.994 7.542-11.88 13.7-19.625 18.437-2.052 1.256-4.16 2.413-6.345 3.47 39.006 31.386 91.033 41.48 120.25-15.438-34.71 27.772-69.927 15.69-94.28-6.468z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMaggotIcon);
    