
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract049Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-049'];
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
        <path fill="currentColor" d="m491,21-99.1169,57.8687 99.1169,57.7219v-115.5906zm0,146.4344-99.1169-57.8687v115.5906l99.1169-57.7219zm0,30.6969-99.1169,57.7219 99.1169,57.8687v-115.5906zm0,146.2875-99.1169-57.575v115.5906l99.1169-58.0156zm0,30.9906-99.1169,57.7219 99.1169,57.8687v-115.5906zm-123.5741-354.4094-99.1169,57.8687 99.1169,57.7219v-115.5906zm0,146.4344-99.1169-57.8687v115.5906l99.1169-57.7219zm0,30.6969-99.1169,57.7219 99.1169,57.8687v-115.5906zm0,146.2875-99.1169-57.575v115.5906l99.1169-58.0156zm0,30.9906-99.1169,57.7219 99.1169,57.8687v-115.5906zm-123.7349-296.5406-99.1169-57.8687v115.5906l99.1169-57.7219zm0,30.6969-99.1169,57.8687 99.1169,57.7219v-115.5906zm0,146.2875-99.1169-57.7219v115.5906l99.1169-57.8687zm0,30.9906-99.1169,57.575 99.1169,58.0156v-115.5906zm0,146.2875-99.1169-57.7219v115.5906l99.1169-57.8687zm-123.5742-354.2625-99.1168-57.8687v115.5906l99.1168-57.7219zm0,30.6969-99.1168,57.8687 99.1168,57.7219v-115.5906zm0,146.2875-99.1168-57.7219v115.5906l99.1168-57.8687zm0,30.9906-99.1168,57.575 99.1168,58.0156v-115.5906zm0,146.2875-99.1168-57.7219v115.5906l99.1168-57.8687z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract049Icon);
    