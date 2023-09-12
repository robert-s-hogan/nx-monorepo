
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'king'];
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
        <path fill="currentColor" d="M257.408 22.127l-23.082 62.035-31.017-57.707-11.542 59.15-44.002-55.543L154.26 110c27.263 27.263 178.638 27.663 206.3 0l5.772-79.936-44.002 55.543-11.54-59.15-31.02 56.986-22.36-61.313h-.002zm.45 129.094c-18.725 0-36.08 9.108-49.06 25.696-12.977 16.588-21.023 40.493-21.023 66.578 0 27.678 9.47 52.137 23.946 68.914l10.512 11.682-15.185 3.504c-40.28 9.177-59.512 28.283-70.666 57.818-10.383 27.496-12.014 65.42-12.263 110.38H393.35c-.047-45.15-.35-84.062-9.928-112.134-10.28-30.13-29.122-49.348-72.418-57.816l-15.186-2.92 9.928-12.266c13.574-16.684 22.193-40.46 22.193-67.162 0-26.085-8.048-49.99-21.026-66.578s-30.332-25.695-49.057-25.695z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKingIcon);
    