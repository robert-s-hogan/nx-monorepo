
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLeeEnfieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lee-enfield'];
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
        <path fill="currentColor" d="M465.659 42.63l-16.16 11.83 11.82 15.69-.272.181 6.32 8.559 22.551-17-8-10.68-6.26 4.71-10-13.29zm-29.09 21.48L269.108 183.86c0 .54-.06 1.03-.06 1.54l-2.16 22.78a16 16 0 0 1-6.52 11.46l-41.91 30.5a16 16 0 0 1-22.35-3.52l-4.95-6.8-29.79 21.48c-1.67 1.22-2.011 3.74-.811 6l2.09 3.951a4.9 4.9 0 0 1-.158 5.37l-48 58.71a1.77 1.77 0 0 1-.282.27l-90.699 70.42c-1.84 1.43-1.91 4.46-.15 6.76l40.82 54.179a5.69 5.69 0 0 0 4.41 2.41h.18a3.47 3.47 0 0 0 2.84-1.59l84.43-111.3a4.2 4.2 0 0 0 1.33-4.37s-3.04-16.07-2.32-17.07c0 0 28.7-38.39 28.95-38.58L454.788 88.7l-18.22-24.59zm-183.5 119.82l-54.14 39.39 10.118 13.91 41.91-30.5 2.112-22.8zm20.138 64.25l-38.629 29.6 7.49 15.37a5.14 5.14 0 0 0 4.73 2.87h.25a6 6 0 0 0 4.57-2.45l22.77-30.59a5.63 5.63 0 0 0 1-4.51l-2.18-10.29zm-59.44 45.6l-5.929 4.59a12.81 12.81 0 0 1-16.48 18.16l-2.26 3-2.26 3a20.27 20.27 0 0 0 30.08-14.81 20.1 20.1 0 0 0-3.15-13.94z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLeeEnfieldIcon);
    