import DevBlogLayout from '../components/layout/DevBlogLayout';
import { Link } from '@with-nx/react-ui';

export function Index() {
  const projectData = [
    {
      title: 'Project 1',
      description: 'This is a project',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 3',
      description: 'This is a project',
      link: 'https://www.google.com',
    },
  ];

  return (
    <DevBlogLayout>
      <div className="container max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1>
            Hello, I am Robert Hogan Front End Developer and UI/UX Engineer
          </h1>
          <p>Moving my site from Netlify/Gatsby to Vercel/NX/Next.js</p>
          <div className="space-x-4 flex">
            <Link
              href="mailto:robert@robertshogan.com"
              className=" hover:text-vivid-500"
              aria-label="Mail Icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/robert-s-hogan/"
              className="hover:text-vivid-500"
              aria-label="Linked Icon"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </div>
          <div>
            <h2>Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projectData.map((project) => {
              return (
                <div key={project.title} className="card">
                  <div className="card-body">
                    <h3 className="card-title text-black">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DevBlogLayout>
  );
}

export default Index;
