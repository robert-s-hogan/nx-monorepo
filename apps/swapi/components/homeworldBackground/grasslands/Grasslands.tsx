import { useState, useEffect } from 'react';
import grasslandsStyles from './grasslands.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Grasslands: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className={`${grasslandsStyles.bgSky} w-full bg-sky`}>
      <h3 className="z-10 absolute right-2 m-0 uppercase p-4 text-2xl font-light pr-6 text-brown">
        {homeworldName}
      </h3>
      <div
        className={`${grasslandsStyles.hill2} absolute top-0 right-7 rounded-full w-96 h-72`}
      ></div>
      <div
        className={`${grasslandsStyles.hill1} absolute bottom-32 left-7 rounded-full w-64 h-56`}
      ></div>
      <div
        className={`${grasslandsStyles.ground} absolute bottom-0 w-full h-52`}
      ></div>
      <div
        className={`${grasslandsStyles.tree} tree1 h-36 w-36 absolute bottom-36 left-0 rounded-full`}
      >
        <div className={`${grasslandsStyles.trunk} mt-16 ml-16`}>
          <div
            className={`${grasslandsStyles.leftBranch} absolute mt-3 -ml-6`}
          ></div>
          <div
            className={`${grasslandsStyles.rightBranch} absolute mt-1 ml-2`}
          ></div>
        </div>
      </div>
      <div
        className={`${grasslandsStyles.tree} tree2 h-36 w-36 absolute bottom-20 left-24 lg:left-12 rounded-full`}
      >
        <div className={`${grasslandsStyles.trunk} mt-16 ml-16`}>
          <div
            className={`${grasslandsStyles.leftBranch} absolute mt-3 -ml-6`}
          ></div>
          <div
            className={`${grasslandsStyles.rightBranch} absolute mt-1 ml-2`}
          ></div>
        </div>
      </div>
      <div
        className={`${grasslandsStyles.tree} tree3 h-36 w-36 absolute bottom-48 lg:bottom-40 right-12 lg:right-12 rounded-full`}
      >
        <div className={`${grasslandsStyles.trunk} mt-16 ml-16`}>
          <div
            className={`${grasslandsStyles.leftBranch} absolute mt-3 -ml-6`}
          ></div>
          <div
            className={`${grasslandsStyles.rightBranch} absolute mt-1 ml-2`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Grasslands;
