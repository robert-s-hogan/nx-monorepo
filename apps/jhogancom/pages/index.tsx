import Image from 'next/image';
import { useModal } from '@with-nx/react-hooks';

import JHoganComLayout from '../components/layout/JHoganComLayout';
import ProjectSection from '../components/projects/ProjectSection';
import { Seo, Link } from '@with-nx/react-ui';
import { Hero, Section } from '@with-nx/react-tailwind-ui';

import JHModal from '../components/JHModal';

export function Index() {
  const { isShowing, toggle } = useModal();

  return (
    <JHoganComLayout>
      <Seo
        title="Data Scientist and Data Analyst - Jessica Hogan M.A."
        description="I want to help you make the best data-driven decisions and translate data into actionable insights. As a Data Scientist and Data Analyst, I translate data into actionable insights. I have experience with SQL, Excel, reporting, dashboards and statistics.Jessica Hogan M.A."
        faviconPath="../static/favicon.ico"
      />
      <Hero
        id="hero"
        backgroundImage="https://via.placeholder.com/1500"
        height="620px"
      >
        <div className="bg-gradient-to-br from-peach to-mint scroll-smooth w-full h-full">
          <div className="flex justify-center flex-col items-center h-full text-center">
            <h1 className="font-semibold text-4xl text-black">
              Hi, I am Jessica.
              <br />
              <span className="text-black bg-clip-text bg-gradient-to-br from-orange to-peach">
                Data Scientist and Data Analyst
              </span>
            </h1>
            <p className="text-black text-lg py-2 w-4/5">
              I want to help you make the best data-driven decisions and
              translate data into actionable insights.
            </p>
            <div className="my-4 flex flex-col justify-center md:flex-row md:space-between">
              <button
                className="bg-orange hover:opacity-80 px-8 py-2 rounded-lg text-lg text-white"
                onClick={() => toggle()}
              >
                Contact me
              </button>
              <Link
                href="#projects"
                className="px-8 py-2 rounded-lg hover:no-underline pt-4 md:pt-4"
              >
                <p className="align-middle text-green hover:text-slate text-lg">
                  See My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline pb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <Section id="projects">
        <ProjectSection />
      </Section>
      {/* <p className="text-center">
        <Link href="/projects" className="text-gray-500">
          View all Projects
        </Link>
      </p> */}
      <Section id="who-i-am">
        <div className="items-center lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2 lg:mr-24">
            <h2 className="text-3xl font-semibold text-gray-800">Who I am</h2>

            <p className="text-gray-500 my-5 text-justify">
              I am a Data Scientist and Data Analyst based in Sonoma County,
              California. I have a master’s degree and over eight years
              experience providing actionable insights. I have a diverse
              background working in both public and private sectors from
              research to marketing which gives me a unique eye in which to
              approach your data-driven questions.
            </p>

            <p className="text-gray-500 mt-3">
              I look forward to hearing about how I can help you solve your data
              questions!
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 pt-4 justify-center sm:justify-start space-x-2">
              <Link
                className="text-blue hover:text-black"
                href="mailto:jessicahoganma@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>

              <Link
                className="text-blue hover:text-black ml-3"
                href="https://www.facebook.com/jessicahoganma"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link
                className="ml-3 text-blue hover:text-black"
                href="https://twitter.com/jessicahoganma"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link
                className="ml-3 text-blue hover:text-black"
                href="https://www.instagram.com/jessica_hogan_ma/"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jessicahoganma/"
                className="ml-3 text-blue hover:text-black"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>

              <Link
                className="text-blue hover:text-black ml-3"
                href="https://github.com/jessicahoganma"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 640 640"
                >
                  <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                </svg>
              </Link>
            </span>
          </div>

          <div className="mt-8 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <Image
                  width="355"
                  height="384"
                  src="https://rshogan.imgix.net/clients/jessicahogama/IMG-2649_cropped_2.jpg?auto=compress,format"
                  alt=""
                  className="object-contain h-96 w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" minHeight="150px">
        <div className="lg:w-3/4 xl:w-full mx-auto bg-orange text-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-11/12 lg:w-3/4 mx-auto justify-center py-8">
            <h2 className="text-white text-2xl font-semibold text-center">
              Start a project
            </h2>
            <p className="mt-2 text-white md:flex-auto text-center">
              Interested in working together? <span className="md:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </p>
            <button
              className="rounded-lg mx-auto mt-6 md:mt-0 md:py-3 md:px-4 md:rounded-full py-3 px-10 hover:text-orange hover:bg-white font-semibold border-2 md:w-1/4 bg-orange text-white"
              onClick={toggle}
            >
              Lets do this
            </button>
          </div>
        </div>
      </Section>

      <JHModal
        isShowing={isShowing}
        toggle={toggle}
        title="Thanks for taking the time to reach out!"
      >
        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg space-y-4">
          <h2 className="text-black font-semibold text-center">
            Thanks for taking the time to reach out! Fill in the form to start a
            conversation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center mt-4 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-full ">
                Sonoma County, CA
              </div>
            </div>

            <div className="flex items-center mt-2 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-full text-black">
                <Link className="text" href="mailto:robert@robertshogan.com">
                  <p className="text-black underline">Email me</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form
          className="px-6 flex flex-col justify-center mb-6"
          action="https://submit-form.com/F8kispbK"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What would you like to start building?"
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 bg-orange hover:opacity-80 px-8 py-2 rounded-lg text-lg text-white"
          >
            Submit
          </button>
        </form>
      </JHModal>
    </JHoganComLayout>
  );
}

export default Index;
