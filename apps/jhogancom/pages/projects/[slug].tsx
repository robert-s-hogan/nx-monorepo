import Image from 'next/image';
import { projectStaticData } from '../../data/projects';
import JHLayout from '../../components/JHLayout';
import { Flex, Heading, Text } from '@with-nx/generic-ui';

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
        <section className="relative min-h-screen px-4">
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
            <Heading
              level={1}
              className="text-5xl sm:text-6xl lg:text-9xl mb-4"
              text={project.name}
            />
            <Heading
              level={2}
              className="font-light text-2xl sm:text-3xl lg:text-4xl"
              text="{project.description}"
            />
          </div>
        </section>
        <section className="flex items-center justify-between my-32 tracking-wider relative">
          <Flex className="flex-col w-full md:w-1/3 space-y-12 text-center md:text-left px-4">
            <Flex className="flex-col">
              <Heading
                level={3}
                className="text-xl font-bold"
                text="Technologies used:"
              />
              <br />

              <span className="text-lg">
                <span className="text-capitalize">{project.tags}</span>
              </span>
            </Flex>
            <div className="px-2">
              <Heading level={3} className="text-xl font-bold" text="Summary" />
              <br />
              <Text
                className="w-full md:w-2/3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                eaque delectus consequuntur harum doloremque assumenda omnis
                quibusdam quia neque, adipisci iste laborum sed nostrum"
              />
            </div>
            <div className="px-2">
              <br />
              <Heading level={3} className="text-xl font-bold" text="Contact" />
              <a className="text-xl" href="mailto:test@nomail.com">
                test@email.com
              </a>
              <p>675 234 4323</p>
            </div>
          </Flex>

          <Image
            className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
            src="https://app-assets.vercel.app/apps/JH/jessica_portrait.webp"
            alt="Your Name Here"
          />

          <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
            <div className="px-20">
              <Heading
                level={4}
                className="text-xl font-bold"
                text="Experience"
              />
              <br />
              <Text className="text-6xl" text="+2" />
            </div>
            <div className="px-20">
              <Heading
                level={4}
                className="text-xl font-bold"
                text="Projects"
              />
              <br />
              <Text className="text-6xl" text="25" />
            </div>
            <div className="px-20">
              <Heading level={4} className="text-xl font-bold" text="Clients" />
              <br />
              <Text className="text-6xl" text="14" />
            </div>
          </div>
        </section>

        <hr className="border-gray-400 mx-44" />

        <section className="px-4 mt-10">
          <Heading
            level={4}
            className="mb-8 text-3xl font-bold text-center md:text-left"
            text="Experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading
                level={5}
                className="text-xl md:text-2xl font-bold"
                text="Full Stack Developer"
              />

              <Heading
                level={6}
                className="text-lg font-bold"
                text="Facebook"
              />
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
              <Heading
                level={5}
                className="text-xl md:text-2xl  font-bold"
                text="Software Developer"
              />
              <Heading level={6} className="text-lg font-bold" text="Google" />
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
              <Heading
                level={5}
                className="text-xl md:text-2xl  font-bold"
                text="Web Developer"
              />
              <Heading level={6} className="text-lg font-bold" text="IBM" />
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
        </section>
        <hr className="border-gray-400 mx-44" />

        <section className="px-4 mt-10">
          <Heading
            level={4}
            className="mb-8 text-3xl font-bold text-center md:text-left"
            text="Education"
          />
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <Flex className="flex-col col-span-2 mb-4 md:mb-0">
              <Heading
                level={5}
                className="text-xl md:text-2xl  font-bold"
                text="B.S. Computer Science"
              />
              <Heading
                level={6}
                className="text-lg font-bold"
                text="Harward University"
              />
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
        </section>
      </div>
    </JHLayout>
  );
}
