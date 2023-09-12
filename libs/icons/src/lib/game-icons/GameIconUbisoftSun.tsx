
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUbisoftSunIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ubisoft-sun'];
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
        <path fill="currentColor" d="M194.53 19.656L181.47 62.25l27.624 6.563 19.5-17.5-34.063-31.657zm125.94.063l-32.626 30.343 20.656 19.5 25.625-5.407L320.47 19.72zm-64.94 59.405c-14.046.215-28.287 2.138-42.468 5.938-93.08 24.94-148.472 120.887-123.53 213.968 7.604 28.38 21.823 53.248 40.53 73.408.176.252.355.498.532.75l.094-.063c42.67 45.493 108.4 66.657 172.78 49.406C396.55 397.59 451.942 301.676 427 208.595 406.735 132.964 339.604 82.24 265.22 79.25c-3.22-.13-6.447-.175-9.69-.125zM85.47 82.563L95.437 126l27.218-8.156 8.125-24.875-45.31-10.407zm344.03.187l-43.47 9.97 8.158 27.218 24.875 8.124L429.5 82.75zm-170.72 15c1.93.004 3.865.05 5.783.125 66.473 2.61 126.234 47.86 144.375 115.563 22.327 83.325-26.957 168.735-110.282 191.062-57.286 15.35-115.544-3.167-153.625-43.313l-.03-.03c-7.722-11.214-13.966-23.47-18.406-36.313-24.473-70.782 10.592-153.698 82.937-178.5 60.946-20.893 132.18 9.025 153.22 70.75 17.63 51.725-8.105 112.282-60.938 130.125-44.027 14.868-95.41-6.862-110.343-51.376-12.367-36.86 6.033-79.954 43.624-92.438 30.914-10.267 66.952 5.034 77.22 36.188 8.03 24.378-3.386 52.733-27.127 62.437 10.773-10.378 15.78-26.178 11.657-41.56-5.275-19.686-23.813-32.462-43.438-31.314-2.803.164-5.657.59-8.47 1.344-22.494 6.028-35.964 29.41-29.936 51.906.695 2.594 1.623 5.068 2.75 7.406.022.052.04.106.063.157.07.145.145.29.218.436 11.972 26.708 41.876 39.625 69.876 30.5 36.25-11.814 53.642-52.3 42.156-87.156-13.713-41.614-60.582-61.476-100.875-48.094-47.956 15.927-70.97 69.85-55.437 116.156 18.427 54.928 80.65 81.133 134.063 63.094 63.153-21.328 93.476-92.667 72.625-153.844-19.966-58.576-77.885-92.29-136.625-89.937-13.556.543-27.156 3.01-40.344 7.53-56.145 19.25-92.422 68.7-101.22 123.595.602-68.348 46.356-130.556 115.656-149.125 13.67-3.663 27.38-5.402 40.875-5.375zM66.876 177.938l-44.438 13.625 30.344 32.656 19.5-20.657-5.405-25.625zm382.906.812l-6.56 27.625 17.5 19.5 31.686-34.063-42.625-13.062zm-193.155 69c10.227.247 19.356 7.11 22.156 17.563 3.415 12.74-3.98 25.586-16.717 29-11.147 2.986-22.387-2.31-27.313-12.22-.466-1.12-.896-2.274-1.28-3.468l-.126.03c-.114-.356-.215-.726-.313-1.092-3.412-12.74 4.013-25.587 16.75-29 1.594-.427 3.205-.683 4.782-.782.69-.042 1.38-.046 2.063-.03zM54.03 283.47L22.376 317.5l42.594 13.094 6.56-27.656-17.5-19.47zm407.94 1.655l-19.5 20.656 5.405 25.626 44.438-13.656-30.344-32.625zM95.686 381.25L85.28 426.594l43.44-9.97-8.157-27.218-24.876-8.156zm323.625 2.094l-27.218 8.125L384 416.374l45.313 10.406-10-43.436zm-213.03 56.406l-25.626 5.406 13.625 44.438 32.657-30.344-20.656-19.5zm99.374.75l-19.5 17.5 34.063 31.688 13.092-42.625-27.656-6.563z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUbisoftSunIcon);
    