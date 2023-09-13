
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKiwiBirdIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'kiwi-bird'];
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
        <path fill="currentColor" d="M251.615 74.23c-77.058.06-152.457 51.774-181.7 89.022C1.473 250.43-36.964 427.192 244.208 381.209c82.987-13.571 135.481-92.932 146.56-163.43 39.376 13.812 99.225-2.416 100.503-38.236 1.713-48.028-82.63-99.395-130.756-60.74-33.239-32.311-71.268-44.602-108.9-44.573zm189.384 101.54a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm27.278 56.154c-8.908 4.545-18.736 7.692-29.059 9.242 21.96 44.054 29.427 92.59 45.61 138.432 2.761-32.499 2.588-94.97-16.551-147.674zM238.494 401.426a239.162 239.162 0 0 1-18.141 3.78l21.887 45.798c-18.37-.055-38.017.352-58.946 1.387l-11.842-44.215c-6.45-.31-12.826-.9-19.105-1.764l12.598 47.041c-7.103.46-14.296.969-21.664 1.578l1.484 17.938c76.27-6.31 137.96-4.22 183.404-.008l1.66-17.922c-19.613-1.818-42.188-3.236-67.525-3.793z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKiwiBirdIcon);
    