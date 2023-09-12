
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract090Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-090'];
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
        <path fill="currentColor" d="m21,21v56.4c29.3773,0 53.1688,23.7914 53.1688,53.1687s-23.7914,53.1688-53.1688,53.1688v19.0937c29.3773,0 53.1688,23.7914 53.1688,53.1688s-23.7914,53.1688-53.1688,53.1688v19.0937c29.3773,0 53.1688,23.7915 53.1688,53.1688s-23.7914,53.1688-53.1688,53.1688v56.3999h56.4c0-29.3773 23.7914-53.1687 53.1688-53.1687s53.1687,23.7914 53.1687,53.1687h19.0938c0-29.3773 23.7914-53.1687 53.1688-53.1687s53.1687,23.7914 53.1687,53.1687h19.0937c0-29.3773 23.7915-53.1687 53.1688-53.1687s53.1688,23.7914 53.1688,53.1687h56.3999v-56.3999c-29.3773,0-53.1687-23.7914-53.1687-53.1688s23.7914-53.1688 53.1687-53.1688v-19.0937c-29.3773,0-53.1687-23.7914-53.1687-53.1688s23.7914-53.1688 53.1687-53.1688v-19.0937c-29.3773,0-53.1687-23.7914-53.1687-53.1688s23.7914-53.1687 53.1687-53.1687v-56.4h-56.3999c0,29.3773-23.7915,53.1688-53.1688,53.1688s-53.1688-23.7914-53.1688-53.1688h-19.0937c0,29.3773-23.7914,53.1688-53.1687,53.1688s-53.1688-23.7914-53.1688-53.1688h-19.0938c0,29.3773-23.7914,53.1688-53.1687,53.1688s-53.1688-23.7914-53.1688-53.1688h-56.4zm235.0001,112.0656c67.9121,0 122.9343,55.0221 122.9343,122.9344s-55.0222,122.9343-122.9343,122.9343-122.9344-55.0222-122.9344-122.9343 55.0223-122.9344 122.9344-122.9344zm0,38.1875c-46.8044,0-84.7469,37.9425-84.7469,84.7469s37.9425,84.7469 84.7469,84.7469 84.7468-37.9425 84.7468-84.7469-37.9425-84.7469-84.7468-84.7469z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract090Icon);
    