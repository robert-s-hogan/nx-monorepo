import { useState, useEffect } from 'react';
import lakesStyles from './lakes.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Lakes: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`w-96 h-96 lg:w-80 xl:w-72 relative ${lakesStyles.bgLakes}`}
    >
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <div className={`${lakesStyles.landscape} w-96 z-10`}>
        <div
          className={`${lakesStyles.mountain} absolute -left-10 h-24 w-24 md:w-48 xl:w-40}`}
        ></div>
        <div
          className={`${lakesStyles.mountain} ${lakesStyles.mountain2} hidden}`}
        ></div>
        <div
          className={`${lakesStyles.mountain} ${lakesStyles.mountain3} hidden}`}
        ></div>
        <div
          className={`${lakesStyles.sunContainer} ${lakesStyles.sunContainer1}`}
        ></div>
        <div className={`${lakesStyles.sunContainer}`}>
          <div className={`${lakesStyles.sun}`}></div>
        </div>
        <div className={`${lakesStyles.cloud}`}></div>
        <div className={`${lakesStyles.cloud} ${lakesStyles.cloudC}`}></div>
        <div
          className={`${lakesStyles.sunContainer} ${lakesStyles.sunContainerReflection}`}
        >
          <div className={`${lakesStyles.sun}`}></div>
        </div>
        <div className={`${lakesStyles.light}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light1}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light2}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light3}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light4}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light5}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light6}`}></div>
        <div className={`${lakesStyles.light} ${lakesStyles.light7}`}></div>
        <div className={`${lakesStyles.water}`}></div>
        <div className={`${lakesStyles.splash}`}></div>
        <div className={`${lakesStyles.splash} ${lakesStyles.delay1}`}></div>
        <div className={`${lakesStyles.splash} ${lakesStyles.delay2}`}></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splash4} ${lakesStyles.delay2}`}
        ></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splash4} ${lakesStyles.delay3}`}
        ></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splash4} ${lakesStyles.delay4}`}
        ></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splashstone} ${lakesStyles.delay3}`}
        ></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splashstone} ${lakesStyles.splash4}`}
        ></div>
        <div
          className={`${lakesStyles.splash} ${lakesStyles.splashstone} ${lakesStyles.splash5}`}
        ></div>
        <div className={`${lakesStyles.lotus} ${lakesStyles.lotus1}`}></div>
        <div className={`${lakesStyles.lotus} ${lakesStyles.lotus2}`}></div>
        <div className={`${lakesStyles.lotus} ${lakesStyles.lotus3}`}></div>
        <div className={`${lakesStyles.front}`}>
          <div className={`${lakesStyles.stone}`}></div>
          <div className={`${lakesStyles.grass}`}></div>
          <div className={`${lakesStyles.grass} ${lakesStyles.grass1}`}></div>
          <div className={`${lakesStyles.grass} ${lakesStyles.grass2}`}></div>
          <div className={`${lakesStyles.reed}`}></div>
          <div className={`${lakesStyles.reed} ${lakesStyles.reed1}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Lakes;
