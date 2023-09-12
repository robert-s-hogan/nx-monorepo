
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconD4Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'd4'];
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
        <path fill="currentColor" d="M235.11 196.24l17.074-29.463v29.463H235.11zM486.95 456H25.05L256 56zm-358.631-54.833l41.212-22.943-6.702-12.075-59.699 33.303 5.458 9.805a11.278 11.278 0 0 1 2.645-.881 11.822 11.822 0 0 1 5.566-.085 12.534 12.534 0 0 1 6.34 4.01 59.3 59.3 0 0 1 5.071 7.353l7.994-4.456zM273.074 196.24h-7.74v-42.734H250.24l-25.14 41.515v11.749h27.072v14.72h13.162v-14.72h7.74v-10.518zm131.619 212.45q6.822-11.93.616-21.735-3.26-5.132-10.675-9.745l-6.484 11.338a22.677 22.677 0 0 1 6.533 5.483q2.873 4.19-.17 9.515a8.453 8.453 0 0 1-5.916 4.552 10.868 10.868 0 0 1-7.463-1.497 14.08 14.08 0 0 1-6.436-8.513 99.728 99.728 0 0 1-2.294-15.167q-1.316-13.089-5.82-18.982a32.144 32.144 0 0 0-10.095-9.418l-23.28 40.705 10.275 5.88 14.828-25.913a15.203 15.203 0 0 1 1.679 4.577q.47 2.415 1.062 8.585l.64 6.57a45.149 45.149 0 0 0 2.717 12.823 21.518 21.518 0 0 0 9.455 10.638q8.598 4.915 17.002 2.33 8.404-2.584 13.814-12.014z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconD4Icon);
    