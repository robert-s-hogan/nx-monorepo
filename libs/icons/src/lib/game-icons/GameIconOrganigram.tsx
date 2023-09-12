
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOrganigramIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'organigram'];
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
        <path fill="currentColor" d="M256 26.3c-19.924 0-36.076 18.7-36.076 41.768.014 17.119 9.05 32.494 22.797 38.795C223.827 117.95 206 149.828 206 172.488h100c0-22.65-17.813-54.508-36.695-65.61 13.741-6.312 22.766-21.693 22.771-38.81 0-23.067-16.152-41.767-36.076-41.767zm-9 165.212v41H61v83h18v-65h168v65h18v-65h168v65h18v-83H265v-41zm-177 148c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C37.827 431.161 20 463.04 20 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C223.827 431.161 206 463.04 206 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767zm186 0c-19.924 0-36.076 18.7-36.076 41.767.014 17.119 9.05 32.494 22.797 38.795C409.827 431.161 392 463.04 392 485.7h100c0-22.65-17.813-54.51-36.695-65.611 13.741-6.313 22.766-21.692 22.771-38.809 0-23.067-16.152-41.768-36.076-41.767z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOrganigramIcon);
    