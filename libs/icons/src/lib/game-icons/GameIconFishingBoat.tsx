
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFishingBoatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fishing-boat'];
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
        <path fill="currentColor" d="M232.54 67.154l-17.08 5.692L241.513 151h18.976zM71.28 106.707l-14.56 10.586L71 136.928V230h18v-68.322L161.234 261h22.258zM272 117v18h39v16h18v-16h39v-18zm-23 52v126h108.943l-5.111-46H279v-80zm48 0v62h53.834l-6.889-62zM89 279v16h110v-16zm-70.012 34l41.248 110h319.68l114.25-110H140.588C157.022 318.35 169 333.85 169 352c0 22.537-18.463 41-41 41s-41-18.463-41-41c0-18.15 11.978-33.65 28.412-39zM128 329c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm208 0h80v18h-80zM96 439c-28.777 2.338-51.11 8.201-78.61 16.387l5.22 17.226C45.822 467.213 71.59 457.287 96 457c23.665 0 49.275 16 80 16s56.335-16 80-16 49.275 16 80 16 56.335-16 80-16c27.734 2.18 46.87 7.726 73.39 15.613l5.22-17.226C468.536 448.762 443.471 439.273 416 439c-30.725 0-56.335 16-80 16s-49.275-16-80-16-56.335 16-80 16-49.275-16-80-16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFishingBoatIcon);
    