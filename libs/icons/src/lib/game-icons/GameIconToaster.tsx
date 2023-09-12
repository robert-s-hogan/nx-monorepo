
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconToasterIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'toaster'];
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
        <path fill="currentColor" d="M231.3 18s-8.6 4.5-17.3 11.15c-4.3 3.33-8.8 7.21-12.5 11.79-3.7 4.57-7 10.07-7 17.02 0 6.95 4.1 12.65 8.2 16.12 4.1 3.48 8.6 5.72 12.6 7.84 4 2.11 7.5 4.1 9.4 5.68 1.9 1.58 1.8 1.77 1.8 2.36 0 .57-.7 2.85-3 5.69-1.3 1.6-3 3.35-4.9 5.05 7.9-1 16-1.7 24.2-2.2 1-2.58 1.7-5.41 1.7-8.54 0-6.95-4.1-12.65-8.2-16.12-4.1-3.48-8.6-5.72-12.6-7.84-4-2.11-7.5-4.1-9.4-5.68-1.9-1.58-1.8-1.77-1.8-2.36 0-.59.7-2.86 3-5.7 2.3-2.84 5.8-6.02 9.5-8.8 7.3-5.58 14.7-9.54 14.7-9.54zm80 0s-8.6 4.5-17.3 11.15c-4.3 3.33-8.8 7.21-12.5 11.79-3.7 4.57-7 10.07-7 17.02 0 6.95 4.1 12.65 8.2 16.12 4.1 3.48 8.6 5.72 12.6 7.84 4 2.11 7.5 4.1 9.4 5.68 1.9 1.58 1.8 1.77 1.8 2.36 0 .57-.7 2.85-3 5.69-.4.54-.9 1.09-1.4 1.65 7.1-.49 14.2-.81 21.4-.93.6-1.99 1-4.12 1-6.41 0-6.95-4.1-12.65-8.2-16.12-4.1-3.48-8.6-5.72-12.6-7.84-4-2.11-7.5-4.1-9.4-5.68-1.9-1.58-1.8-1.77-1.8-2.36 0-.59.7-2.86 3-5.7 2.3-2.84 5.8-6.02 9.5-8.8 7.3-5.58 14.7-9.54 14.7-9.54zm82 0s-8.6 4.5-17.3 11.15c-4.3 3.33-8.8 7.21-12.5 11.79-3.7 4.57-7 10.07-7 17.02 0 6.95 4.1 12.65 8.2 16.12 4.1 3.48 8.6 5.72 12.6 7.84 4 2.11 7.5 4.1 9.4 5.68 1.9 1.58 1.8 1.77 1.8 2.36 0 .57-.7 2.85-3 5.69-1.1 1.33-2.4 2.75-3.9 4.15 7.1 1 13.9 2.3 20.4 3.8 2.6-3.9 4.5-8.33 4.5-13.64 0-6.95-4.1-12.65-8.2-16.12-4.1-3.48-8.6-5.72-12.6-7.84-4-2.11-7.5-4.1-9.4-5.68-1.9-1.58-1.8-1.77-1.8-2.36 0-.59.7-2.86 3-5.7 2.3-2.84 5.8-6.02 9.5-8.8 7.3-5.58 14.7-9.54 14.7-9.54zm-133.5 97.9c-31.3.5-62.5 4.9-84.7 12.4-11 3.7-19.7 8.2-24.9 12.7-5.1 4.5-6.6 7.8-6.1 11.9 1.2 12.3 15 22.9 15 22.9l4.1 2.8-.4 11.4H207.6l-.7-18.3 18-.8.8 19.1h63l-.4-16.4 18-.4.4 16.8h51.1l-1.2-19 7.8-1.5s3.6-.8 7.3-3.4c3.8-2.6 7.1-5.9 7.2-13.9.1-5-2-9.1-7.6-13.8-5.6-4.6-14.6-9.1-25.9-12.6-21.3-6.7-50.3-10-79.7-9.9zm110.8.7c4.6 2.3 8.7 5 12.3 8.1 8.4 7 14.2 16.8 14 27.9-.3 13.8-7.9 23.4-14.9 28.3-2.3 1.6-4.5 2.7-6.5 3.6l.3 5.5H422l-1.3-20.5 7.8-1.5s3.6-.8 7.3-3.4c3.7-2.6 7.1-5.9 7.2-14 .1-5-2-9-7.6-13.7-5.6-4.7-14.6-9.2-25.9-12.7-11.2-3.5-24.5-6-38.9-7.6zM164.5 208c-13 0-27.1 6.8-37.6 17.4-10.6 10.5-17.4 24.6-17.4 37.6v103h254.8c4.3-22.7 24.3-40 48.2-40 23.9 0 43.9 17.3 48.2 40h14.8V263c0-13-6.8-27.1-17.4-37.6-10.5-10.6-24.6-17.4-37.6-17.4zm248 136c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm-303 40v62h366v-62h-14.8c-4.3 22.7-24.3 40-48.2 40-23.9 0-43.9-17.3-48.2-40zm-45.03 5.9C52.5 390.3 36.5 398 36.5 414v9h55v-18H71.98zM141.5 464v30h30v-30zm272 0v30h30v-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconToasterIcon);
    