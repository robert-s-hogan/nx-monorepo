import Image from 'next/image';
import { projectStaticData } from '../../data/projects';
import JHLayout from '../../components/JHLayout';
import JHSection from '../../components/JHSection';
import { Flex, Heading, Text } from '@with-nx/react-ui';

export async function getStaticPaths() {
  const paths = projectStaticData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectStaticData.find(
    (project) => project.slug === params.slug
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default function Projects({ project }) {
  return (
    <JHLayout>
      <div className="relative">
        <JHSection className="relative min-h-screen px-4">
          <Flex className="absolute inset-0 items-center justify-center">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={project.image}
              alt="Your Name Here"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </Flex>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen">
            <Heading level={1} className="text-5xl sm:text-6xl lg:text-9xl mb-4">
              {project.name}
            </Heading>
            <Heading
              level={2}
              className="font-light text-2xl sm:text-3xl lg:text-4xl"
            >
              {project.description}
            </Heading>
          </div>
        </JHSection>
        <JHSection className="flex items-center justify-between my-32 tracking-wider relative">
          <Flex className="flex-col w-full md:w-1/3 space-y-12 text-center md:text-left px-4">
            <Flex className="flex-col">
              <Heading level={3} className="text-xl font-bold">
                Technologies used:
              </Heading>
              <br />

              <span className="text-lg">
                <span className="text-capitalize">{project.tags}</span>
              </span>
            </Flex>
            <div className="px-2">
              <Heading level={3} className="text-xl font-bold">
                Summary
              </Heading>
              <br />
              <Text className="w-full md:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                eaque delectus consequuntur harum doloremque assumenda omnis
                quibusdam quia neque, adipisci iste laborum sed nostrum
              </Text>
            </div>
            <div className="px-2">
              <br />
              <Heading level={3} className="text-xl font-bold">
                Contact
              </Heading>
              <a className="text-xl" href="mailto:test@nomail.com">
                test@email.com
              </a>
              <p>675 234 4323</p>
            </div>
          </Flex>

          <Image
            className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
            src="/jessica_portrait.webp"
            alt="Your Name Here"
          />

          <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
            <div className="px-20">
              <Heading level={4} className="text-xl font-bold">
                Experience
              </Heading>
              <br />
              <Text className="text-6xl">+2</Text>
            </div>
            <div className="px-20">
              <Heading level={4} className="text-xl font-bold">
                Projects
              </Heading>
              <br />
              <Text className="text-6xl">25</Text>
            </div>
            <div className="px-20">
              <Heading level={4} className="text-xl font-bold">
                Clients
              </Heading>
              <br />
              <Text className="text-6xl">14</Text>
            </div>
          </div>
        </JHSection>

        <hr className="border-gray-400 mx-44" />

        <JHSection className="px-4 mt-10">
          <Heading
            level={4}
            className="mb-8 text-3xl font-bold text-center md:text-left"
          >
            Experience
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading level={5} className="text-xl md:text-2xl font-bold">
                Full Stack Developer
              </Heading>

              <Heading level={6} className="text-lg font-bold">
                Facebook
              </Heading>
              <p>Jan 2015 - present</p>
            </Flex>
            <Flex className="flex-col col-span-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eveniet deleniti tempore veritatis adipisci accusantium
                voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
                cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Animi non incidunt voluptates
                molestiae delectus nulla quisquam aperiam voluptas tempora
                distinctio! Ipsa cupiditate harum voluptates praesentium.
                Suscipit itaque officiis odio ut!
              </p>
            </Flex>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading level={5} className="text-xl md:text-2xl  font-bold">
                Software Developer
              </Heading>
              <Heading level={6} className="text-lg font-bold">
                Google
              </Heading>
              <p>Feb 2010 - Jan 2015</p>
            </Flex>
            <Flex className="flex-col col-span-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eveniet deleniti tempore veritatis adipisci accusantium
                voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
                cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Animi non incidunt voluptates
                molestiae delectus nulla quisquam aperiam voluptas tempora
                distinctio! Ipsa cupiditate harum voluptates praesentium.
                Suscipit itaque officiis odio ut!
              </p>
            </Flex>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading level={5} className="text-xl md:text-2xl  font-bold">
                Web Developer
              </Heading>
              <Heading level={6} className="text-lg font-bold">
                IBM
              </Heading>
              <p>Apr 2008 - Feb 2010</p>
            </Flex>
            <Flex className="flex-col col-span-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eveniet deleniti tempore veritatis adipisci accusantium
                voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
                cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Animi non incidunt voluptates
                molestiae delectus nulla quisquam aperiam voluptas tempora
                distinctio! Ipsa cupiditate harum voluptates praesentium.
                Suscipit itaque officiis odio ut!
              </p>
            </Flex>
          </div>
        </JHSection>
        <hr className="border-gray-400 mx-44" />

        <JHSection className="px-4 mt-10">
          <Heading
            level={4}
            className="mb-8 text-3xl font-bold text-center md:text-left"
          >
            Education
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading level={5} className="text-xl md:text-2xl  font-bold">
                B.S. Computer Science
              </Heading>
              <Heading level={6} className="text-lg font-bold">
                Harward University
              </Heading>
              <p>Jan 2015 - present</p>
            </Flex>
            <Flex className="flex-col col-span-4 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eveniet deleniti tempore veritatis adipisci accusantium
                voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
                cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Animi non incidunt voluptates
                molestiae delectus nulla quisquam aperiam voluptas tempora
                distinctio! Ipsa cupiditate harum voluptates praesentium.
                Suscipit itaque officiis odio ut!
              </p>
            </Flex>
          </div>
        </JHSection>
      </div>
    </JHLayout>
  );
}
