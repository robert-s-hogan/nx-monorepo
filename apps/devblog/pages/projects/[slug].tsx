import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { Box, Button, Heading, Section } from '@with-nx/react-ui';

import DevBlogLayout from '../../components/DevBlogLayout';
import { projectsData } from '../../data/projects';

function ProjectPage({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !project) {
    return <p>Project not found!</p>;
  }

  return (
    <DevBlogLayout>
      <Section
        className="bg-cover bg-center relative mt-0"
        style={{ backgroundImage: `url(${project.media.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Heading
          level={1}
          className="h-full my-auto relative z-10 text-center pt-32"
        >
          {project.title}
        </Heading>

        <div className={`w-full flex justify-center text-black mt-8 pb-32`}>
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
      </Section>

      <Section className="">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Heading level={2}>{project.process.title}</Heading>
              <p>{project.process.description}</p>
            </div>
            <div>
              <Heading level={2}>{project.management.title}</Heading>
              <p>{project.management.description}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="">
        <Heading level={2}>{project.media.title}</Heading>
        <p>{project.media.description}</p>
      </Section>

      <Section className="">
        <div className="container mx-auto px-4">
          <Heading level={2} className="text-center">
            {project.technologyReason.title}
          </Heading>
          <p className="mb-8 text-center">
            {project.technologyReason.description}
          </p>
          {/* If you have a list of tech used, map over them here and display as tiles or cards */}
        </div>
      </Section>

      <Section className="">
        <div className="container mx-auto px-4">
          <Heading level={2}>{project.purpose.title}</Heading>
          <p className="leading-relaxed">{project.purpose.description}</p>
        </div>
      </Section>

      {project.resources && (
        <Section className="">
          <div className="container mx-auto px-4">
            <Heading level={2}>Resources & Acknowledgments</Heading>
            <ul className="list-disc pl-5">
              {project.resources &&
                project.resources.map((resource) => (
                  <li className="mb-2" key={resource}>
                    <Link href={resource} className="hover:underline">
                      {resource}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </Section>
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
