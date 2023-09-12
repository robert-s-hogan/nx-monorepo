
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHalberdShurikenIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'halberd-shuriken'];
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
        <path fill="currentColor" d="M491.094 26.142L252.386 90.54c31.89 10.63 59.996 24.876 84.25 43.577-9.27 42.608-46.607 74.566-91.996 74.566-52.386 0-94.903-42.517-94.903-94.903 0-25.446 9.823-48.803 26.148-65.85-35.796 10.842-69.043 30.307-97.323 58.586-28.28 28.28-48.228 62.013-59.07 97.807 17.094-16.605 40.637-26.63 66.334-26.63 26.194 0 49.64 10.905 66.818 28.082 17.176 17.177 28.083 40.625 28.083 66.82 0 52.385-42.517 94.902-94.903 94.902-25.695 0-49.24-10.025-66.335-26.632 10.842 35.802 30.303 70.008 58.586 98.29 28.283 28.284 62.49 47.747 98.29 58.588-16.604-17.093-26.63-40.638-26.63-66.335 0-52.386 42.516-94.903 94.902-94.903 26.194 0 49.64 10.907 66.82 28.084 17.178 17.175 28.083 40.624 28.083 66.818 0 25.697-10.024 49.24-26.63 66.335 35.795-10.843 69.526-30.793 97.806-59.07 28.28-28.28 47.744-61.53 58.587-97.324-17.048 16.322-40.403 26.147-65.85 26.147-52.387 0-94.904-42.517-94.904-94.903 0-45.17 31.762-82.017 74.08-91.512 18.417 24.114 33.132 51.887 44.063 83.766L491.09 26.14z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHalberdShurikenIcon);
    