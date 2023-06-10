import Image from 'next/image';
import { Grid, Heading } from '@with-nx/react-ui';

import MachineLearningImage from '../public/images/machine-learning-project.jpg';
import JHPortrait from '../public/images/jessica_portrait.webp';

const CacheTest = () => {
  return (
    <div>
      <Heading level={1}>Cache Test</Heading>
      <Grid className="grid-cols-2">
        <Image
          src={MachineLearningImage}
          alt="Machine Learning"
          layout="responsive"
          width={500}
          height={500}
        />
        <Image
          src={JHPortrait}
          alt="Machine Learning"
          layout="responsive"
          width={400}
          height={400}
        />
      </Grid>
    </div>
  );
};

export default CacheTest;
