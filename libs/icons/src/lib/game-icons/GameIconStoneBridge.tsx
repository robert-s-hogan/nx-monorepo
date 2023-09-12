
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStoneBridgeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stone-bridge'];
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
        <path fill="currentColor" d="M25 265v71.11c7.526-4.42 17.73-10.278 30-16.98V265H25zm432 0v54.205c12.277 6.687 22.476 12.524 30 16.93V265h-30zm-201.49.28c-39.653.03-99.394 23.28-148.06 46.976-44.553 21.694-76.747 41.37-82.45 44.88V471h110.387c1.88-32.24 13.54-69.11 32.552-99.74 20.797-33.505 51.085-60.252 88.058-60.26 36.985-.008 67.298 26.736 88.12 60.244 19.038 30.635 30.72 67.51 32.603 99.756H487V357.145c-5.72-3.51-38.067-23.218-82.82-44.93-48.875-23.713-108.863-46.962-148.67-46.934z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStoneBridgeIcon);
    