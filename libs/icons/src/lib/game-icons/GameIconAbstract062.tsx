
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract062Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-062'];
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
        <path fill="currentColor" d="m247.3347,24.0844-41.8596,8.225v138.0625l-39.8029-5.2875v-124.8438l-144.6721,28.4937 6.7568,95.175 219.5779,41.4188v-181.2437zm17.3312,0v181.2437l219.5783-41.4188 6.7558-95.175-144.6716-28.4937v124.8438l-39.95,5.2875v-138.0625l-41.7125-8.225zm-235.5875,157.5969 3.9658,55.5188 165.0875,45.825v96.6437l-160.0942-70.2062 5.2875,73.8781 204.0096,104.4281v-264.9625l-218.2563-41.125zm454.1374,0-218.5499,41.2719v264.9625l204.3033-104.5751 5.1404-73.7313-159.8,70.0594v-96.6437l164.9404-45.825 3.9658-55.5188z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract062Icon);
    