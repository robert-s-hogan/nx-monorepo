import { useState, useEffect } from 'react';
import barrenStyles from './barren.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Barren: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-barren z-0">
      <div
        className={`${barrenStyles.contentWrapper} w-96 h-96 relative lg:w-80 xl:w-72`}
      >
        <div className={`${barrenStyles.starsWrapper}`}>
          <div className={`${barrenStyles.star} ${barrenStyles.s1}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s2}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s3}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s4}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s5}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s6}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s7}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s8}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s9}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s10}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s11}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s12}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s13}`}></div>
          <div className={`${barrenStyles.star} ${barrenStyles.s14}`}></div>
        </div>
        <div className={`${barrenStyles.sun}`}></div>
        <div className={`${barrenStyles.mountain} ${barrenStyles.m2}`}></div>
        <div className={`${barrenStyles.mountain} ${barrenStyles.m1}`}></div>
        <div className={`${barrenStyles.cactus} ${barrenStyles.c2}`}>
          <div className={`${barrenStyles.arm} ${barrenStyles.left}`}></div>
          <div className={`${barrenStyles.arm} ${barrenStyles.right}`}></div>
        </div>
        <div className={`${barrenStyles.cactus} ${barrenStyles.c1}`}>
          <div className={`${barrenStyles.arm} ${barrenStyles.left}`}></div>
          <div className={`${barrenStyles.arm} ${barrenStyles.right}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Barren;
