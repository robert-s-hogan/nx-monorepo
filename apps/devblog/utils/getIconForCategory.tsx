import { FiGithub } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  SiCss3,
  SiGithubpages,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNx,
  SiReactquery,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BiWrench } from 'react-icons/bi';

export function getIconForCategory(category: string): JSX.Element | null {
  switch (category) {
    case 'React':
      return <FaReact className="text-react-js" />;
    case 'Next':
      return <SiNextdotjs className="text-next-js" />;
    case 'API':
      return <TbApi className="text-api" />;
    case 'JavaScript':
      return <SiJavascript className="text-javascript " />;
    case 'CSS':
      return <SiCss3 className="text-css" />;
    case 'NX':
      return <SiNx className="text-nx" />;
    case 'Typescript':
      return <SiTypescript className="text-typescript" />;
    case 'Storybook':
      return <SiStorybook className="text-storybook" />;
    case 'ReactQuery':
      return <SiReactquery className="text-react-query" />;
    case 'TailwindCSS':
      return <SiTailwindcss className="text-tailwindcss" />;
    case 'Jest':
      return <SiJest className="text-jest" />;
    case 'Google':
      return <FcGoogle className="text-google" />;
    case 'GithubPages':
      return (
        <SiGithubpages
          className="text-github"
          style={{ width: '3.75em', height: '3.75em' }}
        />
      );
    default:
      return null;
  }
}
