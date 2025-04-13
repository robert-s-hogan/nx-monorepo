import Image from 'next/image';
import { Grid, Heading } from '@with-nx/react-ui';
import { Text } from '@with-nx/generic-ui';
import Link from 'next/link';

import { projectsData } from '../../data/projects';
import DevBlogLayout from '../../components/DevBlogLayout';
import { Section } from '../../components/atomic/organisms/Section';

const ProjectPage = ({ projects }) => {
  return (
    <DevBlogLayout
      title="Robert Hogan's Projects - Digital Creations & Front-End Craftsmanship"
      description="Dive into Robert Hogan's curated showcase of digital projects, from cutting-edge tools and apps to libraries and immersive interfaces. Each piece demonstrates mastery in front-end development and user experience design."
    >
      <Section className="space-y-6">
        <Heading level={1}>Projects</Heading>
        <Text
          className="mx-auto max-w-3xl pb-6"
          text="Discover a diverse array of my digital creations, ranging from tools
          to apps, and from libraries to immersive interfaces. Each piece
          showcases the pinnacle of front-end craftsmanship and my dedication to
          creating seamless user experiences. Explore and connect!"
        />
        <Grid className="md:12 grid-cols-1 gap-6 space-y-4 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="relative h-[400px] w-full overflow-hidden rounded md:h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={400}
                  className="h-[400px] w-full rounded object-cover md:h-[400px]"
                />

                <div className="bg-image-overlay image-overlay absolute inset-0 lg:hover:opacity-100"></div>
              </div>

              <Heading level={3} className="py-6">
                <span className="hidden md:inline-block">{project.title}</span>
                <span className="md:hidden">{project.mobileTitle}</span>
              </Heading>
              <Text className="h-auto md:h-36" text={project.description} />
            </Link>
          ))}
        </Grid>
      </Section>
    </DevBlogLayout>
  );
};

export default ProjectPage;

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};
