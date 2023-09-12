
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDimetrodonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dimetrodon'];
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
        <path fill="currentColor" d="M298.982 97.941l2.643 154.663c1.182.007 2.364.01 3.543.035 3.934.083 7.85.268 11.742.55a1319.32 1319.32 0 0 0 2.065-13.32c1.971-13.106 4.467-30.398 6.918-47.613 4.548-31.951 8.58-61.086 9.189-65.483-11.4-16.17-23.595-27.229-36.1-28.832zm-17.97 1.829c-13 3.035-25.958 9.247-38.569 18.001l28.79 136.65a235.34 235.34 0 0 1 12.4-1.23zm-54.348 30.412c-10.78 9.487-21.187 20.728-31.01 33.297l46.041 96.562a235.422 235.422 0 0 1 11.756-2.707zm123.195 20.964c-1.74 12.454-3.88 27.722-6.146 43.647-2.454 17.239-4.954 34.555-6.94 47.754-.746 4.962-1.385 9.079-1.959 12.67 5.185.8 10.306 1.782 15.352 2.941l21.506-58.947c-6.572-16.604-13.908-33.22-21.813-48.065zM183.588 180c-7.51 10.993-14.573 22.735-21.09 34.992l50.52 54.461a231.898 231.898 0 0 1 11.232-4.174zm197.787 45.133l-13.803 37.828c10.575 3.434 20.693 7.707 30.207 12.78-3.986-13.445-9.533-31.244-16.404-50.608zm-227.492 7.039a411.753 411.753 0 0 0-13.508 32.072l38.656 22.258a226.545 226.545 0 0 1 16.66-9.258zm146.219 38.94c-50.046.083-99.53 19.975-138.327 48.306-26.682 37.672-120.21 39.383-139.056 77.502 47.173.69 109.846-26.377 150.062-38.574 7.15 3.76 14.778 7.626 21.053 10.459-4.837 14.275-11.095 31.767-7.965 45.254h81.8c-1.925-11.9-33.018-13.838-38.062-19.784-3.905-4.603-4.286-9.148-3.253-13.949 31.11 7.79 74.47 5.796 102.304-1.285 1.08 11.712 6.056 23.306 8.774 35.018h69.882c-12.354-8.423-35.004-13.834-40.048-19.78-7.943-9.361-3.555-22.048 5.386-31.074 10.2-10.296 17.087-13.427 31.737-22.469 17.765 7.829 59.647 15.906 69.1.215-7.47-1.42-15.012-3.545-22.428-6.308l6.285-16.868c10.747 4.005 21.83 6.277 31.935 6.881-.27-7.465-9.186-14.357-23.668-18.297-3.352-27.585-50.887-28.619-72.709-12.677-25.018-14.046-55.73-21.865-87.97-22.526a218.254 218.254 0 0 0-4.832-.045zm-165.735 10.443c-4.395 13.681-7.997 27.493-10.713 41.193 6.995-3.509 14.07-7.05 21.315-10.693a222.72 222.72 0 0 1 17.44-14.356z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDimetrodonIcon);
    