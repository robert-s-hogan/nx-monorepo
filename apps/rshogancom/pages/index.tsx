import Image from 'next/image';
import Link from 'next/link';

import { Button, Flex, Grid, Heading, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHoganComLayout from '../components/RSHoganComLayout';
import RSHHeroSection from '../components/RSHHeroSection';
import RSHSection from '../components/RSHSection';
import RSHModal from '../components/RSHModal';

import { collaborators } from '../data/collaborators';
import { featureCards } from '../data/featureCards';

export function Index() {
  const { isShowing, toggle } = useModal();

  const FeatureCard = ({ title, description, svgPathD }) => (
    <div className="card p-6 overflow-hidden text-center border-2 bg-white rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="object-center h-24 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d={svgPathD}
        />
      </svg>
      <div className="p-4 h-auto space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-md text-center leading-relaxed block lg:text-sm">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <RSHoganComLayout>
      <RSHHeroSection />
      {/* Hi Im Robert */}
      <RSHSection className="bg-surface w-full py-24 flex flex-col justify-center text-center px-4">
        <Heading level={2}>
          Hi, I’m Robert.
          <br /> Nice to meet you.
        </Heading>
        <Text>
          Since beginning my journey as a freelance designer nearly 6 years ago,
          Ive done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. Im quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </Text>
      </RSHSection>

      {/* Skills */}
      <RSHSection className="bg-primary py-24">
        <Grid className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-12 md:px-8 lg:gap-24 lg:px-16 xl:gap-8 xl:px-0">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </Grid>
      </RSHSection>

      {/* Collaborators */}
      <RSHSection className="bg-surface py-24 justify-center">
        <Heading level={2} className="text-center">
          I am proud to have collaborated with some awesome companies:
        </Heading>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {collaborators.map((collaborator) => (
            <div className="flex justify-center" key={collaborator.name}>
              <Link href={collaborator.href}>
                <Image
                  src={collaborator.src}
                  height={collaborator.height}
                  width={collaborator.width}
                  loading="lazy"
                  alt={collaborator.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      </RSHSection>

      {/* Testimonials */}
      <RSHSection className="bg-primary w-full pb-12">
        <div className="px-5 py-24">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <Text className="leading-relaxed text-lg mb-6">
              Robert helped me create a website and set up my blog. I had zero
              experience and had no idea how to go about it. Thanks to Roberts
              help, my site is up and running, and I am very pleased with how it
              looks. Robert was so patient and knowledgeable. He made the
              process easy and enjoyable. I highly recommend Robert!
            </Text>
            <Image
              className="object-cover mx-auto rounded-full"
              alt="Woman Testimonial Portrait"
              height={64}
              width={64}
              src="https://rshogan.imgix.net/projects/rshogancom/images/rshhogan_testimonials_ellen_2.avif"
            />

            <Heading level={2} className="text-gray-500 first-line:mt-3">
              Ellen S.
            </Heading>
            <Text className="text-gray-500">
              <Link href="https://anitaliandish.com/">AnItalianDish.com</Link>
            </Text>
          </div>
        </div>
      </RSHSection>

      {/* Start a Project  */}
      <RSHSection className="bg-surface pb-32 -mt-32 md:-mt-24 lg:-mt-16 text-center">
        <div className="w-11/12 mx-auto shadow-lg overflow-hidden">
          <Flex className="flex-col space-y-8 px-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center py-12">
            <Heading level={2} className="lg:!w-1/3">
              Start a project
            </Heading>
            <Text>
              Interested in working together? <span className="lg:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </Text>
            <Button className="btn-primary lg:!w-1/3" onClick={toggle}>
              Lets do this
            </Button>
          </Flex>
        </div>
      </RSHSection>
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHoganComLayout>
  );
}

export default Index;
