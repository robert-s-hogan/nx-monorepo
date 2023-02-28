// import { IconType } from 'react-icons';
// import { Icon } from '@with-nx/react-ui';
// import useSWR from 'swr';

export interface ProjectItemProps {
  name: string;
  // icon: IconType;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ name }) => {
  // const { data: IconComponent, error } = useSWR(project.icon);

  //   console.log(`IconComponent: ${IconComponent}`);

  // if (error) {
  //   return <div>Error loading icon</div>;
  // }

  return (
    <div className="flex items-center justify-between">
      {/* <Icon icon={project.icon} size={24} color="black" /> */}

      <h3 className="mx-3 text-lg font-semibold text-black">{name}</h3>
    </div>
  );
};

export default ProjectItem;
