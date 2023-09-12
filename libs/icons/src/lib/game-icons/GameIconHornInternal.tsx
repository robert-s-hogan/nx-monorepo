
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHornInternalIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'horn-internal'];
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
        <path fill="currentColor" d="M246.813 22.47c-8.663-.028-17.42.734-26.188 2.28-.03.005-.064-.005-.094 0-2.45.224-4.96.54-7.5.938C85.51 45.672 13.217 187.65 46.72 312.688 80.22 437.725 209.4 512.317 334.436 478.813c79.17-21.214 130.815-52.148 149.782-94.532-94.212 57.032-205.346 19.985-223.283-36.717-60.108-3.05-114.777-39.585-139.875-95.688 34.093 53.034 99.78 80.55 163.875 63.375 79.34-21.26 126.572-103.035 105.313-182.375-17.273-64.464-74.524-107.727-137.938-110.28-1.83-.075-3.66-.12-5.5-.126zm17.75 19.905c50.192 7.036 93.66 43.192 107.625 95.313 18.644 69.584-22.51 140.886-92.094 159.53-44.968 12.05-90.625-.88-122.344-30.312 26.946-4.947 53.78 2.713 73.75 19.22-19.866-27.787-54.214-42.64-89.125-36.25-9.786-12.992-17.307-28.052-21.78-44.75-.462-1.72-.863-3.438-1.25-5.157 18.06-5.557 37.843-6.52 57.28-1.314 33.74 9.04 58.603 34.25 69.938 64.688-4.076-41.848-32.763-79.42-75.75-90.938-18.48-4.952-37.42-4.297-54.688.5-.265-20.476 4.33-40.36 12.97-58.22 40.108-10.7 84.804-.724 116.06 30.533 28.44 28.437 39.13 67.968 32.907 104.843 20.027-44.072 12.45-97.646-23.78-133.875-27.967-27.967-66.544-39.424-102.907-33.938 7.713-8.227 16.546-15.5 26.344-21.563 64.076-13.72 128.855 24.893 146 88.876 10.784 40.253.07 81.35-24.626 111.218 40.804-29.172 61.648-81.278 47.906-132.56-11.38-42.47-43.437-73.673-82.438-85.845z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHornInternalIcon);
    