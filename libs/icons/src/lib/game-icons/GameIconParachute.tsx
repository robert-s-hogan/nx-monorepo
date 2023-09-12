
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconParachuteIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'parachute'];
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
        <path fill="currentColor" d="M258.406 18.438c-.594.005-1.188.016-1.78.03-4.582.54-10.147 4.075-16.407 12.626-6.845 9.348-13.726 24.012-19.595 42.562-11.095 35.068-18.797 84.06-20.875 139.156h115.97c-2.074-55.1-9.715-104.116-20.75-139.187-5.84-18.552-12.682-33.186-19.5-42.53-6.38-8.744-12.024-12.244-16.658-12.657h-.03c-.13-.012-.25.006-.376 0zm34.47 4.937c7.703 11.57 14.235 26.638 19.905 44.656 11.827 37.58 19.622 88.07 21.69 144.782h82.186c-5.11-53.913-23.635-101.762-50.53-136.25-20.543-26.34-45.61-44.862-73.25-53.187zm-70.938 1.313c-26.084 8.878-49.815 26.88-69.438 51.906-27.044 34.492-45.688 82.318-50.813 136.22H181c2.07-56.723 9.923-107.235 21.813-144.814 5.487-17.345 11.767-31.93 19.125-43.313zm-55.22 10.437C89.632 65.053 33.103 132.255 21.814 212.813H82.72c5.16-57.906 25.177-109.596 55.093-147.75 8.792-11.214 18.473-21.27 28.906-29.938zM357 39.405c8.533 7.657 16.522 16.26 23.875 25.69 29.76 38.16 49.604 89.83 54.75 147.718h55.188C480.065 135.882 428.495 71.15 357 39.405zM28.844 231.5L195.47 414.094c-1.38 5.163-2.126 10.57-2.126 16.156 0 34.666 28.303 62.97 62.97 62.97 34.664 0 62.967-28.304 62.967-62.97 0-5.585-.746-10.993-2.124-16.156L483.75 231.5h-25.28L308.78 395.53c-1.59-2.394-3.353-4.66-5.25-6.81l95.345-157.22H377.03l-87.967 145.03c-3.245-1.987-6.688-3.68-10.282-5.06L315.5 231.5h-19.313l-35.656 135.938c-1.4-.094-2.794-.157-4.217-.157-1.424 0-2.82.064-4.22.158L216.44 231.5h-19.344l36.75 139.97c-3.594 1.38-7.037 3.073-10.28 5.06l-87.97-145.03H113.72l95.374 157.22c-1.896 2.15-3.658 4.416-5.25 6.81L54.156 231.5H28.844zm218.812 155.313v33.5h-34.5c3.852-16.97 17.342-30.143 34.5-33.5zm18.688.312c16.494 3.782 29.378 16.678 33.125 33.188h-33.126v-33.188zM212.906 439h34.75v34.688c-17.56-3.437-31.276-17.14-34.75-34.688zm53.438 0h33.375c-3.383 17.08-16.484 30.5-33.376 34.375V439z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconParachuteIcon);
    