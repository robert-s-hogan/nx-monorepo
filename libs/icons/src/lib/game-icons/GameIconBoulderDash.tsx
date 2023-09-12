
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBoulderDashIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'boulder-dash'];
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
        <path fill="currentColor" d="M85.625 35.008l52.611 39.463a112.639 112.639 0 0 1 39.032-6.955c1.664 0 3.319.045 4.966.117zm-61.09 25.285l54.738 61.85c7.477-11.488 16.704-21.611 27.286-29.92zm152.733 23.223c-56.69 0-102.97 48.891-102.97 109.99s46.28 109.992 102.97 109.992c56.689 0 102.968-48.893 102.968-109.992 0-61.099-46.28-109.99-102.968-109.99zm-150.34 58.71L58.3 193.739l-.002-.232c0-15.586 2.698-30.536 7.619-44.352zm314.408 26.84l-12.133 13.297c8.5 7.756 16.316 14.44 23.498 20.446 2.615-5.648 6.3-10.586 10.942-14.399-6.89-5.732-14.29-12.028-22.307-19.344zm44.851 29.28a16.468 16.468 0 0 0-4.326.511c-11.225 2.899-19.07 18.144-14.52 35.766 4.55 17.622 18.795 27.164 30.02 24.266 11.225-2.899 19.07-18.144 14.52-35.766-3.981-15.42-15.385-24.652-25.693-24.777zm-362.625 8.2l51.276 50.981A129.794 129.794 0 0 1 60.996 220.2zm276.715 29.56l.24 17.998c14.545-.196 38.63 5.678 58.344 12.224a367.708 367.708 0 0 1 13.153 4.65c-8.801-5.715-16.002-14.82-20.141-25.722-17.47-5.193-36.21-9.357-51.596-9.15zM18 265.31v17.337a11431.26 11431.26 0 0 0 58.58 24.301c56.12 23.12 129.342 53.014 202.04 82.602A139668.39 139668.39 0 0 0 494 476.992v-17.26a142416.05 142416.05 0 0 1-209.35-85c-72.686-29.583-145.898-59.475-201.976-82.578-26.028-10.723-47.807-19.76-64.674-26.843zm398.504 3.246c-4.107 3.607-9.01 6.307-14.643 7.761a35.428 35.428 0 0 1-15.423.526c18.897 14.106 12.17 59.102 2.992 70.697-8.122 10.26-21.36 13.533-28.698 14.488.107.09-.246.082-1.37.127.441-.017.902-.066 1.37-.127-.162-.136-1.42-.502-2.816-1.672-2.31-1.934-5.373-5.127-8.463-8.847-6.179-7.44-12.638-17.123-16.176-23.871l-6.293-12.004-8.623 10.457c-5.097 6.182-10.064 9.497-21.433 15.713l8.635 15.795c7.246-3.962 12.91-7.5 17.873-11.508 3.683 5.75 7.747 11.592 12.17 16.918 3.542 4.265 7.107 8.093 10.751 11.146 3.645 3.053 6.942 6.255 13.721 5.985 21.721-.865 40.55-18.176 56.125-29.553 4.476-3.27 14.021-5.87 24.045-6.135 7.341-.194 14.925.791 20.863 2.408-1.13 14.418-5.324 39.26-15.02 53.397l-9.116 13.295 16.101.783c15.55.756 23.995-1.374 39.332-7.951l-7.094-16.543c-7.78 3.336-12.17 5.101-16.601 5.976 8.66-20.28 10.676-43.193 10.892-54.996l.11-5.914-5.387-2.445c-9.846-4.47-22.191-6.33-34.555-6.004-5.37.142-10.736.668-15.867 1.781 2.068-9.406 2.268-18.777 1.14-27.82-1.375-11.037-4.593-21.644-8.542-31.863z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBoulderDashIcon);
    