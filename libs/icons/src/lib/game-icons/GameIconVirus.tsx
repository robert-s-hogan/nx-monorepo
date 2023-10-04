import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconVirusIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'virus'];
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
      <path
        fill="currentColor"
        d="M122.156 19.47l-5.22 1.405L47.5 39.47l-5.22 1.405-1.374 5.22L22.28 115.53l-1.405 5.22 3.813 3.813 95.468 95.468 3.813 3.814 5.218-1.375 50.093-13.44c.49 8.758 4.812 17.78 12.814 25.782L341.25 383.97l-87.063-8.25-21.625-2.064 13.375 17.094 25.782 33-35.22 14.938-6.875 2.937 1.344 7.344 8.03 44.75h18.97L250.655 453l32.97-13.97 42.718 54.69h23.687l-48.592-62.25 63.937-27.095c12.634 5.195 26.962 1.96 36.156-6.313 6.05-5.442 10.338-13.19 10.72-22.03.342-7.924-2.687-16.32-8.938-23.594l31.375-84.844 60.97 5.25v-18.75l-66.47-5.72-7.093-.624-2.47 6.688-24.374 65.875-13.813-95.5 114.22-25v-19.157l-126.688 27.75-8.5 1.844 1.25 8.625 15.53 107.344-138.28-138.283c-7.515-7.513-16.656-11.092-25.5-11.406-1.065-.036-2.137-.023-3.19.032l13.564-48.78 1.406-5.22-3.813-3.812-95.468-95.47-3.814-3.81zm-5.562 20.874l87.812 87.812-15.28 57.094c-.834.765-1.626 1.58-2.376 2.438L129.562 203 41.75 115.187l15.78-59.062 59.064-15.78zm96 154.562c4.167.076 8.752 1.847 13.156 6.25l2.188 2.22L207.5 223.81l-2.188-2.218c-5.85-5.85-7.38-10.615-7.406-14.125-.01-1.27.17-2.456.53-3.564l.19-.062-.032-.344c.67-1.787 1.814-3.368 3.406-4.75 2.682-2.33 6.427-3.92 10.594-3.844zm28.562 21.656l16.22 16.22-20.47 20.437L220.72 237l20.436-20.438zM270.594 246l16.187 16.188-20.436 20.437-16.22-16.188L270.595 246zM300 275.406l16.53 16.53-20.436 20.44-16.563-16.532L300 275.406zm29.75 29.75l16.188 16.22-20.438 20.437-16.188-16.22 20.438-20.437zm29.438 29.406l14.093 14.125-20.436 20.47-14.125-14.126 20.467-20.467zm27.312 27.344l1.28 1.28c4.884 4.885 5.923 8.774 5.783 12.033-.14 3.258-1.72 6.407-4.532 8.936-5.62 5.06-14.173 7.013-21.686-.5l-1.28-1.28 20.436-20.47zm-112.47 34.47l50.94 4.812-35.44 15.03-15.5-19.843z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconVirusIcon })
);
