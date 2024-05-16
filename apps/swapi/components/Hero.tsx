import { Flex } from '@with-nx/generic-ui';

const Hero = () => {
  return (
    <div className="max-w-7xl container mx-auto my-4 md:flex md:justify-center">
      <Flex className="justify-center my-4 space-x-8">
        <div className="letter-box bg-skyBlue">S</div>
        <div className="letter-box bg-auburn">T</div>
        <div className="letter-box bg-orange">A</div>
        <div className="letter-box bg-red">R</div>
      </Flex>
      <Flex className="justify-center ml-0 md:ml-8 my-4 space-x-8">
        <div className="letter-box bg-pink">W</div>
        <div className="letter-box bg-green">A</div>
        <div className="letter-box bg-darkBlue">R</div>
        <div className="letter-box bg-purple">S</div>
      </Flex>
    </div>
  );
};

export default Hero;
