
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBankIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bank'];
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
        <path fill="currentColor" d="M256 25.6L52 134.4h170v-56h68v55.094c2.53.258 5.04.567 7.54.906H460L256 25.6zm-16 70.8v57.38l-6.248 2.005c-14.24 4.573-26.103 11.94-36.07 22.322-17.686 18.425-26.735 43.597-26.735 77.368 0 33.38 8.89 58.507 26.282 77.144 10.118 10.787 22.11 18.3 36.477 22.83l6.293 1.984V420.4h32v-59.85l8.373-.587c9.6-.67 18.958-2.145 28.092-4.45 11.206-2.827 22.043-6.956 32.588-12.26V252.11h-61.035v19.974h30.955v49.576l-5.403 2.356c-4.373 1.906-9.156 3.264-14.322 4.152l-.08.014-.08.013c-5.003.768-10.33 1.133-15.988 1.133-21.365 0-39.558-7.483-51.834-22.228-11.08-13.308-17.89-27.01-17.89-51.625 0-24.844 7.066-38.687 18.532-51.912h.002c12.767-14.722 31.483-22.09 53.56-22.09 11.836 0 23.63 1.875 35.264 5.574 7.058 2.227 14.08 5.21 21.075 8.764v-32.35a138.957 138.957 0 0 0-26.992-9.155h-.006l-.008-.002c-8.43-1.94-17.185-3.16-26.287-3.65l-8.517-.458V96.4h-32zm-192 54v18h25v206H48v18h96v-18h-25v-206h25v-18H48zm320 0v18h25v206h-25v18h96v-18h-25v-206h25v-18h-96zm-327 258v30h181v-30H41zm249 0v30h181v-30H290zm-265 48v30h462v-30H25z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBankIcon);
    