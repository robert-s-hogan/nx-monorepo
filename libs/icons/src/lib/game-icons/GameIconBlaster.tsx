
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBlasterIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'blaster'];
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
        <path fill="currentColor" d="M256 136c60 75-45 45-165 45 51.292 17.097 90.22 30.17 118.125 41.25C164.385 236.653 103.75 249.25 16 256c87.75 6.75 148.386 19.347 193.125 33.75C181.22 300.83 142.293 313.903 91 331c120 0 225-30 165 45 19.66-9.83 42.34-19.584 64.218-30.468C345.538 362.998 364.79 376 399.906 376c48 0 96.093-48 96.093-120s-48.096-120-96.094-120c-35.35 0-54.58 12.824-80.157 30.468-21.765-10.81-44.206-20.695-63.75-30.468zm132.188 47.813c33.136 0 60 32.422 60 72.187s-26.864 72.188-60 72.188c-9.062 0-17.61-2.715-25.313-7.032C388.008 303.676 406 282.742 406 256c0-26.743-17.992-47.68-43.125-65.158 7.702-4.316 16.25-7.032 25.313-7.032z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBlasterIcon);
    