import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBeehiveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'beehive'];
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
        d="M256 21.332L75.168 136.406l-7.594 4.832 9.664 15.188 7.594-4.832L256 42.668l171.168 108.926 7.594 4.832 9.664-15.188-7.594-4.832L256 21.332zm-144.908 5.74l-8.485 13.567 15.26 9.544 8.487-13.565-15.262-9.548zM72.212 44.02L58.963 56.2l10.825 11.78L83.04 55.8 72.212 44.02zm305.13 10.818l-17.856 2.277 2.024 15.87 17.855-2.276-2.023-15.872zM256 58.668l-148.127 94.264L99.34 183h312.994l-8.97-30.553L256 58.667zm0 43.846l57 19V169H199v-47.486l57-19zm0 18.972l-39 13V151h78v-16.514l-39-13zm-84.826 18.72l7.363 14.206-15.98 8.283-7.364-14.205 15.98-8.283zm266.724 45.745l-7.002 16.585 14.74 6.223 7.003-16.582-14.742-6.225zM120.258 201l-17.07 69h312.994l-17.137-69H120.258zM151 231h210v18H151v-18zm-93.36 40.188l-17.58 3.863 3.434 15.628 17.58-3.864-3.433-15.627zM122.187 288l-20.922 78H417.79l-20.997-78H122.186zm203.714 9.682l14.817 10.222-9.088 13.17-14.816-10.224 9.086-13.168zM151 327h210v18H151v-18zm302.44 18.64l-9.086 13.17 14.814 10.223 9.088-13.17-14.817-10.222zM122.185 384l-20.922 78H417.79l-20.997-78H122.186zm103.683 3.213l8.49 13.56-15.255 9.553-8.492-13.558 15.256-9.555zM77.65 398.646l-6.744 14.51 16.323 7.588 6.743-14.508-16.323-7.59zm303.14.815l7.312 14.23-16.012 8.228-7.31-14.232 16.01-8.225zM151 423h210v18H151v-18zm-23 57v16h48v-16h-48zm208 0v16h48v-16h-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBeehiveIcon })
);
