
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRupeeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rupee'];
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
        <path fill="currentColor" d="M247 25.076L107.053 130.004l64.996 32.486L247 106.297v-81.22zm18 0v81.22l74.95 56.194 65-32.488L265 25.076zm9.277 22.307l36.63 26.437c-25.125-4.207-29.74 9.2-37.348 28.8l.717-55.237zm-37.79 3.926l-.274 33.362c-22.052 1.182-56.787 14.423-107.893 43.99L236.488 51.31zM256 122.044l-74 55.48v156.948l74 55.482 74-55.482V177.527l-74-55.482zm4.215 17.67c-37.503 33.84-60.642 164.833-63.65 199.094l-.35-151.095 64-48zM99 146.1v219.8l65-32.488V178.588L99 146.1zm314 0l-65 32.488v154.824l65 32.488V146.1zm-301.352 23.31l40.473 20.83c-46.28 38.757-30.79 122.693-41.876 162.572l1.404-183.402zm60.4 180.1l-64.995 32.486L247 486.924v-81.22l-74.95-56.194zm167.903 0L265 405.703v81.22l139.947-104.927-64.996-32.486zm-169.415 17.172c-19.594 16.282-16.745 24.365 4.477 54.412l-44.246-38.018 39.77-16.394z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRupeeIcon);
    