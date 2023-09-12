
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHighFiveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'high-five'];
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
        <path fill="currentColor" d="M126.254 16.098l23.18 134.29-131.55-20.595 94.78 110.596L28.2 318.08l108.71 24.42-39.797 88.447 71.364-19.014c7.904-20.18 13.607-40.676 16.42-60.008l-.05-.03h-.003c-1.802-1.04-2.872-2.744-4.06-6.74-1.19-3.997-1.868-9.5-3.942-15.412-7.033-20.052-17.384-51.137-48.155-81.834 3.305-6.314 6.61-9.692 9.186-11.074 3.247-1.742 6.19-1.775 11.293.422 9.35 4.025 22.63 17.193 35.174 33.816 3.368 5.048 6.267 10.15 8.683 15.31l16.918-7.927c-3.936-8.406-8.884-16.523-14.74-24.376l9.32-23.635-.418-90.175c2.948-2.112 7.593-3.54 12.92-3.43 5.064.107 10.178 1.73 13.52 3.673l-.794 88.818c7.553 3.465 15.125 6.91 22.62 10.44l37.04-106.385c5.665.22 10.842.688 15.03 2.063 4.6 1.51 8.553 3.855 12.53 8.248L275.595 251.41c6.797 3.69 13.394 7.6 19.693 11.84l66.916-91.31c3.036.616 7.123 2.416 10.7 5.632 4.143 3.726 7.06 8.725 8.054 13.123l-64.625 89.3c5.508 5.266 10.58 11.007 15.107 17.357l55.83-41.67c6.377 2.98 12.275 10.69 12.25 18.377-9.137 6.16-54.367 37.145-81.29 65.783-8.748 9.303-24.697 24.49-33.496 34.43v.003h-.002c-2.977 3.366-7 6.718-11.402 9.39l-18.947 101.192 39.596-62 63.627 56.252 4.73-121.537 134.604 11.57-76.7-95.417 64.414-92.664-90.34-12.062L435.23 51.324l-122.185 69.744-31.375-103.822-53.75 96.108-101.668-97.256z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHighFiveIcon);
    