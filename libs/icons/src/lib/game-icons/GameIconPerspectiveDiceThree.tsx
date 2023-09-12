
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPerspectiveDiceThreeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'perspective-dice-three'];
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
        <path fill="currentColor" d="M255.703 44.764c-6.176 0-12.353 1.384-17.137 4.152l-152.752 88.36c-9.57 5.535-9.57 14.29 0 19.826l152.752 88.359c9.57 5.536 24.703 5.536 34.272 0l152.754-88.36c9.57-5.534 9.57-14.289 0-19.824L272.838 48.916c-4.785-2.77-10.96-4.152-17.135-4.152zm-16.066 47.728c10.426.07 20.268 2.997 29.523 8.781 7.217 4.51 11.503 9.194 12.86 14.05 1.3 4.82-.311 9.735-4.838 14.745 9.307-2.952 18.48-3.867 27.521-2.746 9.034 1.059 17.655 4.151 25.863 9.282 12.23 7.643 17.511 15.88 15.842 24.71-1.724 8.796-10.313 17.83-25.767 27.102-5.452 3.271-11.452 6.23-17.998 8.875-6.444 2.651-13.363 4.946-20.758 6.887l-24.541-15.338c8.095-1.213 15.424-2.846 21.992-4.897 6.56-2.114 12.283-4.634 17.166-7.564 7.253-4.352 11.34-8.594 12.26-12.723.967-4.157-1.277-7.939-6.73-11.347-5.62-3.512-11.851-4.97-18.698-4.371-6.855.536-14.146 3.123-21.873 7.76l-10.951 6.57-20.494-12.809 11.52-6.912c6.873-4.125 10.755-7.97 11.642-11.54.832-3.603-1.314-7.006-6.438-10.208-4.737-2.961-10.036-4.268-15.896-3.924-5.86.344-11.779 2.309-17.752 5.893-4.41 2.645-8.286 5.68-11.633 9.105-3.347 3.425-6.119 7.18-8.316 11.266l-23.303-14.565a99.387 99.387 0 0 1 12.105-12.12 109.57 109.57 0 0 1 14.323-10.214c13.795-8.277 26.75-12.81 38.865-13.601a58.478 58.478 0 0 1 4.504-.147zm196.23 81.322c-1.938.074-4.218.858-6.955 2.413l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.699c0 11.05 7.57 15.419 17.14 9.89l146.937-84.843c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c-2.497-8.048-5.23-12.495-10.184-12.308zm-359.763.48c-6.227 0-10.033 5.325-10.155 11.825v157.697c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.141 1.156 17.141-9.895v-157.7c0-11.051-7.57-24.159-17.14-29.687L83.09 176.225c-2.567-1.338-4.911-1.93-6.986-1.93zm36.19 57.757c6.391 1.269 12.707 3.12 18.95 5.553 6.243 2.373 12.363 5.36 18.36 8.958 13.173 7.905 23.398 17.558 30.673 28.961 7.324 11.433 10.985 23.444 10.985 36.03 0 7.277-1.548 13.148-4.645 17.613-3.097 4.405-9.61 8.908-19.539 13.508l-23.521 10.94L192 382.68V408l-80-48v-25.32l40.184-18.928c3.588-1.784 6.244-4.038 7.964-6.764 1.72-2.725 2.58-6.115 2.58-10.172 0-6.263-1.746-12.35-5.236-18.261-3.44-5.882-8.036-10.55-13.787-14-4.424-2.655-9.266-4.397-14.525-5.227-5.26-.889-10.888-.865-16.885.07v-29.347zm261.876 7.447v111.77L400 335.77V360l-79.316 47.59v-24.23l25.832-15.499v-87.904L320 302.424v-23.865l26.363-22.377 27.807-16.684z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPerspectiveDiceThreeIcon);
    