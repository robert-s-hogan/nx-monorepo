
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconExpandedRaysIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'expanded-rays'];
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
        <path fill="currentColor" d="M115.928 14.217l97.87 150.246-63.23-150.246h-34.64zm54.916 0l64.127 152.38-30.933-152.38h-33.193zm52.263 0l30.358 149.556-.133-149.556h-30.225zm48.913 0l.134 150.68 30.744-150.68H272.02zm49.95 0L291.103 165.51 354.51 14.217h-32.54zm52.805 0L311.35 165.55l98.705-151.333h-35.28zM259.682 184.03c-40.35.944-72.1 34.217-71.155 74.566.945 40.35 34.218 72.097 74.567 71.152 40.35-.945 72.097-34.215 71.152-74.564-.945-40.35-34.215-72.1-74.564-71.155zm31.02 163.18l29.064 143.17h31.187l-60.25-143.17zm-76.157.966L121.793 490.38h33.152l59.6-142.204zm20.168.226l-59.506 141.98h30.537l28.97-141.98zm77.076.733l59.44 141.246h32.567L311.79 349.136zm-58.16.03l-28.814 141.216h28.94l-.125-141.214zm18.69 1.43l.125 139.786h28.25L272.32 350.595z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconExpandedRaysIcon);
    