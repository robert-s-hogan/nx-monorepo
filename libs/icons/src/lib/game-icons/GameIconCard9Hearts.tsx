
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard9HeartsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-9-hearts'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363.002c0 21.263 13.074 38.498 29.2 38.498h275.298c16.126 0 29.198-17.235 29.198-38.498V74.5c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174c13.613-.319 26.504 9.856 27.075 28.045.976 31.09-47.738 52.943-52.31 70.013-4.998-18.649-51.416-37.571-52.452-70.013-.995-31.156 37.403-37.91 52.451-11.848 6.262-10.846 15.925-15.978 25.238-16.195l-.002-.002zm69.973 124.361c16.404 0 30.074 6.817 41.01 20.447 10.936 13.631 16.404 32.768 16.404 57.414 0 20.446-3.05 37.722-9.152 51.829-6.023 14.026-14.027 24.488-24.012 31.382-9.985 6.816-21.239 10.223-33.76 10.223-12.125 0-21.634-2.655-28.529-7.965-6.815-5.389-10.223-11.806-10.223-19.256 0-4.913 1.387-8.877 4.16-11.888 2.853-3.012 6.418-4.516 10.698-4.516 3.883 0 7.173 1.307 9.867 3.922 2.694 2.615 4.04 5.745 4.04 9.39 0 2.616-1.226 5.508-3.683 8.678-1.505 1.982-2.26 3.685-2.26 5.112 0 2.219 1.31 4.16 3.924 5.824 2.616 1.585 6.815 2.379 12.6 2.379 8.242 0 15.493-2.258 21.754-6.776 6.26-4.596 11.332-12.085 15.215-22.466 3.883-10.461 5.826-23.975 5.826-40.538l-.238-10.578c-5.152 7.767-11.174 13.63-18.069 17.592-6.894 3.883-14.62 5.826-23.18 5.826-11.887 0-22.705-4.161-32.452-12.482-9.669-8.321-14.502-20.566-14.502-36.733 0-15.77 5.348-29.162 16.046-40.177 10.778-11.095 23.617-16.643 38.516-16.643zm.356 8.559c-8.876 0-16.166 3.724-21.872 11.174-5.705 7.37-8.558 18.505-8.558 33.404 0 13.63 2.853 23.813 8.558 30.549 5.706 6.656 13.155 9.986 22.348 9.986 9.114 0 16.76-3.607 22.941-10.818 6.261-7.212 9.393-17.316 9.393-30.313 0-13.472-3.25-24.169-9.748-32.094-6.42-7.924-14.107-11.888-23.062-11.888zm113.75 176.676c4.572 17.07 53.287 38.925 52.31 70.015-.57 18.188-13.46 28.36-27.072 28.043h-.002c-9.313-.218-18.975-5.35-25.236-16.195-15.048 26.06-53.444 19.307-52.45-11.848 1.037-32.442 47.452-51.366 52.45-70.015z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard9HeartsIcon);
    