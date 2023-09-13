export type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  process: string;
  management: string;
  media: string;
  technologyReason: string;
  purpose: string;
  resources: string[];
  link: string;
  github: string;
  category: string[];
  isUnderConstruction: boolean;
};

export const projectsData: Project[] = [
  {
    slug: 'play-2-win-ff',
    title: 'Play2winFF Draft Tool',
    image: 'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    description:
      'Crafted for a Yahoo fantasy football leagues, this tool is indispensable for tracking NFL updates.',
    process: 'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    management: 'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    media: 'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    technologyReason:
      'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    resources: [
      'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_hero.png',
    ],
    link: 'https://play2winff-nx.vercel.app/',
    github: '',
    category: ['React', 'Typescript', 'TailwindCSS', 'NX', 'Next', 'API'],
    isUnderConstruction: false,
  },
  {
    slug: 'react-ui-library',
    title: 'React UI Library',
    image:
      'https://rshogan.imgix.net/projects/devblog/dev_blog_react-ui-library.png',
    description:
      'A robust, dependency-free UI library constructed with React, TypeScript, and CSS modules.',
    process: 'https://rshogan.imgix.net/projects/play2winff/p2w_process.png',
    management:
      'https://rshogan.imgix.net/projects/play2winff/p2w_management.png',
    media:
      'https://rshogan.imgix.net/projects/devblog/dev_blog_react-ui-library.png',
    technologyReason:
      'https://rshogan.imgix.net/projects/play2winff/p2w_technology_reason.png',
    purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_purpose.png',
    resources: [
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_1.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_2.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_3.png',
    ],
    link: 'https://roberthogan-dev-react-ui.vercel.app/',
    github: '',
    category: ['React', 'Typescript', 'CSS', 'Storybook', 'Jest', 'NX'],
    isUnderConstruction: false,
  },
  {
    slug: 'memory-game',
    title: 'Memory Game',
    image:
      'https://rshogan.imgix.net/projects/devblog/dev_blog-concentration.png',
    description:
      'Experience nostalgia with "A Game of Concentration", developed using vanilla JavaScript and curated assets.',
    process: 'https://rshogan.imgix.net/projects/play2winff/p2w_process.png',
    management:
      'https://rshogan.imgix.net/projects/play2winff/p2w_management.png',
    media: 'https://rshogan.imgix.net/projects/play2winff/p2w_media.png',
    technologyReason:
      'https://rshogan.imgix.net/projects/play2winff/p2w_technology_reason.png',
    purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_purpose.png',
    resources: [
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_1.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_2.png',
      'https://rshogan.imgix.net/projects/play2winff/p2w_resources_3.png',
    ],

    link: 'https://robert-s-hogan.github.io/Project-Memory-Game/',
    github: 'https://github.com/robert-s-hogan/Project-Memory-Game',
    category: ['JavaScript', 'CSS', 'GithubPages'],
    isUnderConstruction: false,
  },
  // {
  // slug: 'swapi-plus',
  //   title: 'SWAPI+',
  //   image: 'https://rshogan.imgix.net/projects/devblog/devblog-swapi-plus.webp',
  //   description:
  //     'An interactive Star Wars character showcase using serverless functions.',
  // process: 'https://rshogan.imgix.net/projects/play2winff/p2w_process.png',
  // management:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_management.png',
  // media: 'https://rshogan.imgix.net/projects/play2winff/p2w_media.png',
  // technologyReason:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_technology_reason.png',
  // purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_purpose.png',
  // resources: [
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_1.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_2.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_3.png',
  // ],

  //   link: 'https://swapi-nx.vercel.app/',
  //   github: '',
  //   category: ['React', 'Next', 'Typescript', 'API', 'NX', 'TailwindCSS'],
  //   isUnderConstruction: true,
  // },
  // {
  // slug: 'dnd-interactive-map',
  //   title: 'Interactive Map',
  //   image:
  //     'https://rshogan.imgix.net/projects/devblog/dev_blog-interactive-map.png',
  //   description:
  //     'A detailed map tailored for a DnD app, perfect for Dungeon Masters to keep track of their campaign.',
  // process: 'https://rshogan.imgix.net/projects/play2winff/p2w_process.png',
  // management:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_management.png',
  // media: 'https://rshogan.imgix.net/projects/play2winff/p2w_media.png',
  // technologyReason:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_technology_reason.png',
  // purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_purpose.png',
  // resources: [
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_1.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_2.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_3.png',
  // ],

  //   link: 'https://www.roberthogan.dev/projects/dnd-interactive-map',
  //   github: '',
  //   category: ['React', 'Next', 'NX', 'TailwindCSS'],
  //   isUnderConstruction: true,
  // },

  // {
  // slug: 'custom-google-search',
  //   title: 'Custom Google Search Tool',
  //   description:
  //     'A specialized tool aiding freelance web developers in finding potential clients.',
  // process: 'https://rshogan.imgix.net/projects/play2winff/p2w_process.png',
  // management:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_management.png',
  // media: 'https://rshogan.imgix.net/projects/play2winff/p2w_media.png',
  // technologyReason:
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_technology_reason.png',
  // purpose: 'https://rshogan.imgix.net/projects/play2winff/p2w_purpose.png',
  // resources: [
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_1.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_2.png',
  //   'https://rshogan.imgix.net/projects/play2winff/p2w_resources_3.png',
  // ],

  //   link: 'https://rshogan.imgix.net/projects/devblog/devblog_custom-google-search.png',
  //   github: '',
  //   category: ['React', 'TailwindCSS', 'Google'],
  //   isUnderConstruction: false,
  // },
];
