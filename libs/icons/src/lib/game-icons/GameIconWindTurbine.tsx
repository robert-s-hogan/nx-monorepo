
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindTurbineIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wind-turbine'];
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
        <path fill="currentColor" d="M272 16c-32 48-38.97 115.99-38 176 .118 7.3 2.486 17.54 5.086 26.69 5.166-2.36 10.89-3.69 16.914-3.69 3.04 0 6 .346 8.857.982L272 16zm-16 217c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm40.8 27.033c-.897 9.054-4.776 17.268-10.632 23.643L455.812 389.87c-25.57-51.714-80.964-91.744-133.42-120.91-6.366-3.54-16.386-6.605-25.593-8.927zm-79.896 8.274L40.124 362.12c57.57 3.714 119.937-24.243 171.423-55.09 6.274-3.758 13.95-10.936 20.58-17.77-7.1-5.122-12.522-12.447-15.223-20.953zm55.86 25.07c-5.127 2.32-10.8 3.623-16.764 3.623-5.964 0-11.637-1.302-16.764-3.62L232 496h48l-7.236-202.623z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindTurbineIcon);
    