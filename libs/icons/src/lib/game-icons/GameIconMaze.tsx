
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMazeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'maze'];
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
        <path fill="currentColor" d="M212.125 20.156V59.72H39.53V188.56H69.846V293H39.623V483.03H204.687v-12.936H382v-45.5h95.281V264.53h-25.655V74.813H384.03V20.157H212.126zm18.688 18.688h134.53l-.03 35.968H297V153.938H378.28v46.625h18.69V135.25h-81.283V93.5h117.25v171.03H342V201.47H224.656v9.343l-.03 70.187v9.344h75.467v-18.688h-56.75v-51.5h79.97l-.002 126.78-185.937-.03V252.72h41.656v53.686h18.72V174.062h66.875v-18.687h-85.563v78.654h-60.375V293H88.53V188.562h57.44v-18.687H58.22v-91.47h153.905v30.94H111.437v18.686h119.375V38.845zM342 283.22h116.594v122.686H301.97v18.688h61.31v26.812H204.69v-48.812H110v18.687h76v43.064H58.312V311.72h60.376v53.874h9.343l114.782.03v65H261.5v-65H342v-31.529h66.75v33.844h18.688V315.406H342V283.22z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMazeIcon);
    