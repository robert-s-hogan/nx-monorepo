import { useState, useEffect } from 'react';
import './barren.scss';

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
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black">
        {homeworldName}
      </h3>
      <div className="content-wrapper w-96 h-96 relative lg:w-80 xl:w-72 ">
        <div className="stars-wrapper">
          <div className="star s1"></div>
          <div className="star s2"></div>
          <div className="star s3"></div>
          <div className="star s4"></div>
          <div className="star s5"></div>
          <div className="star s6"></div>
          <div className="star s7"></div>
          <div className="star s8"></div>
          <div className="star s9"></div>
          <div className="star s10"></div>
          <div className="star s11"></div>
          <div className="star s12"></div>
          <div className="star s13"></div>
          <div className="star s14"></div>
        </div>
        <div className="sun"></div>
        <div className="mountain m2"></div>
        <div className="mountain m1"></div>
        <div className="cactus c2">
          <div className="arm left"></div>
          <div className="arm right"></div>
        </div>
        <div className="cactus c1">
          <div className="arm left"></div>
          <div className="arm right"></div>
        </div>
      </div>
    </div>
  );
};

export default Barren;
