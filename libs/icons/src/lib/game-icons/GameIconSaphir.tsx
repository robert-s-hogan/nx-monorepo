
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSaphirIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'saphir'];
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
        <path fill="currentColor" d="M413.47 20.25l-11.47 4L84.97 134.72 78.437 137l.406 6.875L97.78 478.47l.69 12.124 11.468-4 317.03-110.47 6.5-2.28-.374-6.906-18.938-334.563-.687-12.125zm-31.533 30.375l-43.375 64.75-180.75 63.375-36.78-24.53c74.22 12.515 196.82-52.49 257.124-102.282l3.78-1.313zm16.032 19.688l15.78 279.125-49.313-32.875-4.187-76.47c18.567-45.422 32.45-114.342 37.72-169.78zm-63.44 67.75l9.69 176.187-166.876 58.5-2.78-50.47c48.082 9.04 83.113-8.624 104.342-38.25-27.814-3.42-46.384-30.984-43.094-60.28 3.174-28.257 24.982-51.253 51.72-52.313 1.782-.07 3.615-.035 5.437.094 2.458.176 4.837.56 7.155 1.095-1.355-6.985-3.194-13.86-5.5-20.563l39.906-14zM117.78 174.5l29.657 19.78 10.47 190.814-43.407 64.812-.188-3.656c24.146-101.32 36.74-217.525 3.47-271.75zm172.095 22.625c-13.068-.123-26.546 12.068-28.5 29.47-2.017 17.96 8.33 31.076 21.78 32.03 13.452.954 27.765-11.444 29.783-29.406 2.017-17.963-8.363-31.08-21.813-32.032-.42-.03-.828-.06-1.25-.063zm64.156 134.97l49.283 32.874-254.938 88.81c48.305-26.555 103.147-64.172 135.594-97.124l70.06-24.562z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSaphirIcon);
    