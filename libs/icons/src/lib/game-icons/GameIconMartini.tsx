
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMartiniIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'martini'];
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
        <path fill="currentColor" d="M382.313 17.156L347 80.594H58.937l13.657 15.53 172.03 195.5v155.063l-118.343 35.438v13.22h255.376v-13.22l-118.344-35.438V291.595l172-195.47 13.657-15.53h-80.595l30.28-54.344-16.342-9.094zM100.25 99.28h236.344l-12.25 21.97c-5.352-2.042-11.14-3.188-17.188-3.188-17.4 0-32.74 9.283-41.344 23.126H137.125L100.25 99.28zm257.72 0h49.686l-36.875 41.907h-22.31c-2.3-3.7-5.08-7.073-8.25-10.03l17.75-31.876zm-50.814 37.47c16.652 0 29.938 13.33 29.938 30s-13.286 29.97-29.938 29.97-29.97-13.3-29.97-29.97c.002-1.01.062-2.017.158-3 2.26 3.716 6.303 6.22 10.97 6.22 7.112 0 12.905-5.79 12.905-12.907 0-7.118-5.794-12.875-12.908-12.875-.35 0-.688.035-1.03.062 5.276-4.67 12.213-7.5 19.874-7.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMartiniIcon);
    