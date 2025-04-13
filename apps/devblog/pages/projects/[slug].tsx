import { useRouter } from 'next/router';

import { Box, Flex, Heading } from '@with-nx/react-ui';
import { ButtonLink } from '@with-nx/nextjs-react-ui';
import { FiGithub } from 'react-icons/fi';
import { Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../../components/DevBlogLayout';
import { Section } from '../../components/atomic/organisms/Section';
import DevBlogProjectsThemeSection from '../../components/DevBlogProjectsThemeSection';
import { projectsData } from '../../data/projects';

import { getIconForCategory } from '../../utils/getIconForCategory';

function ProjectPage({ project }) {
  const router = useRouter();

  if (router.isFallback || !project) {
    return <p>Project not found!</p>;
  }

  return (
    <DevBlogLayout
      title={`${project.title} | Robert Hogan's Projects`}
      description={project.description}
    >
      <div
        className="relative my-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="bg-image-overlay absolute inset-0 opacity-50"></div>

        <Section>
          <Heading
            level={1}
            className="relative z-10 my-auto h-full w-auto break-normal pt-32 text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
          >
            <span className="hidden text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:inline-block">
              {project.title}
            </span>
            <span className="text-5xl md:hidden">{project.mobileTitle}</span>
          </Heading>

          <Text
            className="relative z-10 text-center"
            text={project.description}
          />

          <div className="relative z-10 mt-8 flex w-full justify-center pb-32">
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
                <Flex className="cursor-not-allowed items-center space-x-4">
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

          <Flex className="mx-auto h-10 max-w-fit items-center justify-center py-2 shadow-lg ">
            {project.category.map((cat) => (
              <span
                key={cat}
                className={`bg-bg-color relative z-10 overflow-hidden rounded-full p-2 text-2xl shadow-lg ${
                  cat === 'GithubPages'
                    ? 'flex items-center justify-center'
                    : ''
                }`}
              >
                {getIconForCategory(cat)}
              </span>
            ))}
          </Flex>
        </Section>
      </div>

      <div className="bg-secondary-color w-full">
        <Section>
          <div className="grid grid-cols-1 gap-12">
            <DevBlogProjectsThemeSection
              title={project.process.title}
              description={project.process.description}
            />
          </div>
        </Section>
      </div>

      <Section className="">
        <DevBlogProjectsThemeSection
          title={project.management.title}
          description={project.management.description}
        />
      </Section>

      <div className="bg-secondary-color w-full">
        <Section>
          <Heading level={2} className="text-xl md:text-5xl">
            {project.media.title}
          </Heading>
          <p>{project.media.description}</p>
        </Section>
      </div>

      <Section className="">
        <DevBlogProjectsThemeSection
          title={project.technologyReason.title}
          description={project.technologyReason.description}
        />
        {/* If you have a list of tech used, map over them here and display as tiles or cards */}
      </Section>

      <div className="bg-secondary-color w-full">
        <Section>
          <Heading level={2} className="text-xl md:text-5xl">
            {project.purpose.title}
          </Heading>
          <Text
            className="leading-relaxed"
            text={project.purpose.description}
          />
        </Section>
      </div>

      {/* {project.resources && (
        <Section maxWidth={true} className="bg-secondary-color">
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
        </Section>
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
