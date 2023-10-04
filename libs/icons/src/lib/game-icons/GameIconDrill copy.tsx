
  import DynamicIconWrapper from '../DynamicIconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDrill copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'drill copy'];
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
        <path fill="currentColor" d="M190.72 17.688c-1.236 0-2.475 0-3.72.03-1.184.03-2.37.096-3.563.157-.915.047-1.83.093-2.75.156-1.544.104-3.096.227-4.656.376-39.78 3.82-84.005 22.38-113.593 53.938-.914.975-1.807 1.97-2.687 2.97-.63.715-1.26 1.427-1.875 2.155-.353.418-.684.858-1.03 1.28-.54.653-1.07 1.307-1.595 1.97-.068.085-.15.162-.22.25-.772.98-1.536 1.967-2.28 2.968-.907 1.22-1.794 2.442-2.656 3.687-.18.26-.354.52-.532.78-.803 1.177-1.58 2.367-2.343 3.564-.067.1-.124.21-.19.31-.86 1.356-1.718 2.716-2.53 4.095-.004.008.004.024 0 .03-.78 1.325-1.547 2.657-2.28 4-.212.386-.42.77-.626 1.157-.398.744-.772 1.5-1.157 2.25-.35.685-.69 1.374-1.03 2.063-.048.097-.11.185-.157.28-.545 1.11-1.077 2.225-1.594 3.345-.58 1.26-1.143 2.51-1.687 3.78-.423.985-.82 1.98-1.22 2.97-.458 1.132-.913 2.266-1.344 3.406-.43 1.142-.846 2.29-1.25 3.438-.004.012-.027.018-.03.03-.4 1.137-.753 2.265-1.126 3.407-.38 1.165-.74 2.332-1.094 3.5-.31 1.032-.647 2.06-.937 3.095-.138.488-.244.98-.376 1.47-.43 1.59-.837 3.183-1.22 4.78-.136.572-.275 1.146-.405 1.72-.05.207-.11.415-.157.624-2.8 12.473-4.125 25.047-4.157 37.155-.03 11.863 1.123 23.42 3.532 34.094.023.103.038.207.062.31.107.47.232.94.344 1.407.19.794.388 1.593.593 2.375.35 1.33.736 2.642 1.125 3.938.023.073.04.146.063.22.38 1.254.768 2.494 1.188 3.718.384 1.12.8 2.22 1.218 3.312.1.26.182.524.282.78.38.972.78 1.93 1.188 2.876.248.575.492 1.154.75 1.72.297.65.596 1.3.906 1.936.087.18.194.354.282.532.545 1.1 1.102 2.19 1.687 3.25.615 1.114 1.246 2.183 1.906 3.25.514.828 1.055 1.64 1.595 2.437.152.225.284.467.438.69.224.322.458.65.687.968.486.675.993 1.35 1.5 2 .248.318.497.625.75.937.272.336.535.67.813 1 .2.238.42.454.624.688.44.504.89 1.012 1.344 1.5l.5.53c.486.51.97 1.013 1.47 1.5.542.53 1.095 1.028 1.656 1.532.066.06.12.128.188.188.29.257.58.498.875.75.218.186.433.38.655.562.402.332.807.65 1.22.97.466.362.926.714 1.405 1.06.193.14.4.27.594.408.468.33.927.685 1.406 1 .108.07.235.117.344.187.7.452 1.4.894 2.125 1.313l.124.093.125.063 99.53 53.06c-11.733-14.704-21.437-29.708-29.125-44.905L51.25 227.187c-6.087-12.578-9.955-29.526-9.906-48.25.02-8.307.757-16.89 2.25-25.468l63.718 44.624c-.48-5.756-.666-11.52-.593-17.28.623-49.355 21.55-97.852 60.593-142.408 3.543-.597 7.045-1.074 10.5-1.406 5.788-.556 11.42-.72 16.78-.53-45.482 45.9-68.563 95.274-69.187 144.56-.133 10.51.757 21.066 2.688 31.626l101.72 71.22c-.78-6.672-1.146-13.35-1.064-20.032.606-49.25 24.488-97.445 68.625-140.22l-34.25-64.25c-2.42-8.248-6.81-15.287-12.5-21.093-.698-.71-1.42-1.418-2.156-2.093-1.375-1.256-2.785-2.44-4.282-3.562-.125-.093-.25-.19-.375-.28-.71-.527-1.452-1.037-2.188-1.532-.106-.072-.206-.15-.313-.22-.762-.506-1.524-.994-2.312-1.468-.084-.05-.166-.106-.25-.156-.816-.487-1.66-.957-2.5-1.407-.06-.033-.126-.062-.188-.094-.87-.464-1.76-.89-2.656-1.314-.033-.016-.06-.046-.094-.062-.93-.44-1.858-.85-2.812-1.25-1.16-.486-2.337-.942-3.53-1.375-.252-.092-.5-.194-.75-.282-.072-.025-.15-.038-.22-.063-.66-.23-1.33-.472-2-.688-.104-.033-.208-.06-.313-.093-1.548-.493-3.12-.932-4.718-1.344-.586-.15-1.19-.298-1.782-.438-.22-.052-.436-.105-.657-.156-.55-.126-1.097-.257-1.655-.375-.258-.053-.523-.103-.78-.155-.527-.106-1.065-.214-1.595-.313-6.937-1.284-14.234-1.876-21.78-1.875zm174.905 95.624l36.938 157.282 87.062 181.03-11.563-92.374 14.844-124.53-27.062 54.343L436 131.03l.75 130.5-71.125-148.217zm-59.094 27.532c-38.92 39.08-58.576 81.213-59.092 123.22-.143 11.61 1.172 23.29 4 34.967l78.125 54.75c-.123-2.452-.185-4.92-.157-7.374.365-32.055 13.53-63.464 37.78-91.812l-60.655-113.75zm70.126 131.562c-18.83 23.913-28.277 49.114-28.562 74.22-.082 7.153.6 14.333 2.03 21.53l60.72 42.53c.746-16.27 5.657-32.273 14.312-47.31l-48.5-90.97zm-215.28 17.313c12.68 18.31 28.792 36.394 48.53 54.092l58.53 31.22c-9.277-12.315-16.937-24.87-22.967-37.594l-84.095-47.72zM54.655 318l46.657 54.094 71.874 14L54.657 318zm93.28 25.5l148.314 99.72-148.313-15 144.75 36.217-52.875 19.844 115-5.06 101.907 12.75L147.936 343.5zm129.408 12.03c10.717 15.65 24.408 31.098 41.22 46.22l32.623 17.375c-6.16-9.804-11.007-19.812-14.562-29.938l-59.28-33.656zm158.594 28.064c-4.23 10.11-6.4 20.418-6.5 30.72-.194 19.67 7.015 39.694 23.03 58.81l16.438 8.75 27.063 14.438-14.408-27.093-45.625-85.626zm-71.625 21.312c7.277 12.51 17.08 24.897 29.593 37l25.625 13.656c-3.39-7.683-5.788-15.514-7.217-23.406l-48-27.25z"/>
      </svg>
    );
  };
  
  export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDrill copyIcon })
);

    