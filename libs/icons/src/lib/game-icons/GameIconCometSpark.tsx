
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCometSparkIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'comet-spark'];
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
        <path fill="currentColor" d="M20.916 15.648c147.945 202 202.556 312.645-3.146 252.438 201.76 82.926 225.515 176.51 49.13 180.76 190.922 51.156 315.057 60.258 377.16 10.43 67.76-54.368 62.6-177.648 13.31-361.6-.002 179.943-88.34 149.935-171.18-39.96 60.246 191.39-81.408 116.353-265.274-42.068zM457.37 97.676v-.008.008zm-79.792 150.84c5.457.054 10.994.79 16.508 2.267 3.763 1.01 7.352 2.34 10.77 3.924-.053-.058-.102-.12-.155-.178 51.248 21.08 79.986 77.264 65.253 132.25-16.008 59.742-77.174 95.054-136.914 79.046-59.29-15.886-94.507-76.24-79.395-135.547 1.144 7.843 3.71 15.465 7.808 22.564 15.038 26.045 46.48 37.745 78.735 32.334 8.387-.382 17.33-2.932 25.75-7.793 22.18-12.807 32.317-36.774 22.642-53.53-9.676-16.76-35.5-19.966-57.682-7.16-7.3 4.214-13.283 9.64-17.697 15.618-3.05-11-3.31-22.928-.14-34.75 7.978-29.778 35.053-49.34 64.518-49.047z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCometSparkIcon);
    