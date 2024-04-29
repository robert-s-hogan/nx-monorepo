import { useRouter } from 'next/navigation';

import { Heading } from '@with-nx/generic-ui';

const ItemsIdPage = () => {
  const router = useRouter();

  return (
    <div>
      <Heading level={1} text="itemsId" />
    </div>
  );
};

export default ItemsIdPage;
