
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBeetleShellIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'beetle-shell'];
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
        <path fill="currentColor" d="M247.125 21.375l-11.25 2.375C142.28 43.37 68.75 129.098 54.562 212.188c-7.093 41.544 1.26 83.252 30.876 114 8.703 9.036 19.153 17.05 31.406 23.875 1.122-6.105 3.542-12.028 7.062-17.563-9.857-5.69-18.156-12.176-25-19.28C73.88 287.234 66.646 252.554 73 215.343c3.844-22.515 12.893-45.62 25.97-67.406v134.437h18.686v-161.25c7.472-9.315 15.676-18.182 24.53-26.406v152.31h18.69V81.563l-.032-1.874c8.804-6.883 14.865-11.25 24.562-16.72v135.25h18.688V53.657c7.917-3.45 16.046-6.394 24.344-8.718V189.28c6.49-4.71 12.773-8.648 18.687-11.718V21.376zm22.28 0v158.062c5.867 3.51 12.16 7.84 18.69 12.782V44.937c9.61 2.69 19 6.186 28.092 10.374V198.22h18.688V65.124c8.526 5.037 16.72 10.676 24.53 16.813V247.03h18.69V98.28c8.91 8.634 17.116 17.903 24.53 27.626v156.47h18.688V154.343c11.076 19.874 18.78 40.685 22.25 61 6.353 37.21-.88 71.89-25.907 97.875-6.83 7.09-15.105 13.568-24.937 19.25 3.52 5.527 5.964 11.432 7.092 17.53 12.215-6.812 22.632-14.8 31.313-23.813 29.614-30.747 37.938-72.455 30.844-114-5.474-32.052-19.783-64.483-40.658-93.375v-.062h-.03c-33.238-45.977-83.128-82.953-140.594-95l-11.282-2.375zM256.69 193.75c-15.76 8.1-39.794 27.3-59.72 50.625-15.213 17.81-28.01 38.034-34.562 56.97 26.188-12.528 60.838-19.376 95.906-19.376 34.875 0 69.334 6.76 95.47 19.155-6.77-18.23-19.757-37.767-35.22-55.188-20.632-23.245-45.335-42.818-61.875-52.187zm1.625 106.906c-33.5 0-66.99 7.09-89.75 18.47-11.412 5.705-20.224 12.447-25.782 19.155-5.556 6.71-7.968 13.25-7.968 19.47 0 6.168 2.382 12.66 7.844 19.313l.125.156c5.56 6.707 14.37 13.45 25.782 19.155.918.46 1.893.9 2.844 1.344 4.422-4.217 9.587-8.036 15.313-11.376l.124-.063c19.388-11.27 45.188-17.342 71.375-17.342 26.185 0 52.017 6.072 71.405 17.343l.063.033c5.777 3.364 10.985 7.215 15.437 11.468.995-.462 2.01-.926 2.97-1.405 11.41-5.706 20.223-12.448 25.78-19.156 5.557-6.71 7.97-13.25 7.97-19.47 0-6.18-2.394-12.68-7.876-19.344l-.095-.125c-5.558-6.707-14.37-13.45-25.78-19.155-22.762-11.38-56.282-18.47-89.783-18.47zm-.094 86.97c-23.206 0-46.467 5.78-62 14.812-15.536 9.03-22.972 20.745-22.97 30.687-.002 9.942 7.434 21.657 22.97 30.688 15.533 9.03 38.794 14.812 62 14.812 23.204 0 46.495-5.782 62.03-14.813 15.535-9.03 22.97-20.745 22.97-30.687s-7.435-21.657-22.97-30.688c-15.535-9.03-38.826-14.812-62.03-14.812zM146.124 409.03c-6.868 0-14.037 2.97-18.875 7.845-4.838 4.875-7.77 12.038-7.72 18.906v.158c-.05 6.853 2.87 14 7.69 18.875l.03.03c4.838 4.876 12.007 7.844 18.875 7.844 5.603 0 11.402-1.968 15.97-5.343-4.805-7.435-7.535-15.616-7.532-24.22-.002-7.09 1.85-13.91 5.187-20.25-4.124-2.43-8.934-3.843-13.625-3.843zm224.406 0c-4.744 0-9.625 1.424-13.78 3.908 3.315 6.32 5.158 13.12 5.156 20.187.002 8.552-2.687 16.694-7.437 24.094 4.584 3.427 10.41 5.467 16.06 5.467 6.855 0 14.007-2.955 18.845-7.812l.03-.03c4.84-4.876 7.74-12.04 7.69-18.908v-.156c.05-6.867-2.85-14.03-7.69-18.905-4.837-4.875-12.005-7.844-18.874-7.844z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBeetleShellIcon);
    