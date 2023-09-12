
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLightHelmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'light-helm'];
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
        <path fill="currentColor" d="M233 25v158h46V25h-46zm-18 21.74c-25.1 7.53-44.9 22.05-60 40.88-20.7 25.88-32 60.28-33.7 95.38H215V46.74zm82 0V183h93.7c-1.7-35.1-13-69.5-33.7-95.38-15.1-18.83-34.9-33.35-60-40.88zM105 201v30h302v-30H105zm16.8 48c4 23.2 23.2 41.6 48.4 55.1 18.6 9.8 40 16.6 58.8 20.1v-15.3c-13.7-3.7-28.4-9.7-42.2-17-11.8-6.3-22.8-13.6-31.1-22.1-6.1-6.1-11-13.1-13.3-20.8h-20.6zm125.2 0v78h18v-78h-18zm122.6 0c-2.3 7.7-7.2 14.7-13.3 20.8-8.3 8.5-19.3 15.8-31.1 22.1-13.8 7.3-28.5 13.3-42.2 17v15.3c18.8-3.5 40.2-10.3 58.8-20.1 25.2-13.5 44.4-31.9 48.4-55.1h-20.6zm-252.8 33.3c-5.7 54.2-16.7 105.9-27.63 150.1.19.2 1.82 5.3 6.06 11 4.51 6.1 11.17 13.2 18.67 19.8 11.7 10.2 25.9 18.8 37.1 22.2V313.6c-13.5-8.5-25.6-18.9-34.2-31.3zm278.4 0c-8.6 12.4-20.7 22.8-34.2 31.3v171.8c11.2-3.4 25.4-12 37.1-22.2 7.5-6.6 14.2-13.7 18.7-19.8 4.2-5.7 5.8-10.8 6-11-11-44.2-21.9-95.9-27.6-150.1zM256 379c-20.3 0-40.6 1-58.1 3.1-10.9 1.3-20.7 2.8-28.9 5.1v18.9c7.1-2.4 18.2-4.6 31.1-6.2 16.5-1.9 36.2-2.9 55.9-2.9 19.7 0 39.4 1 55.9 2.9 12.9 1.6 24 3.8 31.1 6.2v-18.9c-8.2-2.3-18-3.8-28.9-5.1-17.5-2.1-37.8-3.1-58.1-3.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLightHelmIcon);
    