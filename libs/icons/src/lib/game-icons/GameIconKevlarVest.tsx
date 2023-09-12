
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKevlarVestIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'kevlar-vest'];
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
        <path fill="currentColor" d="M350.29 21.113l-36.925 85.782 39.828 17.144 36.926-85.782-39.83-17.145zm-188.362.342l-40.115 16.46 35.453 86.4 40.115-16.46-35.452-86.4zm30.898 6.35l-8.133 3.402 28.77 70.133 6.6 16.094-16.08 6.556-40.112 16.46-16.093 6.6-6.6-16.09-28.564-69.59-11.1 4.644a112.952 112.952 0 0 1-18.093 154.4v36.47h93.51v78.048H83.42v14.265h93.51v78.158H83.42v38.338c16.8 16.8 94.695 25.194 172.592 25.194 77.896 0 155.792-8.394 172.592-25.194v-38.338h-93.512V349.21h93.512V334.93h-93.542v-78.147h93.508v-36.46a112.952 112.952 0 0 1-18.093-154.4l-11.34-4.75-30 69.686-6.883 15.986-15.984-6.883-39.774-17.06-15.984-6.883 6.883-15.985 29.683-68.97-7.892-3.26a72.275 72.275 0 0 1-126.36 0zM66 274.182v43.363h93.543v-43.363H66zm286.457 0v43.363H446v-43.363h-93.543zM66 366.605v43.364h93.543v-43.365H66zm286.457 0v43.364H446v-43.365h-93.543z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKevlarVestIcon);
    