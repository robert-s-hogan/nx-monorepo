
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMilkCartonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'milk-carton'];
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
        <path fill="currentColor" d="M302.958 20.019l-93.916 46.564v35.404c31.305-15.522 62.61-31.047 93.916-46.568zm6.53 52.252l-95.4 47.3 63.036 78.137 95.397-47.303zm-111.915 55.492l-33.732 16.724h47.224zm-22.119 34.722l71.615 26.633-21.484-26.633zm-41.021 3.948v276.752l131.22 48.796v-276.75zm243.134 1.56c-31.306 15.521-62.61 31.044-93.916 46.567v275.863l93.916-46.567zM176.501 272.466s-15.3 15.085-9.889 24.203c4.167 7.02 21.889 5.418 21.889 5.418l15.549 3.848s17.72 10.374 21.887 5.416c5.41-6.44-9.887-29.098-9.887-29.098s35.91 33.492 29.662 47.318c-3.143 6.955-24.719-2.117-24.719-2.117s5.495 7.21 4.944 10.549c-1.001 6.062-13.774 9.916-13.774 9.916s1.111 21.24-6 25.168c-5.147 2.843-14.628.497-19.775-4.895-7.111-7.448-6-28.136-6-28.136s-12.775-10.177-13.776-16.735c-.55-3.611 4.944-8.103 4.944-8.103s-21.575-1.607-24.717-10.117c-6.247-16.919 29.662-32.635 29.662-32.635z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMilkCartonIcon);
    