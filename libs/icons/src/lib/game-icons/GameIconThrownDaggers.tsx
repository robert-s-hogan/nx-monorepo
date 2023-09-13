
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconThrownDaggersIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'thrown-daggers'];
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
        <path fill="currentColor" d="M167 18.813c-20.39-.002-36.813 16.92-36.813 37.312 0 20.39 16.423 36.813 36.813 36.813 12.06 0 22.896-5.747 29.75-14.657l73.094 19.595L305.5 145.75l186.844-.094-161.75-93.5-53.906 23.25L204.344 56c-.07-20.335-16.996-37.19-37.344-37.188zm0 18.656c10.29 0 18.656 8.365 18.656 18.655 0 10.288-8.366 18.156-18.656 18.156s-18.125-7.867-18.125-18.155c0-10.29 7.835-18.658 18.125-18.656zM64.062 69.874c-3.547.035-7.133.54-10.718 1.5C30.4 77.523 16.79 101.088 22.937 124.03c4.89 18.253 20.803 30.59 38.657 31.782l22.78 84.907-27.56 63.874 109.03 188.625.125-217.876-54.876-40.844-22.97-85.72c15.04-9.912 22.795-28.642 17.876-47-5.187-19.357-22.783-32.096-41.938-31.905zm.25 19.22c10.707-.108 20.57 6.99 23.47 17.81 3.435 12.825-4.177 26.003-17 29.44-12.825 3.435-26.002-4.177-29.438-17-3.436-12.825 4.144-26.003 16.968-29.44 2.004-.536 4.018-.79 6-.81zm112.438 44.28c-12.127.323-24.084 5.554-32.625 15.47-16.078 18.662-13.976 46.827 4.688 62.905 14.85 12.794 35.712 14.094 51.718 4.688l69.032 59.5 13.688 70.843 203.594 98.033L359.75 257.969 288.844 255l-69.656-60.063c7.095-17.28 2.774-37.888-12.157-50.75-8.747-7.536-19.58-11.097-30.28-10.812zm.72 19.813c5.98-.16 12.015 1.818 16.905 6.03 10.432 8.988 11.612 24.756 2.625 35.188-8.987 10.432-24.724 11.58-35.156 2.594-10.432-8.987-11.612-24.724-2.625-35.156 4.773-5.542 11.47-8.476 18.25-8.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconThrownDaggersIcon);
    