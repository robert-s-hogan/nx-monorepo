import { Heading } from '@with-nx/react-ui';

const DevBlogProjectsThemeSection = ({ title, description }) => (
  <div className="my-12">
    <Heading level={2} className="text-xl md:text-5xl text-on-secondary">
      {title}
    </Heading>
    <p className="text-on-secondary">{description}</p>
  </div>
);

export default DevBlogProjectsThemeSection;
