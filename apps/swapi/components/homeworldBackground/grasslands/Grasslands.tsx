import { useState, useEffect } from 'react';
// import './grasslands.css';

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
    <div className="w-full w-full bg-sky">
      <h3 className="z-10 absolute right-2 m-0 uppercase p-4 text-2xl font-light pr-6 text-brown">
        {homeworldName}
      </h3>
      <div className="hill2 absolute top-0 right-7 rounded-full w-96 h-72"></div>
      <div className="hill1 absolute bottom-32 left-7 rounded-full w-64 h-56"></div>
      <div className="ground absolute bottom-0 w-full h-52"></div>
      <div className="tree tree1 h-36 w-36 absolute bottom-36 left-0 rounded-full">
        <div className="trunk mt-16 ml-16">
          <div className="leftbranch absolute mt-3 -ml-6"></div>
          <div className="rightbranch absolute mt-1 ml-2"></div>
        </div>
      </div>
      <div className="tree tree2 h-36 w-36 absolute bottom-20 left-24 lg:left-12 rounded-full">
        <div className="trunk mt-16 ml-16">
          <div className="leftbranch absolute mt-3 -ml-6"></div>
          <div className="rightbranch absolute mt-1 ml-2"></div>
        </div>
      </div>
      <div className="tree tree3 h-36 w-36 absolute bottom-48 lg:bottom-40 right-12 lg:right-12 rounded-full">
        <div className="trunk mt-16 ml-16">
          <div className="leftbranch absolute mt-3 -ml-6"></div>
          <div className="rightbranch absolute mt-1 ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Grasslands;
