
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindpumpIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'windpump'];
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
        <path fill="currentColor" d="M370.506 32l-32 16v60h16l16-76zm-56.988 1.912l-19.713 29.856 30 51.962 13.855-8-24.142-73.818zm71.584 22.783l-30 51.96 13.855 8 51.857-57.817-35.712-2.143zM265.12 64.063l-2.143 35.712 51.96 30 8-13.857-57.818-51.856zm155.987 23.46l-51.96 30 8 13.856 73.818-24.144-29.858-19.713zM59.123 95.928l15.045 47.988-15.045 47.988 136.522-14.515 11.47-24.39h26.463v-18h-26.385l-11.548-24.557-5.038-.535-131.484-13.98zM238.28 114.37l16 32h60v-16l-76-16zm138.597 17.855v16l76 16-16-32h-60zm-62.865 14.99l-73.82 24.144 29.857 19.712 51.962-30-8-13.857zm62.207 1.605l-8 13.858 57.817 51.855 2.145-35.713-51.963-30zm-54.02 13.12l-51.858 57.816 35.713 2.144 30-51.96-13.856-8zm45.154.925l-13.858 8 24.145 73.82 19.714-29.86-30-51.96zm-30.702 7.73l-16 76 32-16v-60h-16zM304.598 255.4l-1.575 23.6h-21.445v18h20.246l-13.226 198.4 17.96 1.2 2.64-39.6h27.38v39h18v-39h27.38l2.64 39.6 17.96-1.2L389.333 297h20.246v-18h-21.445l-1.574-23.6-17.962 1.2 1.494 22.4h-15.514v-23h-18v23h-15.514l1.495-22.4-17.962-1.2zm15.267 41.6h16.713v78h-21.912l5.2-78zm34.713 0h16.713l5.2 78h-21.912v-78zm-41 94.307V393h23v46h-26.18l3.18-47.693zm64 0l3.18 47.693h-26.18v-46h23v-1.693z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindpumpIcon);
    