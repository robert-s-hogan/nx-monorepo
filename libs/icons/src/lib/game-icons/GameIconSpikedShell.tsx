
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikedShellIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiked-shell'];
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
        <path fill="currentColor" d="M175.125 11.375l7.656 122.78c-15.95 4.655-30.756 10.78-44.093 18.095L51.063 76.406l48.47 105.03c-17.535 17.983-28.61 39.145-31 61.94h112.75c4.627-37.73 36.893-67.095 75.843-67.095s71.216 29.366 75.844 67.095h112.717c-2.388-22.83-13.486-44-31.062-62l48.438-104.97-87.594 75.814c-13.638-7.474-28.798-13.72-45.158-18.407l7.625-122.438-61.406 113.094c-6.385-.446-12.846-.657-19.405-.657-6.945 0-13.81.252-20.563.75L175.125 11.374zm82 183.594c-32.012 0-57.75 25.742-57.75 57.75 0 32.006 25.738 57.75 57.75 57.75s57.75-25.744 57.75-57.75c0-32.008-25.738-57.75-57.75-57.75zM68.53 262.062c2.403 22.78 13.473 43.936 31 61.906L51.063 429.03l87.657-75.842c13.326 7.305 28.123 13.413 44.06 18.062l-7.655 122.813 61.47-113.25c6.74.496 13.595.78 20.53.78 6.548 0 12.998-.244 19.375-.687l61.438 113.156-7.625-122.468c16.354-4.685 31.523-10.906 45.156-18.375l87.592 75.81-48.468-105c17.576-17.99 28.69-39.15 31.094-61.967h-112.72c-4.627 37.73-36.893 67.093-75.843 67.093s-71.216-29.364-75.844-67.094H68.53z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikedShellIcon);
    