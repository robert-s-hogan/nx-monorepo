
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHalfBodyCrawlingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'half-body-crawling'];
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
        <path fill="currentColor" d="M384.932 45.57c-3.286.244-7.88 2.403-15.094 14.546-5.056 15.957-.322 25.086 5.06 38.496l2.307 5.744-55.96 51.87c4.376 8.594 7.407 18.226 8.78 28.44l80.254-80.214c-4.114-10.653-8.672-18.525-12.147-27.168-3.263-8.116-4.76-17.495-2.795-28.32-4.347-2.066-8.086-3.564-10.406-3.393zm-119.604 91.15c-25.092.105-47.134 26.142-46.957 60.414.178 34.27 22.487 60.12 47.58 60.013 25.092-.105 47.133-26.14 46.956-60.412-.177-34.272-22.485-60.12-47.578-60.015zm190.053 84.296c-5.97-.085-11.825.86-16.946 2.87-10.125 15.2-8.244 19.567-11.067 36.418l-.71 4.25-3.758 2.11c-21.674 12.172-42.448 22.542-62.93 39.315l-3.632 2.974-4.516-1.275s-12.793-3.613-25.804-7.423c-6.506-1.905-13.063-3.858-18.168-5.455-2.553-.8-4.73-1.505-6.45-2.106-.86-.3-1.59-.567-2.318-.867-.363-.15-.72-.302-1.197-.544-.47-.238-.912-.218-2.463-1.732l-.096.1-12.922-17.024c-5.195 1.613-10.67 2.493-16.36 2.517-21.26.09-39.657-11.704-51.53-29.73-56.886 37.057-116.74 79.386-150.313 123.28l8.283 24.558 55.025-15.826 20.713 46.717c42.768-26.075 84.4-51.742 116.833-74.634-6.47-2-12.324-4.36-17.36-7.163l8.754-15.726c9.89 5.505 29.343 10.33 51.204 12.707 20.935 2.277 44.212 2.546 64.754.84 24.303-20.896 54.028-46.405 72.838-65.997 1.26-7.008 3.54-13.69 7.895-19.768l.44-.617.538-.533c3.732-3.7 8.657-6.304 13.737-6.272 5.08.032 9.018 2.307 11.968 4.506 2.687 2.002 4.914 4.12 6.993 6.09l8.677-13.134c-3.495-8.958-11.785-16.096-22.45-20.12-5.596-2.11-11.687-3.225-17.66-3.31zM36.79 381.1l-2.56 17.82c-.555-.08-.808-.126-1.085-.173.112.03.233.054.32.092.617.265 1.608.72 2.838 1.303 2.46 1.168 5.905 2.864 9.95 4.89 3.966 1.987 8.656 4.375 13.52 6.86L51.57 387.58c-2.886-1.436-5.518-2.733-7.546-3.696-1.338-.635-2.458-1.152-3.418-1.567-.96-.415-.327-.715-3.817-1.217zm68.374 21.485l-40.7 11.707.026.014-15.095 13.234c-4.943-2.555-9.69-4.996-13.698-7.024-3.356-1.698-6.226-3.125-8.427-4.18-1.1-.53-2.026-.962-2.84-1.318-.815-.356-.077-.615-3.537-1.125L18.27 431.7c-.503-.074-.715-.114-.996-.162.475.21 1.24.56 2.21 1.025 1.987.953 4.79 2.35 8.086 4.016 2.155 1.09 4.764 2.433 7.272 3.72L20.78 452.628l11.867 13.535 19.37-16.982c16.705 8.704 32.9 17.262 32.9 17.262l8.413-15.912s-12.692-6.693-26.802-14.07l15.158-13.29c18.2 9.415 34.89 18.137 34.89 18.137l8.352-15.947s-13.362-6.973-28.71-14.93zm-87.89 28.953l-.053-.025c-.395-.173-1.407-.226.054.025z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHalfBodyCrawlingIcon);
    