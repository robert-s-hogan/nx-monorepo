
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconApothecaryIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'apothecary'];
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
        <path fill="currentColor" d="M50.396 27.148s3.885 57.047 20.793 101.735c-26.238 7.921-51.181 22.26-51.181 22.26S44.648 186.767 71 204.666c20.678-5.465 41.356-9.71 61.88-12.967.229-.628 36.217-2.59 61.39-11.234 8.453-2.857-93.338-101.965-89.036-106.477 4.343-4.57 116.758 86.083 119.309 81.037 13.786-27.038 2.59-60.111-29.475-90.462C157.101 28.538 50.396 27.148 50.396 27.148zm388.588 6.055c-15.462 0-29.508 6.699-38.996 17.29-15.304 17.082-12 50.224-20.832 65.575-11.995 18.718-75.135 67.748-75.135 67.748s42.995 1.79 79.211 17.403c8.873-17.346 11.385-25.076 33.168-43.012 9.94-8.206 26.968-15.866 41.663-22.678 20.405-9.46 33.628-26.988 33.93-49.336 0-29.246-23.763-52.99-53.009-52.99zM236.697 206.498c-67.057-.324-136.223 11.41-205.19 36.172v91.91c0 83.018 67.254 150.272 150.272 150.272h97.186c82.942 0 150.27-67.253 150.27-150.272v-91.91c-60.532-23.468-125.48-35.848-192.538-36.172z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconApothecaryIcon);
    