
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPushIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'push'];
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
        <path fill="currentColor" d="M224 27.027l14.037 110.54 14.807-103.032L224 27.027zm112.71 21.127l-61.58 92.37 88.4-70.518-26.82-21.852zM125.15 69.012V98.81l77.475 41.715-77.475-71.513zM319 143.088C364.826 255.36 348.206 384 319 493h174V143.088H319zm-78.598 11.463c-.567-.006-1.14 0-1.718.02-12.517.413-26.47 6.774-37.893 17.274-15.774 14.527-23.843 34.25-20.167 49.3-45 12.35-76.594 62.683-81.64 102.18-3.968 37.166 15.322 61.415.558 85.432L40.77 447.54l-20.458 9.997L55.33 496.19h15.686l-17.27-32.17 72.906-38.573c14.698-8.6 16.065-23.74 19.28-41.092 16.147 11.876 33.577 23.202 47.56 32.48-6.36 27.685-38.544 52.854-58.512 79.356h77.827l-2.905-5.21s-39.03-6.813-43.77-7.498c-.15.01-.29.005-.407-.02-.327-.076-.082-.05.408.02 8.143-.477 65.126-51.946 63.53-64.54-13.498-23.115-34.03-44.835-54.974-66.276 1.845-25.475 2.3-52.734 40.75-75.596l110.044-4.566c-.94-22.375-4.53-59.816-10.35-66.018-9.702 7.54-10.872 30.843-11.628 48.637l-79.463-2.283c-8.445-.63-14.943-7.846-21.15-12.822 13.6 1.556 30.02-4.91 43.218-17.024 20.673-19.002 27.286-45.857 14.77-59.982-4.795-5.412-11.97-8.365-20.478-8.46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPushIcon);
    