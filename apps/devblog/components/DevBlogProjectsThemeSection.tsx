import { Heading } from '@with-nx/react-ui';
import { Text } from '@with-nx/generic-ui';
const DevBlogProjectsThemeSection = ({ title, description }) => (
  <div className="my-12">
    <Heading level={2} className="text-xl md:text-5xl text-on-secondary">
      {title}
    </Heading>
    <Text className="text-on-secondary" text={description} />
  </div>
);

export default DevBlogProjectsThemeSection;
