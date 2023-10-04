type Resources = string[];

type Entry = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  mobileTitle: string;
  image: string;
  description: string;
  process: Entry;
  management: Entry;
  media: Entry;
  technologyReason: Entry;
  purpose: Entry;
  resources?: Resources;
  link: string;
  github: string;
  category: string[];
  isUnderConstruction: boolean;
};

export const projectsData: Project[] = [
  {
    slug: 'play-2-win-ff',
    title: 'p2w Draft Tool',
    mobileTitle: 'p2w Draft Tool',
    image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    description:
      'Crafted for Yahoo fantasy football leagues, this tool is indispensable for tracking NFL updates.',
    process: {
      title: 'Development Approach',
      subtitle: 'Leveraging Expert Knowledge',
      description:
        'Utilizing a combination of React, Typescript, and the power of the NX environment, the Play2WinFF Draft Tool was systematically designed to deliver high performance. Merging the insights of seasoned fantasy football experts with cutting-edge coding techniques ensured a top-notch user experience.',
      image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    },
    management: {
      title: 'Seamless Data Integration',
      subtitle: 'Real-time Fantasy Football Data',
      description:
        "By integrating data from Yahoo's fantasy football league in real-time, the tool ensures users have up-to-the-minute updates. Furthermore, it combines this with custom opinions and rankings, leading to a comprehensive view of the player landscape.",
      image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    },
    media: {
      title: 'Engaging User Interface',
      subtitle: 'Visually Pleasing and Intuitive Design',
      description:
        'With an eye-catching design powered by TailwindCSS, the user interface was crafted to be not just aesthetically pleasing, but also user-friendly. The vivid imagery and intuitive design elements guide users effortlessly through the drafting process.',
      image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    },
    technologyReason: {
      title: 'Choice of Tech Stack',
      subtitle: 'Best-in-class Technologies for Optimal Performance',
      description:
        'The decision to utilize technologies like React, Typescript, and NX in a monorepo environment was driven by the need for performance, scalability, and maintainability. It ensures that the Play2WinFF Draft Tool remains responsive and adaptable to future expansions.',
      image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    },
    purpose: {
      title: 'Bridging the Gap',
      subtitle: 'Overcoming Limitations in Existing Tools',
      description:
        'While Yahoo provides a baseline for tracking fantasy football, its inherent limitations and single-source dependency prompted the creation of the Play2WinFF Draft Tool. This platform introduces custom rankings, opinions from various experts, and a sprinkle of personal insights to offer a more comprehensive and personalized drafting experience.',
      image: 'https://rshogan.imgix.net/projects/devblog/images/p2w_hero.jpg',
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://play2winff-nx.vercel.app/',
    github: '',
    category: ['React', 'Typescript', 'TailwindCSS', 'NX', 'Next', 'API'],
    isUnderConstruction: false,
  },
  {
    slug: 'react-ui-library',
    title: 'React UI Library',
    mobileTitle: 'React UI Library',
    image:
      'https://rshogan.imgix.net/projects/devblog/images/dev_blog_react-ui-library.jpg',
    description:
      'A comprehensive UI library tailored for React, constructed with precision, adaptability, and efficiency in mind.',
    process: {
      title: 'Adhering to Atomic Design',
      subtitle: 'Modular Component Architecture',
      description:
        'The React UI Library follows the atomic design pattern, promoting modularity, reusability, and maintainability. It divides components into atoms, molecules, organisms, templates, and pages, streamlining the development process while ensuring consistency.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog_react-ui-library.jpg',
    },
    management: {
      title: 'Blend of CSS Modules and TailwindCSS',
      subtitle: 'Tailored Styling Approach',
      description:
        'Depending on specific requirements, the library utilizes CSS modules or TailwindCSS. This dynamic approach ensures components retain their styling integrity, while also benefiting from the utility-first prowess of TailwindCSS.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_management.jpg',
    },
    media: {
      title: 'Visual Component Catalog',
      subtitle: 'Documented with Storybook',
      description:
        'Every component is meticulously documented in Storybook, offering preset examples, edge cases, and interactivity. This not only enhances developer experience but also acts as a comprehensive reference for users, ensuring optimal utilization of each component.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog_react-ui-library.jpg',
    },
    technologyReason: {
      title: 'Driven by Best Practices',
      subtitle: 'React, Jest, and More',
      description:
        "The choice to leverage React, TypeScript, Jest, and other modern technologies is rooted in the library's commitment to quality. Jest ensures each component's robustness through rigorous testing, while React and TypeScript offer the foundation for scalable and type-safe components.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_technology_reason.jpg',
    },
    purpose: {
      title: 'Bridging Inconsistencies',
      subtitle: 'Taking Control of UI Components',
      description:
        'Driven by a vision to have more control and achieve consistency, this React UI Library was birthed. It sidesteps the inconsistencies of third-party libraries, offering a reliable set of components, each designed with care and precision in a controlled NX monorepo environment.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_purpose.jpg',
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://roberthogan-dev-react-ui.vercel.app/',
    github: '', // You can provide the github link here if available.
    category: ['React', 'Typescript', 'CSS', 'Storybook', 'Jest', 'NX'],
    isUnderConstruction: false,
  },
  {
    slug: 'memory-game',
    title: 'Concentration',
    mobileTitle: 'Game of Memory',
    image:
      'https://rshogan.imgix.net/projects/devblog/images/dev_blog-concentration.jpg',
    description:
      'Delve into a nostalgic journey with "Concentration", an emblem of my foundational foray into web dev.',
    process: {
      title: 'Building from Scratch',
      subtitle: 'My Web Development Onset',
      description:
        'One of my earliest projects, this Memory Game became a playground for exploring the nuances of HTML, CSS, and JavaScript. It encapsulated challenges, revelations, and iterative learning – laying the groundwork for my web development journey.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-concentration.jpg',
    },
    management: {
      title: 'Managing Assets',
      subtitle: 'Curating a Visual Treat',
      description:
        "The game isn't just about logic; it's about visual engagement. By carefully curating assets that resonate with the essence of the classic game, the user experience was both nostalgic and immersive.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-concentration.jpg',
    },
    media: {
      title: 'Classic Game Design',
      subtitle: 'Rekindling Nostalgia',
      description:
        'Drawing from the classic "Game of Concentration", the design evokes a sense of nostalgia while being functional. The clean interface ensures users can focus on the game, while the curated assets add a touch of charm.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-concentration.jpg',
    },
    technologyReason: {
      title: 'Choosing Vanilla',
      subtitle: 'Back to the Basics',
      description:
        'Vanilla JavaScript, combined with basic HTML and CSS, was a conscious choice. It empowered me to grasp the fundamental principles of web development, ensuring a strong foundation without the distraction of complex frameworks or libraries.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_technology_reason.jpg',
    },
    purpose: {
      title: 'A Testament to Learning',
      subtitle: 'From Classroom to Real-world Application',
      description:
        'A pivotal project in the Udacity Front-End Nanodegree, this Memory Game became a testament to my dedication and readiness for an entry-level web development role. It was an affirmation of my skills, my learning curve, and my commitment to the craft.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_purpose.jpg',
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://robert-s-hogan.github.io/Project-Memory-Game/',
    github: 'https://github.com/robert-s-hogan/Project-Memory-Game',
    category: ['JavaScript', 'CSS', 'GithubPages'],
    isUnderConstruction: false,
  },
  {
    slug: 'swapi-plus',
    title: 'SWAPI+: A New Canon Begins',
    mobileTitle: 'SWAPI+: A New Canon Begins',
    image:
      'https://rshogan.imgix.net/projects/devblog/images/devblog-swapi-plus.webp',
    description:
      'Redefining the galaxy: An enhanced, interactive showcase of Star Wars characters, centered around the new Disney Canon, built using cutting-edge technologies.',
    process: {
      title: 'Embarking on a Galactic Journey',
      subtitle: 'Bridging Gaps in the Star Wars Universe',
      description:
        'SWAPI+ began as a response to outdated and occasionally erroneous data on swapi.net. Venturing into the vast Star Wars universe, I aimed to emphasize the new Disney Canon while offering richer, more accurate character details.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/devblog-swapi-plus.webp',
    },
    management: {
      title: 'Managing Interstellar Data',
      subtitle: 'Crafting a Holocron of Information',
      description:
        "Managing and curating data from a galaxy far, far away isn't easy. Leveraging serverless functions, SWAPI+ ensures an organized, seamless experience, even as it continues to evolve.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_management.jpg',
    },
    media: {
      title: 'Thematic Styles',
      subtitle: 'Aligning with the Force',
      description:
        'A unique feature of SWAPI+ is its thematic styling based on factions. Whether it’s the dark, enigmatic hues of the Sith or the hopeful, bright aesthetics of the Rebels, each section offers a distinct, immersive experience.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/devblog-swapi-plus.webp',
    },
    technologyReason: {
      title: 'Crafting with a Modern Stack',
      subtitle: 'Harnessing the Power of Technology',
      description:
        'React, Next.js, Typescript, API integrations, NX, and TailwindCSS form the backbone of SWAPI+. This state-of-the-art tech stack ensures scalability, efficiency, and a seamless user experience, setting the stage for future enhancements.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_technology_reason.jpg',
    },
    purpose: {
      title: 'Laying Foundations for the Galaxy',
      subtitle: 'The Journey Begins',
      description:
        'While SWAPI+ is still in its formative phase, its intent is clear: to offer fans a comprehensive, accurate, and interactive Star Wars character experience. The project currently lays the foundation for this ambitious goal, with more features on the horizon.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_purpose.jpg',
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://swapi-nx.vercel.app/',
    github: '', // If you do decide to add a GitHub link in the future, you can update this.
    category: ['React', 'Next', 'Typescript', 'API', 'NX', 'TailwindCSS'],
    isUnderConstruction: true,
  },
  {
    slug: 'interactive-map',
    title: 'DnD Campaign Cartographer',
    mobileTitle: 'DnD Campaign MapArt',
    description:
      'Crafted exclusively for Dungeons and Dragons enthusiasts, this map tool facilitates Dungeon Masters in charting their adventures, enabling a cohesive and engaging narrative experience for all players.',
    image: 'https://rshogan.imgix.net/projects/devblog/images/dev_blog-map.jpg',
    process: {
      title: 'The Art of Cartography in DnD',
      subtitle: 'A Digital Realm for Your Tales',
      description:
        'The map offers a visual manifestation of the intricate scenarios described by the Dungeon Master. With the ability to add, modify, and tailor icons, DMs can meticulously craft their world, ensuring the geography resonates with the unfolding narrative.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-map.jpg',
    },
    management: {
      title: 'Masterful Management of Your Realm',
      subtitle: 'Meticulous Details at Your Fingertips',
      description:
        'Every icon on the map encapsulates its unique lore and information. This provides DMs with a comprehensive grasp over every element within their campaign, ensuring no stone is left unturned in their story.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-interactive-map-management.jpg', // Placeholder; replace if you have a relevant image.
    },
    media: {
      title: 'Breathtaking Visuals for Immersive Gameplay',
      subtitle: 'Crafted with Modern Web Technologies',
      description:
        "Built with React and styled using TailwindCSS, the map interface offers an enticing, responsive, and intuitive experience. It's not just a map; it's a digital canvas where stories come alive.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-map.jpg',
    },
    technologyReason: {
      title: 'Why React, Next, NX, and TailwindCSS?',
      subtitle: 'Tools for an Engaging Fantasy World',
      description:
        'The chosen tech stack ensures a smooth, dynamic, and responsive experience. The amalgamation of these technologies allows for real-time updates and interactions, making the map a living part of the campaign.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-interactive-map-tech.jpg', // Placeholder; replace if you have a relevant image.
    },
    purpose: {
      title: 'For Dungeon Masters, By a Dungeon Master',
      subtitle: 'Elevate Your DnD Sessions',
      description:
        "Born out of a passion for Dungeons and Dragons and the desire to enhance group gameplay. The Interactive Map is more than a tool; it's a companion for DMs and players alike, enabling richer storytelling and captivating encounters.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/dev_blog-interactive-map-purpose.jpg', // Placeholder; replace if you have a relevant image.
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://www.roberthogan.dev/projects/dnd-interactive-map',
    github: '',
    category: ['React', 'Next', 'NX', 'TailwindCSS'],
    isUnderConstruction: true,
  },
  {
    slug: 'custom-google-search',
    title: 'Freelance Web Scout',
    mobileTitle: 'Solo Web Scout',
    image:
      'https://rshogan.imgix.net/projects/devblog/images/devblog_custom-google-search-2.jpg',
    description:
      'Empowering freelance web developers with the toolset to discover potential clientele through aging websites in need of a facelift.',
    process: {
      title: 'Crafting A Digital Prospector',
      subtitle: 'Discovering Websites Lost in Time',
      description:
        "I embarked on the journey to develop a tool that harnesses Google's Custom Search API, tailored to sieve through the vast internet and unearth older websites. With parameters like website age, file type, and specific exclusion terms, this tool offers targeted search results that identify websites ripe for rejuvenation.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_process.jpg',
    },
    management: {
      title: 'Efficient Search Management',
      subtitle: 'Optimized Searches with Precision',
      description:
        'By integrating specific parameters, the tool efficiently pinpoints older websites, enabling developers to propose modern redesigns and optimizations. The exclusion terms ensure more accurate search results, sidestepping unnecessary or irrelevant listings.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_management.jpg',
    },
    media: {
      title: 'A User-Friendly Interface',
      subtitle: 'Simplicity Meets Functionality',
      description:
        'Built with React and styled with TailwindCSS, the tool’s interface is intuitive and streamlined. Freelancers can easily input their search criteria and quickly generate a list of potential leads.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/devblog_custom-google-search-2.jpg',
    },
    technologyReason: {
      title: 'Why Google’s Custom Search API?',
      subtitle: 'The Power of Advanced Search',
      description:
        "I opted for Google's Custom Search API due to its robustness and adaptability. Tailoring search parameters allowed me to achieve a higher degree of accuracy, ensuring users find exactly what they're looking for, and in this case, websites needing a refresh.",
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_technology_reason.jpg',
    },
    purpose: {
      title: 'Empowering the Freelance Community',
      subtitle: 'Generating Valuable Leads',
      description:
        'This tool serves more than just a technical exercise. It embodies a solution for freelancers, aiding them in the hunt for potential clients and opportunities. The ability to identify aging websites presents a niche yet valuable market for web developers.',
      image:
        'https://rshogan.imgix.net/projects/devblog/images/p2w_purpose.jpg',
    },
    resources: ['#1', '#2', '#3'],
    link: 'https://rshogan.imgix.net/projects/devblog/images/devblog_custom-google-search.jpg',
    github: '',
    category: ['React', 'TailwindCSS', 'Google'],
    isUnderConstruction: true,
  },
];
