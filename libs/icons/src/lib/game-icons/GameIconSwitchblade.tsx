import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwitchbladeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'switchblade'];
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
        d="M226.652 235.381l21.57-19.723c-21.518-19.505-39.248-5.543-42.497-.644-10.142 15.208 9.633 9.177 20.927 20.367zm92.283 51.446c-3.208 4.817-20.418 18.384-41.47.25l19.64-21.53c11.065 12.509 32.21 5.71 21.83 21.28zm-29.21-87.57C446.324 42.738 486 24.645 486 24.645s-15.457 42.311-171.996 198.923zM34.808 440.584c10.868-7.484 10.733-3.654 23.408-15.01l.26.26 28.961 28.961.26.26c-11.253 12.612-7.267 12.456-14.98 23.553a20.304 20.304 0 0 1-31.058 2.793l-9.717-9.717a20.315 20.315 0 0 1 2.866-31.1zm189.767-180.881l53.387-48.654 24.29 24.29-48.684 53.367zm-154.36 154.38l28.962 28.961 141.104-141.103-28.962-28.962zM186.802 308.49a11.969 11.969 0 1 1 0 16.931 11.969 11.969 0 0 1 0-16.93z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwitchbladeIcon })
);
