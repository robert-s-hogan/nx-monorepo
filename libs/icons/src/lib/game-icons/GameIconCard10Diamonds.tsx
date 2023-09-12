
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard10DiamondsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-10-diamonds'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.884 3.717l47.393 58.27-47.393 58.286-47.375-58.287 47.375-58.27zm167.465 136.818c15.453 0 28.333 6.023 38.635 18.069 12.759 14.819 19.139 37.286 19.139 67.4 0 27.974-5.548 49.292-16.643 63.953-11.095 14.582-24.489 21.873-40.18 21.873-15.136 0-27.776-6.142-37.92-18.426-12.68-15.453-19.02-37.762-19.02-66.925 0-27.737 5.984-49.807 17.95-66.211 9.59-13.156 22.269-19.733 38.04-19.733zm-126.36 3.09h5.468v148.354c0 2.218.792 3.922 2.377 5.11 2.298 1.665 5.112 2.497 8.44 2.497h23.061v8.916h-85.468v-8.916h19.732c4.121 0 7.171-.952 9.153-2.854 1.98-1.98 2.972-4.596 2.972-7.845V212.79c0-2.298-.912-4.24-2.734-5.824-1.823-1.585-4.161-2.38-7.014-2.38h-26.389v-8.2c12.363-1.585 22.388-3.686 30.075-6.301 7.687-2.694 14.463-6.182 20.328-10.461zm127.075 5.469c-10.46 0-18.624 5.031-24.488 15.095-5.865 9.986-8.797 30.749-8.797 62.29 0 30.827 3.012 51.393 9.035 61.695 6.102 10.302 14.263 15.453 24.486 15.453 10.303 0 18.228-4.754 23.776-14.264 6.577-11.332 9.865-32.017 9.865-62.052 0-31.066-3.09-51.867-9.272-62.407-6.18-10.54-14.382-15.81-24.605-15.81zm51.162 167.43l47.393 58.269-47.393 58.287-47.375-58.287 47.375-58.27z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard10DiamondsIcon);
    