
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHolosphereIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'holosphere'];
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
        <path fill="currentColor" d="M256 48c-29.077 0-56.755 5.975-81.887 16.75h163.774C312.755 53.975 285.077 48 256 48zM130.34 90.25c-10.07 7.646-19.424 16.18-27.938 25.5h307.196c-8.514-9.32-17.87-17.854-27.938-25.5H130.34zm-47.834 51c-5.38 8.12-10.21 16.635-14.428 25.5h375.844c-4.218-8.865-9.048-17.38-14.43-25.5H82.506zm-24.54 51c-2.665 8.286-4.826 16.797-6.443 25.5H460.48c-1.62-8.703-3.782-17.214-6.447-25.5H57.967zm-9.566 51c-.255 4.22-.4 8.467-.4 12.75 0 4.283.145 8.53.4 12.75h415.2c.255-4.22.4-8.467.4-12.75 0-4.283-.146-8.53-.4-12.75H48.4zm3.123 51c1.618 8.703 3.78 17.214 6.444 25.5h396.066c2.665-8.286 4.826-16.797 6.444-25.5H51.523zm16.555 51c4.218 8.864 9.05 17.38 14.43 25.5h346.986c5.382-8.12 10.212-16.636 14.43-25.5H68.078zm34.324 51c8.514 9.32 17.87 17.854 27.94 25.5H381.66c10.068-7.646 19.424-16.18 27.938-25.5H102.402zm71.71 51C199.246 458.025 226.923 464 256 464c29.076 0 56.755-5.975 81.887-16.75H174.113z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHolosphereIcon);
    