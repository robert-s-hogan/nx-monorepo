
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGoldScarabIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'gold-scarab'];
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
        <path fill="currentColor" d="M211.375 16.85c-23.61 23.413-25.858 60.333-6.746 86.322 3.767-5.196 8.21-9.834 13.184-13.78-11.825-18.498-9.592-43.096 6.72-59.273l-13.16-13.27zm94.705 0l-13.158 13.27c16.353 16.215 18.555 40.89 6.633 59.403 4.947 3.986 9.356 8.665 13.08 13.907 19.317-26.003 17.134-63.09-6.555-86.58zm-47.365 76.822c-26.81.002-49.127 22.936-49.127 51.996 0 .572.277 2.22.488 4.746l.045.53c13.05 5.81 29.927 9.52 47.06 9.88 17.555.37 35.25-2.72 49.56-9.28l.096-1.136c.213-2.527.488-4.144.488-4.74 0-29.156-21.795-51.994-48.605-51.996h-.005zm-125.97 12.11C89.104 131.18 59.02 176.25 59.02 257.987v9.344h76.572c2.31-6.463 5.042-12.702 8.158-18.69H77.904c2.018-70.906 26.967-105.015 64.24-126.704l-9.398-16.153zm252.18 0l-9.4 16.154c37.274 21.69 62.224 55.798 64.243 126.705h-66.082c3.115 5.988 5.848 12.227 8.16 18.69h76.808v-9.344c0-81.736-30.085-126.807-73.728-152.203zm-190.302 58.35c-22.655 11.32-35.68 27.848-35.68 44.534 0 8.485 2.916 16.418 8.948 24.04l3.665 4.632c25.47 13.425 56.948 21.68 88.804 27.752 29.126-3.376 57.303-15.203 86-28.36l3.185-4.025c6.033-7.622 8.945-15.553 8.945-24.04 0-16.67-13.054-33.065-35.728-44.358-19.17 11.306-42.908 15.686-65.975 15.2-22.74-.477-44.964-5.612-62.164-15.374zm160.445 89.173c-27.678 12.757-56.164 25.115-87.045 29.67v161.83c57.948-5.264 104.043-59.22 104.043-125.618 0-24.385-6.208-46.76-16.998-65.882zm-192.843.252c-10.702 19.068-16.858 41.352-16.858 65.63 0 66.37 46.056 120.307 103.97 125.61V282.002c-30.427-6.124-60.91-14.45-87.112-28.445zM35.568 292.09v9.344c0 55.27 14.616 114.355 47.99 159.775l15.06-11.067c-28.5-38.785-42.464-90.177-44.046-139.366h72.352c.337-6.353 1.033-12.594 2.105-18.687H35.567zm352.836 0c1.073 6.093 1.77 12.334 2.106 18.687h71.33c-1.582 49.19-15.546 100.58-44.045 139.366l15.06 11.066c33.373-45.42 47.99-104.505 47.99-159.776v-9.344h-92.44zM87.03 337.988v9.344c0 34.454 16.72 67.14 40.255 92.555 23.536 25.414 54.022 43.91 84.088 49.18l3.225-18.41c-24.705-4.328-52.526-20.71-73.602-43.47-18.76-20.257-32.003-45.286-34.703-70.51h24.904c-1.495-6.09-2.638-12.327-3.398-18.69H87.03zm302.605 0c-.76 6.362-1.904 12.6-3.4 18.688h25.144c-2.7 25.225-15.946 50.254-34.706 70.512-21.076 22.758-48.897 39.14-73.602 43.47l3.227 18.408c30.065-5.268 60.55-23.765 84.087-49.18 23.536-25.414 40.254-58.1 40.254-92.554v-9.344h-41.005z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGoldScarabIcon);
    