
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUziIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'uzi'];
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
        <path fill="currentColor" d="M400.29 24v32h10v35.666h24.626c.193 18.416-.062 35.84 0 52.85H410.29V152h-45.936l5.986-11.975L376.854 127H70.62v17.355L88.06 152H26.29V56h16V40l16-16h32v32h224c8.472-7.114 5.74-20.712 6-32h10v32h22c10.133-11.125 18.67-31.843 32-32zM336 81H112v18h224zm149.533 23l.176 27.523h-32.706V104zM347.73 145l-7 14H140.022l-35-14zm3.79 32c-.076 2.743-.207 5.814-.448 9.104-.786 10.733-2.02 23.154-7.87 33-6.42 10.813-17.17 17.783-28.052 21.43-14.33 4.8-31.26 6.012-46.304-.22-7.23-2.994-13.278-8.29-18.555-13.86V344h-120c2.114-46.595 6.846-96 32.833-144-6.875-7.313-12.83-15.085-18.502-23h105.67v21.45c1.643 2.234 4.083 5.428 7.6 9.517 5.91 6.875 14.058 14.15 17.844 15.72 9.593 3.972 22.743 3.45 33.698-.22 7.47-2.503 14.832-7.723 18.295-13.553 2.368-3.988 4.684-15.443 5.394-25.127.22-2.99.272-5.405.323-7.787zm-59.25 0c-8.867 15.22.87 22.81 13.966 33.29-26.754-6.708-34.985-15.372-30.556-33.29zM230 231h-48v18h48zm0 40h-64v18h64zm0 40h-73.482v18H230zm20.29 51v126h-64V362z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUziIcon);
    