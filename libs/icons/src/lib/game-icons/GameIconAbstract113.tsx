
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract113Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-113'];
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
        <path fill="currentColor" d="m112.3889,31.389-81.0006,57.5568 30.8841,93.0735 100.233.1402 31.0245-93.2139-81.141-57.5568zm287.2222,0-81.141,57.5568 30.8842,93.0735 100.233.1402 31.0244-93.2139-81.0006-57.5568zm-193.7276,58.2587-30.8841,93.2139 81.141,57.5565 81.0006-57.6969-31.0245-93.0735h-100.233zm-144.0322,106.2694-40.8513,60.2238 40.8513,59.9435h55.5914 12.3537 38.4648l84.9313-59.9435-84.9313-60.2238h-38.4648-12.3537-55.5914zm281.7473,0-84.9313,60.2238 84.9313,59.9435h38.4648 12.3536 55.7318l40.8512-59.9435-40.8512-60.2238h-55.7318-12.3536-38.4648zm-87.4582,75.6663-81.141,57.5563 30.8841,93.2139h100.233l31.0245-93.0733-81.0006-57.6969zm-93.635,58.2585-100.233.1393-30.8841,93.0733 81.0006,57.5568 81.141-57.5568-31.0245-93.2139zm287.0819,0-100.233.1393-30.8842,93.0733 81.141,57.5568 81.0006-57.5568-31.0244-93.2139z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract113Icon);
    