import ChilloutLayout from '../components/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Link from 'next/link';
import Image from 'next/image';

export const indexCards = [
  {
    icon: 'icon-1',
    title: 'Amazing Feature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
  {
    icon: 'icon-2',
    title: 'Amazing Feature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
  {
    icon: 'icon-3',
    title: 'Amazing Feature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nisl nisl sit amet lorem.',
  },
];

export function Index() {
  return (
    <ChilloutLayout>
      <div className="h-screen w-full relative">
        <video
          key="landing-video"
          autoPlay={false}
          muted
          loop
          playsInline
          id="myVideo"
          className="h-screen w-full object-cover -z-10"
        >
          <source src="/landing-video.mp4" type="video/mp4" />
        </video>

        <Flex className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-2 lg:px-6 space-y-10 z-10">
          <Heading level={1} className="uppercase lg:text-7xl">
            We keep you cool
          </Heading>
          <Text className="sub-title">
            Here you’ll want to write something super slick and succinct. Bonus
            points for subtle poetic prose
          </Text>
          <Link href="/products" className="btn-primary">
            See How
          </Link>
        </Flex>
      </div>
      <Grid
        id="features"
        className="relative container xl:max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center pt-18 pb-30 -mt-32 xl:-mt-52 z-10"
      >
        {indexCards.map((card, index) => (
          <div key={index} className="w-full">
            <div className="mx-8 mb-10 lg:mb-0">
              <div className="card rounded-tr-20xl">
                <Image
                  src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/snowflake.svg"
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
            </div>
          </div>
        ))}
      </Grid>

      <Section
        id="who-we-are"
        className="pt-16 lg:py-36 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl"
      >
        <div>
          <div className="flex flex-col lg:mx-8 lg:flex-row">
            <div className="w-full mt-8 lg:mt-0">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C14.66 0 11.34 2.66 10 8C12 5.34 14.34 4.34 17 5C18.52 5.38 19.62 6.48 20.82 7.7C22.78 9.7 25 12 30 12C35.34 12 38.66 9.34 40 4C38 6.66 35.66 7.66 33 7C31.48 6.62 30.4 5.52 29.18 4.3C27.22 2.3 25 0 20 0ZM10 12C4.66 12 1.34 14.66 0 20C2 17.34 4.34 16.34 7 17C8.52 17.38 9.6 18.48 10.82 19.7C12.78 21.7 15 24 20 24C25.34 24 28.66 21.34 30 16C28 18.66 25.66 19.66 23 19C21.48 18.62 20.4 17.52 19.18 16.3C17.22 14.3 15 12 10 12Z"
                  fill="#3B82F6"
                />
              </svg>
              <h2 className="mt-4 mb-10 font-bold text-4xl text-gray-700">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-loose mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing pretium ultrices non vel molestie et cras venenatis.
                Urna aliquam a diam venenatis vel. Nulla tristique mauris purus,
                pharetra etiam sagittis, aenean ultrices. Lacinia proin pharetra
                venenatis nisl dictum sit fames cursus accumsan.
              </p>
              <p className="text-gray-600 leading-loose mb-6">
                Sit quisque magna auctor eleifend.
              </p>
              <p className="text-gray-600 leading-loose mb-6">
                Risus varius in at metus lectus tincidunt. Enim tortor quisque
                sit at at ultrices quam massa. Elit sagittis, nisl, in viverra
                gravida. Tristique a amet, vitae sem porta aliquam facilisis.
                Semper non quis quis nam. Eget lectus vitae dignissim phasellus
                sit lectus in orci sed.
              </p>
              <p className="text-gray-600 leading-loose mb-6">
                Felis, elementum in convallis aliquam quis. Commodo ac purus
                semper viverra proin etiam erat fermentum volutpat. Molestie
                curabitur libero pharetra lectus in. Orci erat in amet interdum
                morbi. Diam urna ultrices nulla lacus, quis risus.
              </p>
            </div>
            <div className="relative w-full pb-96 lg:pb-0 lg:ml-44 mb-20">
              <Image
                className="absolute w-full h-full object-cover"
                src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/happy.png"
                alt="A small golden trophy"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="what-others-are-saying"
        className="flex flex-col items-center pt-20 lg:pt-32 lg:pb-40"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 14.4C9.94 14.4 12.8 17.26 12.8 20.8C12.8 24.34 9.94 27.2 6.4 27.2C2.86 27.2 0 24.34 0 20.8C0 17.26 2.86 14.4 6.4 14.4ZM21.6 24C22.6609 24 23.6783 24.4214 24.4284 25.1716C25.1786 25.9217 25.6 26.9391 25.6 28C25.6 29.0609 25.1786 30.0783 24.4284 30.8284C23.6783 31.5786 22.6609 32 21.6 32C20.5391 32 19.5217 31.5786 18.7716 30.8284C18.0214 30.0783 17.6 29.0609 17.6 28C17.6 26.9391 18.0214 25.9217 18.7716 25.1716C19.5217 24.4214 20.5391 24 21.6 24ZM22.4 0C24.9461 0 27.3879 1.01143 29.1882 2.81178C30.9886 4.61212 32 7.05392 32 9.6C32 14.9 27.7 19.2 22.4 19.2C19.8539 19.2 17.4121 18.1886 15.6118 16.3882C13.8114 14.5879 12.8 12.1461 12.8 9.6C12.8 4.3 17.1 0 22.4 0Z"
            fill="#3B82F6"
          />
        </svg>
        <h2 className="mx-4 mt-4 mb-10 text-center font-bold text-gray-700">
          What Others Are Saying
        </h2>
        <div className="flex flex-row flex-wrap justify-center pt-24 pb-18 max-w-screen-2xl">
          <div className="w-72 lg:w-72 mx-10 mb-24 lg:mb-0">
            <div className="flex flex-col items-center pb-6">
              <Image
                className="rounded-full w-24 shadow-inner"
                src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/smiling_man.png"
                width="96"
                height="96"
                alt=""
              />
              <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
                Thom Yorke
              </span>
              <span className="text-sm text-gray-400">Founder, Radiohead</span>
            </div>
            <p className="testimonial_statement relative px-6 pt-8 pb-20 text-center font-medium text-gray-700">
              “Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
              porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
              quam volutpat nulla pellentesque.”
            </p>
          </div>

          <div className="w-72 lg:w-72 mx-10 mb-24 lg:mb-0">
            <div className="flex flex-col items-center pb-6">
              <Image
                className="rounded-full w-24 shadow-inner"
                src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/smiling_woman.jpg"
                width="96"
                height="96"
                alt=""
              />
              <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
                Alfa Mist
              </span>
              <span className="text-sm text-gray-400">
                Creative Director, Antiphon
              </span>
            </div>
            <p className="testimonial_statement relative px-6 pt-8 pb-20 text-center font-medium text-gray-700">
              Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
              porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
              quam volutpat nulla pellentesque.
            </p>
          </div>

          <div className="w-72 lg:w-72 mx-10 mb-24 lg:mb-0">
            <div className="flex flex-col items-center pb-6">
              <Image
                className="rounded-full w-24 shadow-inner"
                src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/smiling_man_2.jpg"
                width="96"
                height="96"
                alt=""
              />
              <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
                Rory Ferreira
              </span>
              <span className="text-sm text-gray-400">Artist, Milo</span>
            </div>
            <p className="testimonial_statement relative px-6 pt-8 pb-20 text-center font-medium text-gray-700">
              “Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
              porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
              quam volutpat nulla pellentesque.”
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="get-your-cool-on"
        className="lg:mx-0 lg:max-w-full bg-blue-900"
      >
        <Flex className="flex-col items-center py-8">
          <h2 className="text-center font-bold lg:px-0 text-3xl lg:text-4xl text-blue-50 px-4">
            Get Your Cool On
          </h2>
          <p className="mt-8 mb-24 px-4 leading-loose text-center max-w-prose lg:w-1/2 text-blue-50">
            Here you’ll want to write something super slick and succinct. Bonus
            points for subtle poetic prose also it may be worth adding a
            convincing point.
          </p>
          <div className="lg:flex gap-12 px-8">
            <div className="mb-16 lg:mb-0 flex flex-col items-center p-8 w-full md:w-80 rounded-lg shadow-md bg-blue-50">
              <svg
                className="mb-6"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2V30"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6075 5C18.5188 5.65621 17.2712 6.00203 16 6C14.7288 6.00203 13.4812 5.65621 12.3925 5"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3925 27C13.4821 26.3457 14.7291 26 16 26C17.2709 26 18.518 26.3457 19.6075 27"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.1244 9L3.87563 23"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3294 13.625C26.2177 13.0085 25.2947 12.1011 24.6593 11.0001C24.0239 9.89912 23.7001 8.64599 23.7225 7.375"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.67062 18.375C5.7823 18.9915 6.70528 19.8989 7.34067 20.9999C7.97605 22.1009 8.2999 23.354 8.2775 24.625"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.87563 9L28.1244 23"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.67062 13.625C5.7823 13.0085 6.70528 12.1011 7.34067 11.0001C7.97605 9.89912 8.2999 8.64599 8.2775 7.375"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3294 18.375C26.2177 18.9915 25.2947 19.8989 24.6593 20.9999C24.0239 22.1009 23.7001 23.354 23.7225 24.625"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mb-4 text-xl font-semibold text-gray-700">
                Air Conditioners
              </h3>
              <p className="leading-relaxed text-sm text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                libero lorem tortor neque ante.
              </p>
              <a
                href="/products"
                className="text-sm mt-6 p-2 font-bold border-2 rounded-md border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 "
              >
                EXPLORE
              </a>
            </div>

            <div className="flex flex-col items-center p-8 w-full md:w-80 rounded-lg shadow-md bg-blue-50">
              <svg
                className="mb-6"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2V30"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6075 5C18.5188 5.65621 17.2712 6.00203 16 6C14.7288 6.00203 13.4812 5.65621 12.3925 5"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3925 27C13.4821 26.3457 14.7291 26 16 26C17.2709 26 18.518 26.3457 19.6075 27"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.1244 9L3.87563 23"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3294 13.625C26.2177 13.0085 25.2947 12.1011 24.6593 11.0001C24.0239 9.89912 23.7001 8.64599 23.7225 7.375"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.67062 18.375C5.7823 18.9915 6.70528 19.8989 7.34067 20.9999C7.97605 22.1009 8.2999 23.354 8.2775 24.625"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.87563 9L28.1244 23"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.67062 13.625C5.7823 13.0085 6.70528 12.1011 7.34067 11.0001C7.97605 9.89912 8.2999 8.64599 8.2775 7.375"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3294 18.375C26.2177 18.9915 25.2947 19.8989 24.6593 20.9999C24.0239 22.1009 23.7001 23.354 23.7225 24.625"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Blog</h3>
              <p className="leading-relaxed text-sm text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                libero lorem tortor neque ante.
              </p>
              <a
                href="/blog"
                className="text-sm mt-6 p-2 font-bold border-2 rounded-md border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 "
              >
                READ MORE
              </a>
            </div>
          </div>
        </Flex>
      </Section>
    </ChilloutLayout>
  );
}

export default Index;
