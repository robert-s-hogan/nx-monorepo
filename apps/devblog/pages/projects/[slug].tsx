import { useRouter } from 'next/router';

import DevBlogLayout from '../../components/DevBlogLayout';
import { projectsData } from '../../data/projects';

function ProjectPage({ project }) {
  if (!project) {
    return <p>Project not found!</p>;
  }
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!project) {
    // Handle missing project, for instance:
    return <p>Project not found!</p>;
  }

  return (
    <DevBlogLayout>
      <section
        className="bg-cover bg-center relative mt-0"
        style={{ backgroundImage: `url(${project.media})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl text-white relative z-10 text-center pt-32">
          {project.title}
        </h1>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Process</h2>
              <p className="text-gray-700">{project.process}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Project Management
              </h2>
              <p className="text-gray-700">{project.management}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Media</h2>
        <p>{project.media}</p>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Technologies Used
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            {project.technologyReason}
          </p>
          {/* If you have a list of tech used, map over them here and display as tiles or cards */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Why This Project?</h2>
          <p className="text-gray-700 leading-relaxed">{project.purpose}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">
            Resources & Acknowledgments
          </h2>
          <ul className="list-disc pl-5">
            {project.resources &&
              project.resources.map((resource) => (
                <li className="mb-2" key={resource}>
                  <a href={resource} className="text-blue-500 hover:underline">
                    {resource}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </DevBlogLayout>
  );
}

export default ProjectPage;

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  return {
    props: { project },
  };
}
