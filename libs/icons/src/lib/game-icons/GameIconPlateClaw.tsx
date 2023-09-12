
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPlateClawIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'plate-claw'];
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
        <path fill="currentColor" d="M156.885 20.168c-49.84-.183-96.78 11.14-135.487 33.45 32.59-5.132 60.867-.755 84.797 10.5 66.84-8.027 148.188 3.507 206.13 34.986 135.095 73.394 169.86 229.22 79.536 310.966-2.51 29.034-9.768 56.672-21.805 81.56C551.55 410.26 522.668 170.688 329.76 65.884h-.002c-56.176-30.52-116.387-45.507-172.873-45.715zm7.58 63.268c-45.246.408-92.216 13.758-136.944 44.78 127.977-41.398 220.853 159.12 147.175 232.436 85.84-10.404 105.582-99.816 77.674-167.613 52.858 72.735 57.108 157.122 36.792 198.565 31.97-17.52 72.568-95.09 53.147-166.445 34.152 45.17 45.81 99.284 35.624 165.278C492.94 279.394 341.967 81.834 164.464 83.435zm112.738 208.128c-8.726 51.223-52.116 93.207-108.69 94.186-9.668 14.508-21.324 27.085-34.986 36.97 68.222 6.58 123.896-34.27 145.15-90.148.674-13.392.202-27.13-1.474-41.008zm81.014 18.26c-2.654 53.137-34.816 99.39-84.842 121.4-8.354 23.26-20.17 44.35-35.307 62.16 47.415-8.956 86.346-33.35 112.532-66.802 13.303-35.105 15.824-75.73 7.617-116.758z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPlateClawIcon);
    