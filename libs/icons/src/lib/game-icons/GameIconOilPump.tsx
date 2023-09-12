
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOilPumpIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'oil-pump'];
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
        <path fill="currentColor" d="M325.9 23.981L311.94 45.25c38.182 24.845 67.675 59.024 96.878 123.178l16.828-24.807c-5.155-17.403-10.801-35.86-16-51.351-5.597-16.682-11.538-30.866-13.105-33.194-1.32-1.96-10.748-9.452-24.53-16.34-12.285-6.14-28.272-12.655-46.11-18.754zm8.33 61.53l-54.46 42.994c10.761 6.175 18.5 17.082 20.314 29.828l57.5-45.396c-7.522-10.489-15.238-19.485-23.354-27.426zm-74.73 55.578c-12.81 0-23 10.19-23 23 0 12.809 10.19 23 23 23s23-10.191 23-23c0-12.81-10.19-23-23-23zm-39.342 34.476L87.49 280.304c11.838 4.67 20.406 16.013 20.975 29.306L244.5 202.214c-11.676-4.635-20.766-14.492-24.342-26.649zm174.342 4.448v210.006h18V195.063l-7.082 10.44-6.453-15.219a682.592 682.592 0 0 0-4.465-10.271zm-92.637.543L286.047 192.8l3.793 18.015-14.526-9.707-15.01 11.621 28.796 19.243-71.305 32.832 4.82-22.897-21.976 17.014-24.354 115.678-.44.195.272.61-19.92 94.615H140.5v18h222V468.58zm-4.226 67.3l12.02 57.088-79.057-26.218zm-85.477 43.717l86.432 28.666-102.012 45.338zM75.5 296.02c-8.39 0-15 6.609-15 15 0 8.39 6.61 15 15 15s15-6.61 15-15c0-8.391-6.61-15-15-15zm239.945 36.427l14.953 71.028-111.953-27.916zm-218.824 3.852c-4.595 3.851-10.24 6.481-16.42 7.377l21.266 46.344h19.804zm-42.232.008l-24.66 53.713h19.808l21.276-46.342c-6.181-.893-11.828-3.521-16.424-7.371zm137.574 51.2l116.781 29.118-133.101 48.403zM28.5 408.018v62h94v-62zm352 0v16h46v-16zm-45.324 18.15l9.232 43.85h-129.82zm45.324 15.85v28h46v-28zm64 28v18h39v-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOilPumpIcon);
    