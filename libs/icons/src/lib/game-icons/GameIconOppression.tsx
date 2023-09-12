
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOppressionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'oppression'];
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
        <path fill="currentColor" d="M19.188 16.406V123.28l153.593 81.75-70.655-188.624H19.187zm109.812 0L248.125 161.22l5.25-144.814H129zm165.25 0l40.906 133.156 60.72-133.156H294.25zm140.188 0l-14.594 155.938 74.75-69.5V16.406h-60.156zM19.188 167.062v97.532l99.874 9.937L19.19 167.064zm409.406 40.313c-17.884-.094-38.853 9.07-55.938 26.156-5.305 5.307-9.826 10.998-13.562 16.845-93.737-56.476-329.936 76.333-179 189.78H60.78l-26.468 47.72H291.5L203 384.625c24.27-26.708 67.458-43.704 97-45.063 13.793 45.098 36.265 113.497 71.75 148.313h60.844c-43.07-46.547-76.538-109.09-81.938-179.844 1.616 3.237 3.72 6.19 6.313 8.783 18.662 18.663 55.944 11.648 83.28-15.688s34.35-64.618 15.688-83.28c-7-7-16.614-10.413-27.344-10.47zM19.188 323v59.563l77.687-23.938L19.187 323z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOppressionIcon);
    