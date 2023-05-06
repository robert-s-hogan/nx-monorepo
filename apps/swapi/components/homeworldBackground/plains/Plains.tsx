import { useState, useEffect } from 'react';
import plainsStyles from './plains.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Plains: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className={`h-full w-full ${plainsStyles.bgPlains} bg-plains`}>
      <div
        className={`${plainsStyles.disc1} h-48 w-48 absolute top-28 left-16 xl:left-12 opacity-20 rounded-full`}
      ></div>
      <div
        className={`${plainsStyles.disc2} h-36 w-36 absolute top-36 left-22 xl:left-18 opacity-40 rounded-full`}
      ></div>
      <div
        className={`${plainsStyles.disc3} h-24 w-24 absolute top-44 left-28 xl:left-24 opacity-60 rounded-full`}
      ></div>
      <div
        className={`${plainsStyles.landscape1} absolute bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-44 2xl:bottom-52 h-16 -left-2 w-screen -rotate-8`}
      ></div>
      <div
        className={`${plainsStyles.landscape2}  absolute bottom-22 md:bottom-12 xl:bottom-8 2xl:-bottom-6 h-16 -left-2.5 w-screen rotate-8 2xl:rotate-12`}
      ></div>
      <div
        className={`${plainsStyles.landscape3} absolute bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-36 2xl:bottom-46 -left-2.5 h-16 w-screen -rotate-8`}
      ></div>
      <div
        className={`${plainsStyles.landscape4} absolute bottom-8 md:bottom-0 lg:bottom-4 2xl:bottom-2 -left-2.5 h-24 xl:h-16 w-screen rotate-2`}
      ></div>
      <div
        className={`${plainsStyles.landscape5} absolute -bottom-6 md:-bottom-4 lg:bottom-6 xl:bottom-12 2xl:bottom-24 -left-2.5 h-24 xl:h-20 w-screen -rotate-8`}
      ></div>
      <div
        className={`${plainsStyles.tree1} absolute top-72 left-30 w-5 h-4`}
      ></div>
      <div
        className={`${plainsStyles.tree2} absolute top-60 left-72 w-3.5 h-4`}
      ></div>
      <div
        className={`${plainsStyles.tree3} absolute top-52 left-10 w-5 h-6`}
      ></div>
      <div
        className={`${plainsStyles.tree4} absolute top-56 xl:top-56 left-28 w-4 h-5`}
      ></div>
      <div
        className={`${plainsStyles.tree5} absolute top-72 xl:top-56 left-64 w-7 h-8`}
      ></div>
      <div
        className={`${plainsStyles.tree6} absolute top-72 left-16 w-9 h-10`}
      ></div>
      <div
        className={`${plainsStyles.tree7} absolute top-80 xl:top-64 left-40 w-6 h-9`}
      ></div>
    </div>
  );
};

export default Plains;
