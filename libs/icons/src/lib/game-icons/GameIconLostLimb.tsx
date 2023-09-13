
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLostLimbIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lost-limb'];
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
        <path fill="currentColor" d="M409.266 49.984a19.953 19.953 0 0 0-4.762.502c-6.472 1.5-12.095 6.414-14.35 15.485-6.242 25.111-13.66 49.402-22.441 72.63l40.506 20.899c16.382-15.957 33.864-30.707 52.226-44.045 30.577-22.209-5.691-59.249-32.146-22.639 13.409-25.165-3.444-42.628-19.033-42.832zm-91.065 86.38c-8.123 46.174-60.917 167.444-123.922 191.466L77.41 328.918c-41.172-29.506-80.488 13.017-32.65 36.852l68.517 33.345c46.874 3.97 91.175 13.12 117.971 57.383l19.4 9.451c34.905 17.391 66.062 13.273 73.28-44.898 10.156-81.832 59.3-173.032 115.87-224.51l-55.095-27.266c-1.498 4.01-3.443 8.428-5.78 12.985-7.762 15.141-16.815 26.019-20.208 24.28-3.393-1.74.153-15.441 7.916-30.583 2.303-4.492 4.72-8.605 7.068-12.129l-18.77-9.289a379.612 379.612 0 0 1-7.587 17.186c-12.928 27.444-26.458 48.288-30.2 46.525-3.741-1.763 3.713-25.468 16.641-52.912a379.15 379.15 0 0 1 8.545-17.033l-24.127-11.942z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLostLimbIcon);
    