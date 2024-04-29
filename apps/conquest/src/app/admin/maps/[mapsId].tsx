import { useRouter } from 'next/navigation';
import { Heading } from '@with-nx/generic-ui';
const MapsIdPage = () => {
  const router = useRouter();

  return (
    <div>
      <Heading level={1} text={`Dynamic Route: `} />
    </div>
  );
};

export default MapsIdPage;
