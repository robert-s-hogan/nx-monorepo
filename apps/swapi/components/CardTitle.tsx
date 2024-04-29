import { Heading } from '@with-nx/generic-ui';

interface Props {
  name: string;
  className?: string;
}

const CardTitle = ({ name, className }: Props) => {
  return <Heading level={3} className={className} text={name} />;
};

export default CardTitle;
