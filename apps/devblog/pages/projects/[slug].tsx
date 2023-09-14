import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { Box, Button, Heading, Section } from '@with-nx/react-ui';

import DevBlogLayout from '../../components/DevBlogLayout';
import DevBlogSubTitle from '../../components/DevBlogSubTitle';
import DevBlogSection from '../../components/DevBlogSection';
import DevBlogProjectsThemeSection from '../../components/DevBlogProjectsThemeSection';
import { projectsData } from '../../data/projects';

function ProjectPage({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !project) {
    return <p>Project not found!</p>;
  }

  return (
    <DevBlogLayout>
      <DevBlogSection
        className="bg-cover bg-center relative mt-0"
        style={{ backgroundImage: `url(${project.media.image})` }}
      >
        <div className="absolute inset-0 bg-image-overlay opacity-50"></div>
        <Heading
          level={1}
          className="h-full w-auto my-auto relative z-10 text-center pt-32 break-normal"
        >
          {project.title}
        </Heading>
        <DevBlogSubTitle className="text-center relative z-10 text-white">
          {project.description}
        </DevBlogSubTitle>

        <div
          className={`w-full relative z-10 flex justify-center text-black mt-8 pb-32`}
        >
          <Link
            href={project.link}
            target="_blank"
            className={project.isUnderConstruction ? 'no-underline' : ''}
          >
            <Button
              className="btn-primary"
              disabled={project.isUnderConstruction}
              icon={
                project.isUnderConstruction ? (
                  <BiWrench size={18} className="mr-2" />
                ) : (
                  ''
                )
              }
            >
              {project.isUnderConstruction
                ? 'Under Construction'
                : 'Live Project'}
            </Button>
          </Link>
          {project.github && (
            <Box className="mx-3 text-3xl text-white font-extralight">|</Box>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="hover:text-vivid-500"
            >
              <Button className="btn-secondary">
                <FiGithub
                  size={24}
                  className="text-white hover:text-vivid-500"
                />
              </Button>
            </Link>
          )}
        </div>
      </DevBlogSection>

      <DevBlogSection maxWidth={true} className="bg-secondary-color">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <DevBlogProjectsThemeSection
              title={project.process.title}
              description={project.process.description}
            />
            <DevBlogProjectsThemeSection
              title={project.management.title}
              description={project.management.description}
            />
          </div>
        </div>
      </DevBlogSection>

      <DevBlogSection className="">
        <Heading level={2}>{project.media.title}</Heading>
        <p>{project.media.description}</p>
      </DevBlogSection>

      <DevBlogSection maxWidth={true} className="bg-secondary-color">
        <div className="container max-w-7xl mx-auto px-4">
          <DevBlogProjectsThemeSection
            title={project.technologyReason.title}
            description={project.technologyReason.description}
          />
        </div>
        {/* If you have a list of tech used, map over them here and display as tiles or cards */}
      </DevBlogSection>

      <DevBlogSection className="">
        <Heading level={2}>{project.purpose.title}</Heading>
        <p className="leading-relaxed">{project.purpose.description}</p>
      </DevBlogSection>

      {project.resources && (
        <DevBlogSection maxWidth={true} className="bg-secondary-color">
          <div className="container max-w-7xl mx-auto px-2">
            <DevBlogProjectsThemeSection
              title="Resources & Acknowledgments"
              description={project.resources.description}
            />
            <ul
              className="list-disc pl-5"
              style={{ color: 'var(--text-on-secondary-color)' }}
            >
              {project.resources.map((resource) => (
                <li className="mb-2" key={resource}>
                  <Link
                    href={resource}
                    className="hover:underline"
                    style={{ color: 'var(--text-on-secondary-color)' }}
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </DevBlogSection>
      )}
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
