import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { Box, Button, Flex, Heading, Section } from '@with-nx/react-ui';
import { ButtonLink } from '@with-nx/nextjs-react-ui';

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
        className="bg-cover bg-center relative my-0"
        style={{ backgroundImage: `url(${project.media.image})` }}
      >
        <div className="absolute inset-0 bg-image-overlay opacity-50"></div>
        <Heading
          level={1}
          className="h-full w-auto my-auto relative z-10 text-center pt-32 break-normal"
        >
          <span className="hidden md:inline-block text-5xl">
            {project.title}
          </span>
          <span className="text-5xl md:hidden">{project.mobileTitle}</span>
        </Heading>
        <DevBlogSubTitle className="text-center relative z-10">
          {project.description}
        </DevBlogSubTitle>

        <div className={`w-full relative z-10 flex justify-center  mt-8 pb-32`}>
          <ButtonLink
            href={project.link}
            target="_blank"
            disabled={project.isUnderConstruction}
            className={`btn-primary ${
              project.isUnderConstruction ? 'disabled no-underline' : ''
            }`}
          >
            {project.isUnderConstruction ? (
              <Flex className="space-x-4 items-center cursor-not-allowed">
                <BiWrench size={18} className="mr-2" />
                Under Construction
              </Flex>
            ) : (
              'Live Project'
            )}
          </ButtonLink>
          {project.github && (
            <Box className="mx-3 text-3xl font-extralight">|</Box>
          )}
          {project.github && (
            <ButtonLink
              href={project.github}
              target="_blank"
              className={`btn-secondary icon-white`}
            >
              <FiGithub size={24} />
            </ButtonLink>
          )}
        </div>
      </DevBlogSection>

      <DevBlogSection maxWidth={true} className="bg-secondary-color">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
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
        <Heading level={2} className="text-xl md:text-5xl">
          {project.media.title}
        </Heading>
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
        <Heading level={2} className="text-xl md:text-5xl">
          {project.purpose.title}
        </Heading>
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
