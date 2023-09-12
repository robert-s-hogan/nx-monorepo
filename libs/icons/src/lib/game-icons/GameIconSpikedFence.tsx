
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikedFenceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiked-fence'];
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
        <path fill="currentColor" d="M59.04 23.11l-35.3 93.59 25.96-14.9V158c-1.32 18-13.82 32.6-30.39 36.7v19.1c11.64-2 22.12-7.5 30.39-15.3v97.3c-11.62 1.9-22.1 7.3-30.39 15.1v39.4c1.68-17.5 14.08-31.5 30.39-35.4v177.5h18.69V314.9c16.46 4 28.96 18.4 30.55 36.1v141.5h18.66V354.4c3.9-18.9 15.1-39.3 31.2-39.6v177.6h18.7V314.9c17.4 4.4 30.4 20.3 30.6 39.5v138.1h18.6V354.3c.3-19.4 13.5-35.4 31.2-39.5v177.6h18.7V315c17.4 4.4 30.2 20.3 30.4 39.4.4 45.6.2 92.2.2 138.1h18.7V350.9c1.6-17.8 14.2-32.2 30.8-36.1v177.6h18.7V315c17.4 4.3 30.3 20.1 30.3 39.3.5 45.5.2 92.3.2 138.2h18.7V349.7c2-17.4 14.6-31.3 31-35v177.7h18.7V315.1c16.4 4.3 28.7 18.9 30 36.7v-40.7c-8.2-7.7-18.5-13.1-30-15.1v-97.6c8.1 7.8 18.5 13.2 30 15.3v-19.1c-17-4.5-29.5-19.9-30-38.6v-54.2l25.9 14.9-35.3-93.59-35.3 93.59 26-14.9v53.5c-5 23-22.7 40.1-40.2 40.6-22.1 0-40-18-40-40.5-.1-17.8 0-35.8 0-53.6l26 14.9L356 23.11l-35.3 93.59 26-14.9v55.6c-1 21.6-18.5 38.5-39.9 38.5-22.1 0-40-18-40.2-40.6v-53.5l26 14.9-35.3-93.59L222 116.7l25.9-14.9v53.6c-.2 22.5-18.1 40.5-40.1 40.5-22.1 0-40-18-40.2-40.6-.2-17.7-.1-35.7-.1-53.5l26 14.9-35.3-93.59-35.3 93.59 25.9-14.9v55.4c-1.2 21.7-18.7 38.7-40.1 38.7-22.09 0-39.99-18-40.19-40.6-.25-17.6-.13-35.7-.13-53.5l25.96 14.9-35.3-93.59zm9.35 175.19c8.28 7.9 18.82 13.4 30.55 15.5v97.3c-8.31-7.8-18.85-13.3-30.55-15.2zm99.11 0c8.3 7.9 18.8 13.5 30.6 15.5v97.5c-8.3-7.9-18.9-13.5-30.6-15.4v-97.6zm278.1 0v97.4c-11.9 1.8-22.5 7.3-31 15.1v-97c11.9-1.9 22.6-7.4 31-15.5zm-179 .1c8.3 7.9 18.9 13.4 30.6 15.4v97.7c-8.3-8-18.8-13.6-30.6-15.6v-97.5zm-18.7 0v97.4c-11.9 1.9-22.7 7.4-31.2 15.5v-97.4c12.2-3.2 23.4-8.3 31.2-15.5zm-99.1 0v97.4c-12 1.9-22.7 7.5-31.2 15.7v-97.6c12.2-3.1 23.4-8.2 31.2-15.5zm216.6.1c8.3 7.9 18.8 13.4 30.5 15.3v97.5c-8.2-7.9-18.8-13.4-30.5-15.4v-97.4zm-18.7.1v97.2c-11.8 1.9-22.5 7.4-30.8 15.3v-97.2c12-3.1 23.1-8.1 30.8-15.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikedFenceIcon);
    