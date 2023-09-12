
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLampreyMouthIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lamprey-mouth'];
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
        <path fill="currentColor" d="M254.25 17.72c-11.843 0-23.692 4.534-32.78 13.624-16.698 16.697-18.037 42.692-4.064 60.906 8.4-17.542 23.4-27.876 39.28-28 14.61-.114 28.57 8.52 37.345 23.72 10.76-17.833 8.43-41.198-7-56.626-9.088-9.09-20.937-13.625-32.78-13.625zm64.438 38.405c.792 6.464.635 13.016-.5 19.438 15.272 5.223 29.668 12.314 42.906 21.03l9.844-15.78c-16.023-10.52-33.58-18.862-52.25-24.688zm-129.094 1.53c-17.492 5.935-33.955 14.127-49.03 24.22l9.81 15.78c12.432-8.364 25.903-15.317 40.19-20.593-1.286-6.39-1.61-12.936-.97-19.406zM102.97 81.75c-.356.012-.72.04-1.064.063-6 .398-10.73 2.832-14.094 6.25-6.45 6.553-9.122 18.372-1.25 33.78l92.782 57.72-57.72-92.75c-6.617-3.396-12.524-4.97-17.593-5.063-.36-.007-.707-.012-1.06 0zm303.81 0c-5.07.095-10.96 1.685-17.592 5.094l-57.75 92.75 92.812-57.75c7.873-15.41 5.202-27.228-1.25-33.78-3.365-3.42-8.094-5.853-14.094-6.25-.69-.047-1.4-.078-2.125-.064zm-149.936 1.188c-9.205.072-19.457 6.563-24.78 23.062l24.78 106.406 24.78-106.47c-5.437-16.876-15.58-23.07-24.78-23zm42.875 27.812l-4.25 18.188c12.622 3.824 24.45 9.446 35.186 16.593l9.813-15.78c-12.435-8.23-26.14-14.674-40.75-19zm-89.783 1c-13.962 4.485-27.045 10.945-38.937 19.03l9.844 15.814c11.307-7.76 23.886-13.81 37.344-17.813l-2.907-12.593c-1.836-1.374-3.628-2.84-5.343-4.437zM430.5 139.97l-15.78 9.843c8.265 12.352 15.12 25.73 20.342 39.906 2.915-.393 5.846-.595 8.782-.595 3.714 0 7.423.34 11.094.97-5.915-17.898-14.18-34.73-24.438-50.126zm-348.594 1c-9.814 14.913-17.76 31.165-23.53 48.405 1.96-.176 3.937-.25 5.905-.25 4.508 0 9.014.483 13.44 1.406 5.125-14.102 11.862-27.43 20-39.75l-15.814-9.81zm299.97 29.28l-15.813 9.813c7.83 11.142 13.975 23.547 18.125 36.843l7.593-1.78c1.834-2.454 3.837-4.805 6.064-7.032.77-.77 1.544-1.527 2.344-2.25-4.544-12.728-10.735-24.674-18.313-35.594zm-251.345.97c-7.992 11.708-14.397 24.585-18.905 38.31 1.68 1.788 3.216 3.672 4.656 5.595l12.22 2.844c4.035-13.317 10.095-25.746 17.813-36.94l-15.782-9.81zm-66.25 36.468c-11.84 0-23.69 4.535-32.78 13.625-18.18 18.18-18.18 47.383 0 65.562 15.418 15.418 38.743 17.765 56.563 7.03-15.176-8.782-23.77-22.774-23.657-37.374.125-15.882 10.434-30.88 27.97-39.28-8.293-6.364-18.184-9.563-28.095-9.563zm379.564 0c-9.91 0-19.826 3.198-28.125 9.562 17.54 8.4 27.874 23.398 28 39.28.113 14.6-8.505 28.593-23.69 37.376 17.828 10.734 41.177 8.387 56.595-7.03 18.18-18.18 18.18-47.384 0-65.563-9.09-9.09-20.94-13.625-32.78-13.625zm-337.688 24.218c-16.5 5.325-22.99 15.577-23.062 24.78-.072 9.212 6.14 19.35 23.062 24.783l106.375-24.783-106.374-24.78zm295.813 0l-106.376 24.78L401.97 281.47c16.92-5.435 23.133-15.572 23.06-24.783-.07-9.204-6.562-19.456-23.06-24.78zm-145.126 63.5l-24.78 106.406c5.323 16.5 15.575 22.99 24.78 23.063 9.2.072 19.343-6.122 24.78-23l-24.78-106.47zm-128.47.063l-17.655 4.124c-.152.154-.286.316-.44.47 4.316 14.604 10.754 28.315 18.97 40.748L145.03 331c-7.2-10.836-12.845-22.777-16.655-35.53zm255.97 1.092c-3.92 12.73-9.662 24.653-16.97 35.438l15.782 9.813c7.857-11.69 14.128-24.522 18.53-38.188-1.314-1.12-2.6-2.29-3.842-3.53-.17-.17-.334-.33-.5-.5l-13-3.033zM76.688 317.906c-6.37 1.23-12.875 1.46-19.313.78 5.847 18.42 14.17 35.743 24.594 51.564l15.78-9.844c-8.672-13.12-15.76-27.37-21-42.5-.02.004-.043-.004-.063 0zm379.218.063c-6.546 1.22-13.242 1.41-19.844.624-5.347 15.258-12.564 29.618-21.406 42.812l15.78 9.844c10.873-16.298 19.492-34.2 25.47-53.28zm-276.469 13.655l-92.78 57.72c-8.1 15.787-5.28 27.354 1.28 33.81 6.554 6.452 18.372 9.094 33.782 1.22l57.718-92.75zm151.97 0l57.687 92.72c15.428 7.896 27.253 5.268 33.812-1.19 6.56-6.456 9.35-18.023 1.25-33.81l-92.75-57.72zm-151.72 34.938l-9.812 15.78c10.925 7.574 22.895 13.743 35.625 18.282.88-.994 1.8-1.956 2.75-2.906 2.23-2.23 4.574-4.26 7.03-6.095l1.595-6.875c-13.42-4.143-25.952-10.304-37.188-18.188zm152.125 1.093c-10.662 7.258-22.45 12.992-35.03 16.938l2.968 12.656c.158.155.312.312.47.47 1.337 1.337 2.583 2.732 3.78 4.155 13.46-4.418 26.1-10.66 37.625-18.438l-9.813-15.78zM150.47 413.53l-9.814 15.783c15.174 10.146 31.76 18.348 49.375 24.28-.994-6.537-.99-13.21 0-19.75-14.052-5.237-27.31-12.078-39.56-20.312zM361 414.595c-13.078 8.6-27.28 15.648-42.344 20.844.832 6.562.69 13.228-.47 19.75 18.827-5.82 36.515-14.228 52.658-24.813L361 414.595zm-143.594 1c-13.973 18.21-12.634 44.178 4.063 60.875 18.178 18.178 47.382 18.178 65.56 0 15.43-15.43 17.76-38.77 7-56.595-8.773 15.19-22.735 23.802-37.342 23.688-15.883-.125-30.883-10.434-39.282-27.97z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLampreyMouthIcon);
    