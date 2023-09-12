
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLeoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'leo'];
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
        <path fill="currentColor" d="M168.817 305.907c12.462 0 22.567-10.1 22.567-22.566s-10.105-22.56-22.567-22.56-22.567 10.094-22.567 22.56c0 12.467 10.105 22.567 22.567 22.567zM59.85 283.487c0-59.368 47.824-107.56 107.046-108.155-1.167-8.847-1.714-18.013-1.443-27.63C170.835-40.66 463.57-1.64 419.316 179.118c-16.387 66.94-44.974 130.56-71.378 188.645-24.682 54.31 13.657 50.307 17.238 32.797l83.598 1.82c-3.044 139.3-258.61 110.427-176.962-69.216 26.777-58.917 48.966-116.556 66.282-173.938 19.813-65.64-130.754-90.223-76.484 49.75 7.782 20.08 14.543 44.747 14.427 69.036l.135 5.47c0 59.733-48.424 108.158-108.163 108.158-59.74 0-108.16-48.42-108.16-108.154z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLeoIcon);
    