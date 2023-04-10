import Image from 'next/image';
import { projectStaticData } from '../../data/projects';
import JHoganComLayout from '../../components/layout/JHoganComLayout';

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
    <JHoganComLayout>
      <div className="relative text-gray-800 bg-gray-50">
        <section className="relative min-h-screen px-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={project.image}
              alt="Your Name Here"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen">
            <h1 className="text-5xl sm:text-6xl lg:text-9xl mb-4 text-white">
              {project.name}
            </h1>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl text-white">
              {project.description}
            </h2>
          </div>
        </section>
        <section className="flex items-center justify-between my-32 tracking-wider relative">
          <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left px-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">Technologies used:</h3>
              <br />
              {project.tags.map((tag) => (
                <span key={tag} className="text-lg">
                  <span className="text-blue-600 text-capitalize">{tag}</span>
                </span>
              ))}
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold">Summary</h3>
              <br />
              <p className="w-full md:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                eaque delectus consequuntur harum doloremque assumenda omnis
                quibusdam quia neque, adipisci iste laborum sed nostrum.
              </p>
            </div>
            <div className="px-2">
              <br />
              <h3 className="text-xl font-bold">Contact</h3>
              <a
                className="text-xl hover:text-blue-600"
                href="mailto:test@nomail.com"
              >
                test@email.com
              </a>
              <p>675 234 4323</p>
            </div>
          </div>

          <Image
            className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
            src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
            alt="Your Name Here"
          />

          <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
            <div className="px-20">
              <h4 className="text-xl font-bold">Experience</h4>
              <br />
              <p className="text-6xl">+2</p>
            </div>
            <div className="px-20">
              <h4 className="text-xl font-bold">Projects</h4>
              <br />
              <p className="text-6xl">+25</p>
            </div>
            <div className="px-20">
              <h4 className="text-xl font-bold">Clients</h4>
              <br />
              <p className="text-6xl">+14</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-400 mx-44" />

        <section className="px-4 mt-10">
          <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
            Experience
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl font-bold">
                Full Stack Developer
              </h5>
              <h6 className="text-lg font-bold">Facebook</h6>
              <p>Jan 2015 - present</p>
            </div>
            <div className="flex flex-col col-span-4">
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
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl  font-bold">
                Software Developer
              </h5>
              <h6 className="text-lg font-bold">Google</h6>
              <p>Feb 2010 - Jan 2015</p>
            </div>
            <div className="flex flex-col col-span-4">
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
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
              <h6 className="text-lg font-bold">IBM</h6>
              <p>Apr 2008 - Feb 2010</p>
            </div>
            <div className="flex flex-col col-span-4">
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
            </div>
          </div>
        </section>
        <hr className="border-gray-400 mx-44" />

        <section className="px-4 mt-10">
          <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
            Education
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl  font-bold">
                B.S. Computer Science
              </h5>
              <h6 className="text-lg font-bold">Harward University</h6>
              <p>Jan 2015 - present</p>
            </div>
            <div className="flex flex-col col-span-4 ">
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
            </div>
          </div>
        </section>
      </div>
    </JHoganComLayout>
  );
}
