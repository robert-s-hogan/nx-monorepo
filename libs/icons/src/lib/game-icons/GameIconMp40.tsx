
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMp40Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mp-40'];
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
        <path fill="currentColor" d="M341.552 242.585l-21.197 21.197 89.386 89.386 21.197-21.197-89.386-89.386zm-13.619-101.81l-12.612-12.613a7.649 7.649 0 0 0-9.1 1.296L84.337 351.342c-7.625 7.625-3.489 47.897 9.693 61.079l4.066 4.066a13.245 13.245 0 0 0 16.928 1.46c1.967-1.687 13.182-4.957 15.414 8.717l7.875 53.438a12.76 12.76 0 0 0 14.478 10.762l21.236-8.42a12.318 12.318 0 0 0 4.253-2.693c2.834-2.833 3.81-6.93 3.083-11.34-.96-5.784-8.358-6.018-9.1-12.893l-7.445-49.856 26.902-26.903a16.037 16.037 0 0 0 0-22.68l-7.297-7.297 78.194-78.194a15.596 15.596 0 0 0 0-22.056l-10.107-10.107c1.818-1.818 3.262-1.701 4.199-1.202l1.397 1.397a11.126 11.126 0 0 0 15.734 0l7.297-7.297 23.351 23.351 27.933-27.932-41.294-41.294 35.542-35.542a7.66 7.66 0 0 0 1.272-9.124zM158.215 372.928l14.048-14.048a10.353 10.353 0 0 1 14.642 0l2.068 2.068a10.353 10.353 0 0 1 0 14.642l-14.049 14.048a10.353 10.353 0 0 1-14.64 0l-2.07-2.068a10.353 10.353 0 0 1 .024-14.618zM221.9 234.242a8.83 8.83 0 0 1 0 12.487l-87.934 87.934a8.83 8.83 0 1 1-12.487-12.487l87.934-87.934a8.83 8.83 0 0 1 12.487 0zM399.798 40.173l-8-12.292a4.415 4.415 0 0 1 5.604-6.431l15.898 8.905 5.752-5.752 12.417 12.417-30.828 30.828a25.022 25.022 0 0 0-1.499 23.227 3.311 3.311 0 0 1-.632 3.754 3.311 3.311 0 0 1-4.682 0L383.76 84.76l-43.433 43.432-12.433-12.433 71.568-71.568z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMp40Icon);
    