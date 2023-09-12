
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconReedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'reed'];
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
        <path fill="currentColor" d="M350.8 22.28c-2.3 13.74-4.6 27.67-6.8 41.68h.6c1.3-.1 2.7 0 4.1.1 4.5.4 8.9 1.78 12.9 3.97 2.3-14.37 4.6-28.66 7-42.75zm-171.6.32l-17.8 2.52c1.2 8.41 2.4 16.86 3.6 25.34 3.9-1.63 8-2.62 12.2-2.89 1.8-.12 3.7-.1 5.5.1-1.2-8.37-2.3-16.73-3.5-25.03zm.4 42.89h-1.2c-12.7.8-26.1 11.9-23.7 40.61l10.2 127.7c2.3 28.6 17.7 38.2 30.4 37.4 12.7-.8 26.1-12 23.8-40.5l-10.3-127.8c-2.2-27.65-16.8-37.55-29.2-37.41zm165.6 16.4c-4.5.13-9.2 2.17-13.6 7.1-5.1 5.65-9.6 15.31-10.9 29.71l-11.3 127.5c-1.3 14.5 1.4 24.8 5.4 31.2 4 6.5 9 9.3 14 9.7 4.9.5 10.4-1.4 15.4-7 5.1-5.7 9.6-15.3 10.9-29.8l11.4-127.5c1.3-14.4-1.4-24.71-5.4-31.17-4-6.46-9-9.23-14-9.68-.6-.1-1.3-.1-1.9-.1zM25.99 223.3C78.79 299.9 126.7 397.8 125 489.7h35.3c3.1-20.8 7.5-39.3 13-56.2-10.9-35.5-28.2-73.7-49.5-108.1-28.14-45.5-63.44-83.9-97.81-102.1zM419.3 270c-1.3 0-3.7.7-6.8 3.1-3.6 2.7-7.8 7.3-11.9 13-3.3 4.7-6.6 10.2-9.6 16 5-2.1 10-3.7 15-4.4 13.3-2 26.3 1 37.8 8.1 16.5 10.2 30.1 28.1 42.2 52.2-.3-15.6-3.4-31.3-9.5-45-10.4-23.3-28.3-40.3-56.7-43zm-210.9 16.3c-3.8 1.6-7.9 2.5-12 2.8-2 .1-4 .1-5.9-.1 1.8 33.1 2.7 65.9 2.3 97.9 5.5-10.6 11.5-21 18.1-31.4-.3-22.9-1.2-46-2.5-69.2zm104.5 14.1c-5.5 56.5-9.3 112.6-10.6 166.7 5.9-20.8 12.7-41.5 20.6-62.1 1.8-32.8 4.5-66.2 7.7-99.8-1.2 0-2.3 0-3.4-.1-5-.5-9.9-2.1-14.3-4.7zm88.3 16.9c-7 2.3-14.7 6.4-23 12.9-30.1 52.2-49 105.1-63.4 159.5h80.5c-12.6-57.3-5-115 5.9-172.4zm-146.7 5.6c-38.5 54.6-64.6 95.2-75.8 166H237c-13-31.1-12.1-62.8-4.3-96.6 5-21.6 12.9-44.6 21.8-69.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconReedIcon);
    