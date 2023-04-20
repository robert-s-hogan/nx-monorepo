import ChilloutLayout from '../components/layout/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text } from '@with-nx/react-ui';
import Image from 'next/image';
import Snowflake from '../public/images/snowflake.svg';

export const indexCards = [
  {
    icon: 'icon-1',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
  {
    icon: 'icon-2',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
  {
    icon: 'icon-3',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
];

export function Index() {
  return (
    <ChilloutLayout>
      <div className="h-screen w-full relative">
        <Flex className="h-full flex-col justify-center items-center text-center text-white px:2 lg:px-6 space-y-10">
          <Heading level={1} className="uppercase lg:text-7xl">
            We keep you cool
          </Heading>
          <Text className="sub-title">
            Here you’ll want to write something super slick and succinct. Bonus
            points for subtle poetic prose
          </Text>
          <Button className="btn-primary" label="See How" />
        </Flex>

        <div className="relative lg:flex lg:flex-row text-left justify-center items-center pt-18 pb-30 -mt-32 lg:-mt-52 z-10">
          {indexCards.map((card, index) => (
            <div key={index} className="card">
              <Image
                src={Snowflake}
                alt=""
                className="card-icon"
                height={32}
                width={32}
              />
              <Heading level={3} className="card-title">
                {card.title}
              </Heading>
              <Text className="card-description">{card.description}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 lg:mt-52" />
    </ChilloutLayout>
  );
}

export default Index;
