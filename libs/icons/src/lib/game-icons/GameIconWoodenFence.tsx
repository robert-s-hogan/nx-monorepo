
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWoodenFenceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wooden-fence'];
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
        <path fill="currentColor" d="M149.725 16.338L90.627 79.926v348.678l59.098 63.582 18.584-61.58h51.895l37.91 61.58 37.91-61.58h51.895l18.584 61.58 59.098-63.582V79.926l-59.098-63.588-19.188 63.588v1.97h-50.058v-1.97l-39.143-63.588-39.142 63.588v1.97h-50.06v-1.97l-19.188-63.588zm19.187 84.244h50.06v142.486h-50.06V100.582zm128.346 0h50.058v142.486h-50.058V100.582zM168.912 261.756h50.06v150.162h-50.06V261.756zm128.346 0h50.058v150.162h-50.058V261.756z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWoodenFenceIcon);
    