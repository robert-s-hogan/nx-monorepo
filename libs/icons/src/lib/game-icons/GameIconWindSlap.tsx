
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindSlapIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wind-slap'];
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
        <path fill="currentColor" d="M164.672 15.316c-4.24-.02-8.52-.008-12.848.032 356.973 34.267 149.668 296.606-133.02 225.675v29.272c208.715 52.028 406.9-83.077 335.225-186.316 74.252 54.5 10.927 228.767-217.44 261.272 80.052-17.795 151.75-58.013 188.793-112.78v-.003c-76.777 75.27-199.896 99.73-306.61 83.514v38.547l.03.003v29.983c103.604 17.95 230.47-10.83 317.05-98.192-64.335 91.95-198.984 149.52-317.05 142.64v62.942C398.408 491.783 590.073 234.433 449.346 98c90.898 155.644-119.865 338.862-308.12 339.258C392.92 399.278 523.24 116.29 322.532 33.352c-43.685-11.26-96.104-17.76-157.86-18.036z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindSlapIcon);
    