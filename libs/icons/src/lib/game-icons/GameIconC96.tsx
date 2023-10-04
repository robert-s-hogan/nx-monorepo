import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconC96Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'c96'];
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
        d="M188.644 288.505V397.78h67.373V288.505h-67.373zm-132.32-35.4v-.951c-9.554 24.886-27.426 69.693-27.426 69.693a34.188 34.188 0 1 0 65.397 16.127c1.819-13.702 8.707-65.47 11.205-84.9H56.292zm0 53.67a11.905 11.905 0 1 1 11.904 11.936 11.905 11.905 0 0 1-11.905-11.936zM36.035 147.06a15.134 15.134 0 0 0 21.845 13.588c-5.226 10.054-12.542 40.187 3.982 74.689h55.573v.073c6.542.554 11.068 12.96 14.768 22.367 4.18 10.452 17.611 14.016 23.14 14.016h101.467V130.463l-73.8-.743v-15.5H80.425v20.904H60.567v.073a15.145 15.145 0 0 0-24.53 11.863zm99.47 94.15a25.21 25.21 0 0 1 9.345-19.618 77.125 77.125 0 0 0 1.87 6.637 61.586 61.586 0 0 0 1.903 4.965 43.783 43.783 0 0 0 2.362 4.599c.44.721.857 1.421 1.338 2.09a21.134 21.134 0 0 0 1.432 1.892 18.06 18.06 0 0 0 1.494 1.662 16.138 16.138 0 0 0 1.526 1.41 13.357 13.357 0 0 0 1.516 1.15l.721.492.721.397a16.127 16.127 0 0 0 2.456 1.118 16.723 16.723 0 0 0 1.641.481l.575.146-.49-.334a16.033 16.033 0 0 1-1.35-.962 14.873 14.873 0 0 1-1.818-1.745l-.491-.544-.46-.637a11.142 11.142 0 0 1-.92-1.39 13.305 13.305 0 0 1-.836-1.589 14.695 14.695 0 0 1-.732-1.766 17.1 17.1 0 0 1-.616-1.913c-.21-.648-.335-1.348-.491-2.09a37.627 37.627 0 0 1-.596-4.37c-.094-1.504-.157-3.03-.126-4.577.032-1.547.115-3.083.24-4.589.126-1.505.314-3 .523-4.442l.22-1.41a25.252 25.252 0 1 1-20.956 24.938zM276.41 130.662l39.487 4.463H470.06v-2.247a7.42 7.42 0 0 1 7.42-7.42h1.098a7.42 7.42 0 0 1 7.421 7.42V157.073H315.896l-42.299 26.13V130.63z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconC96Icon })
);
