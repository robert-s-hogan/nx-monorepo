import { useState, useEffect } from 'react';
import toxicCloudseaStyles from './toxicCloudsea.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const ToxicCloudsea = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className={`w-96 h-96 relative lg:w-80 xl:w-full bg-toxicSea z-0`}>
      <div className={`${toxicCloudseaStyles.bgToxicCloudsea} relative`}>
        <div className={`${toxicCloudseaStyles.cloudContainer}`}>
          <div className={`${toxicCloudseaStyles.square} `}>
            <div
              className={`${toxicCloudseaStyles.bubbles} absolute bottom-10`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToxicCloudsea;
