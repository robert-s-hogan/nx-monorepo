import { Flex } from '@with-nx/generic-ui';

const SwapiCardsHero: React.FC = () => {
  return (
    <div className="max-w-4xl container mx-auto my-4 md:flex md:justify-center">
      <Flex className="justify-center my-4 space-x-8">
        <div className="letter-box bg-sky">S</div>
        <div className="letter-box bg-yellow">T</div>
        <div className="letter-box bg-orange">A</div>
        <div className="letter-box bg-red">R</div>
      </Flex>
      <Flex className="justify-center ml-0 md:ml-8 my-4 space-x-8">
        <div className="letter-box bg-pink">W</div>
        <div className="letter-box bg-green">A</div>
        <div className="letter-box bg-dark-blue">R</div>
        <div className="letter-box bg-purple">S</div>
      </Flex>
    </div>
  );
};

export default SwapiCardsHero;
