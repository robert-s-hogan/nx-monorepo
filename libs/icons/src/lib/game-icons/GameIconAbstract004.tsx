import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract004Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-004'];
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
        d="m21,491c15.6613-29.061 114.9027-51.4062 235-51.4062s219.3387,22.3452 235,51.4062h-470zm61.2471-42.0062c6.9255-6.3939 15.6473-12.3699 25.7029-17.7716l9.6938-168.6125c-26.0902-5.6099-45.6779-29.6133-45.6779-58.3096 0-31.2109 23.2297-56.7041 52.7279-59.1904l4.7001-79.4595 4.7,79.4595c29.4982,2.4863 52.7284,27.9796 52.7284,59.1904 0,28.6963-19.5881,52.6997-45.6784,58.3096l8.6659,151.7217c24.5914-7.2996 53.1453-12.0626 83.8654-13.6592l10.575-182.7125c-26.0902-5.61-45.6779-29.6133-45.6779-58.3096 0-31.2108 23.2297-56.7041 52.7279-59.1904l4.7-79.4596 4.7001,79.4596c29.4981,2.4863 52.7284,27.9796 52.7284,59.1904 0,28.6964-19.5882,52.6997-45.6784,58.3096l10.575,182.7125c30.6995,1.5886 59.1359,6.3755 83.7188,13.6592l8.6659-151.7217c-26.0902-5.6099-45.6784-29.6133-45.6784-58.3096 0-31.2109 23.2297-56.7041 52.7284-59.1904l4.7-79.4595 4.7,79.4595c29.4982,2.4863 52.7279,27.9796 52.7279,59.1904 0,28.6963-19.5882,52.6997-45.678,58.3096l9.6938,168.6125c10.1309,5.4271 18.8851,11.3392 25.85,17.7716-38.6767-12.1857-101.9834-20.2688-173.7534-20.2688-71.7577,0-135.071,8.0835-173.7529,20.2688zm47.1467-190.6437c28.8171,0 52.1409-24.1815 52.1409-54.05s-23.3238-54.05-52.1409-54.05-52.2875,24.182-52.2875,54.05 23.4704,54.05 52.2875,54.05zm253.0659,0c28.8166,0 52.1404-24.1815 52.1404-54.05s-23.3237-54.05-52.1404-54.05-52.2875,24.182-52.2875,54.05 23.4704,54.05 52.2875,54.05zm-253.0659-9.4c-23.774,0-43.0342-20.0084-43.0342-44.65s19.2602-44.6501 43.0342-44.6501 43.0346,20.0089 43.0346,44.6501-19.2606,44.65-43.0346,44.65zm253.0659,0c-23.774,0-43.0346-20.0084-43.0346-44.65s19.2606-44.6501 43.0346-44.6501 43.0341,20.0089 43.0341,44.6501-19.2601,44.65-43.0341,44.65zm-126.4596-35.25c28.8172,0 52.1409-24.1815 52.1409-54.05s-23.3237-54.05-52.1409-54.05-52.2875,24.182-52.2875,54.05 23.4704,54.05 52.2875,54.05zm0-9.3999c-23.774,0-43.0341-20.0084-43.0341-44.6501s19.2601-44.5029 43.0341-44.5029 43.0346,19.8618 43.0346,44.5029-19.2606,44.6501-43.0346,44.6501z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract004Icon })
);
