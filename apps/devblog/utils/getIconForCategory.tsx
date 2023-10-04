import { FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import {
  SiCss3,
  SiGithubpages,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNx,
  SiReact,
  SiReactquery,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { BiWrench } from 'react-icons/bi';

export function getIconForCategory(category: string): JSX.Element | null {
  switch (category) {
    case 'React':
      return <SiReact className="text-react-js" />;
    case 'Next':
      return <SiNextdotjs className="stroke-next-js" />;
    case 'API':
      return <AiOutlineApi className="text-api" />;
    case 'JavaScript':
      return <SiJavascript className="text-javascript " />;
    case 'CSS':
      return <SiCss3 className="text-css" />;
    case 'NX':
      return <SiNx className="stroke-nx" />;
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
