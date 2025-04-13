import Image from 'next/image';

import { Heading, Link } from '@with-nx/react-ui';
import { Text } from '@with-nx/generic-ui';

const DevBlogHighlightedProject = ({ project }) => {
  return (
    <div className="no-underline-on-hover relative w-full">
      <Link
        href={`/projects/${project.slug}`}
        className="no-underline-on-hover static"
      >
        <Image
          src={project.image}
          height={400}
          width={400}
          alt={project.title}
          className="h-[400px] w-full object-cover  md:h-[400px]"
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 400px"
        />

        <div className="bg-image-overlay !absolute inset-0 flex w-full flex-col items-center justify-center space-y-6 rounded bg-black/60 p-4 md:py-6 md:px-2">
          <Heading level={3} className="text-center">
            <span className="hidden md:inline-block">{project.title}</span>
            <span className="md:hidden">{project.mobileTitle}</span>
          </Heading>
          <Text className="w-full text-center" text={project.description} />
        </div>
      </Link>
    </div>
  );
};

export default DevBlogHighlightedProject;
