import JHoganComLayout from '../../components/JHoganComLayout';
import ProjectSection from '../../components/JHProjectSection';
import { Section } from '@with-nx/react-ui';
export default function Projects() {
  return (
    <JHoganComLayout>
      <Section>
        <ProjectSection />
      </Section>
    </JHoganComLayout>
  );
}
