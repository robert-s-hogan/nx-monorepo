import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Flex, Heading } from '@with-nx/react-ui';
import { ButtonLink } from '@with-nx/nextjs-react-ui';
import { FiGithub } from 'react-icons/fi';
import { GiMonkeyWrench } from 'react-icons/gi';
import { Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../../components/DevBlogLayout';
import DevBlogSection from '../../components/DevBlogSection';
import DevBlogProjectsThemeSection from '../../components/DevBlogProjectsThemeSection';
import { projectsData } from '../../data/projects';

import { getIconForCategory } from '../../utils/getIconForCategory';

function ProjectPage({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !project) {
    return <p>Project not found!</p>;
  }

  return (
    <DevBlogLayout
      title={`${project.title} | Robert Hogan's Projects`}
      description={project.description}
    >
      <div
        className="bg-cover bg-center relative my-0"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-image-overlay opacity-50"></div>

        <DevBlogSection>
          <Heading
            level={1}
            className="h-full w-auto my-auto relative z-10 text-center pt-32 break-normal [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
          >
            <span className="hidden md:inline-block text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              {project.title}
            </span>
            <span className="text-5xl md:hidden">{project.mobileTitle}</span>
          </Heading>

          <Text
            className="text-center relative z-10"
            text={project.description}
          />

          <div className="w-full relative z-10 flex justify-center mt-8 pb-32">
            <ButtonLink
              href={project.link}
              target="_blank"
              disabled={project.isUnderConstruction}
              className={`${
                project.isUnderConstruction
                  ? 'disabled no-underline'
                  : 'btn-primary'
              }`}
            >
              {project.isUnderConstruction ? (
                <Flex className="space-x-4 items-center cursor-not-allowed">
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
                className="btn-secondary icon-white"
              >
                <FiGithub className="h-12 w-12" />
              </ButtonLink>
            )}
          </div>

          <Flex className="max-w-fit shadow-lg mx-auto justify-center items-center h-10 py-2 ">
            {project.category.map((cat) => (
              <span
                key={cat}
                className={`relative z-10 text-2xl rounded-full overflow-hidden p-2 bg-bg-color shadow-lg ${
                  cat === 'GithubPages'
                    ? 'flex items-center justify-center'
                    : ''
                }`}
              >
                {getIconForCategory(cat)}
              </span>
            ))}
          </Flex>
        </DevBlogSection>
      </div>

      <div className="w-full bg-secondary-color">
        <DevBlogSection>
          <div className="grid grid-cols-1 gap-12">
            <DevBlogProjectsThemeSection
              title={project.process.title}
              description={project.process.description}
            />
          </div>
        </DevBlogSection>
      </div>

      <DevBlogSection className="">
        <DevBlogProjectsThemeSection
          title={project.management.title}
          description={project.management.description}
        />
      </DevBlogSection>

      <div className="w-full bg-secondary-color">
        <DevBlogSection>
          <Heading level={2} className="text-xl md:text-5xl">
            {project.media.title}
          </Heading>
          <p>{project.media.description}</p>
        </DevBlogSection>
      </div>

      <DevBlogSection className="">
        <DevBlogProjectsThemeSection
          title={project.technologyReason.title}
          description={project.technologyReason.description}
        />
        {/* If you have a list of tech used, map over them here and display as tiles or cards */}
      </DevBlogSection>

      <div className="w-full bg-secondary-color">
        <DevBlogSection>
          <Heading level={2} className="text-xl md:text-5xl">
            {project.purpose.title}
          </Heading>
          <Text
            className="leading-relaxed"
            text={project.purpose.description}
          />
        </DevBlogSection>
      </div>

      {/* {project.resources && (
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
      )} */}
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

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
}
