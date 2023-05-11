import { useState, useEffect } from 'react';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Desert = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-full h-full">
      <div className="row-one bg-tan absolute w-full h-14 top-0"></div>
      <div className="row-two bg-yellow absolute w-full h-14 top-14"></div>
      <div className="row-three bg-orange absolute w-full h-14 top-28"></div>
      <div className="row-four bg-red absolute w-full h-14 top-40"></div>
      <div className="row-five bg-brown absolute w-full h-41 z-10 top-52"></div>
      <div className="details">
        <div className="big-circle bg-red absolute -left-8 top-24 w-36 h-36 rounded-full"></div>
        <div className="small-circle bg-red absolute rounded-full top-36 left-36 w-20 h-20"></div>
        <div className="hut-circle absolute bg-brown rounded-full h-20 w-20 left-8 top-44"></div>
        <div className="hut-entrance absolute bg-brown h-6 w-6 top-48 left-24"></div>
      </div>
    </div>
  );
};

export default Desert;
