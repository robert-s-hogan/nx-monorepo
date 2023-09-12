
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoubleQuaverIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'double-quaver'];
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
        <path fill="currentColor" d="M451.125 25.625l-12.156 3.813-262.064 82.624-6.53 2.063V397.06c-1.257-.497-2.526-.96-3.845-1.375-6.973-2.185-14.84-3.302-23.374-3.343-8.533-.042-17.724 1.01-27.312 3.125-19.176 4.228-36.465 12.1-49.5 21.936-13.035 9.836-22.75 21.828-22.75 36.125 0 7.15 3.008 13.937 7.718 18.845 4.71 4.908 10.87 8.22 17.844 10.406 13.95 4.373 31.543 4.45 50.72.22 19.175-4.23 36.464-12.102 49.5-21.938 13.034-9.835 22.718-21.858 22.718-36.156 0-4.324-1.12-8.504-3.03-12.22V225.22l243.374-76.69v142.407c-1.265-.5-2.547-.958-3.875-1.375-6.975-2.185-14.842-3.302-23.375-3.343-8.534-.043-17.725.978-27.313 3.092-19.176 4.23-36.465 12.103-49.5 21.938-13.035 9.835-22.72 21.86-22.72 36.156 0 7.15 2.978 13.936 7.69 18.844 4.71 4.908 10.868 8.19 17.842 10.375 13.95 4.372 31.543 4.48 50.72.25 19.175-4.23 36.464-12.102 49.5-21.938 13.034-9.835 22.718-21.858 22.718-36.156 0-4.302-1.105-8.476-3-12.186V25.624zm-18.688 25.5v29.188L189.063 157v-29.188l243.375-76.687zm0 48.78v29l-243.375 76.72v-29l243.375-76.72z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoubleQuaverIcon);
    