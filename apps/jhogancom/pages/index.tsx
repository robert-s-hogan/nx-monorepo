import Image from 'next/image';
import { useModal } from '@with-nx/react-hooks';

import JHoganComLayout from '../components/layout/JHoganComLayout';
import ProjectSection from '../components/projects/ProjectSection';
import { Seo, Link } from '@with-nx/react-ui';
import { Hero, Section } from '@with-nx/react-tailwind-ui';
import {
  FiArrowRight,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMapPin,
} from 'react-icons/fi';
import { Activity, Airplay } from '@with-nx/icons/feather';

import JHModal from '../components/JHModal';
import JHPortrait from '../public/images/jessica_portrait.webp';

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
                  <FiArrowRight className="inline-block ml-2" />
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

            <p className="text-gray-500 my-5">
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
                <FiMail className="w-6 h-6" />
              </Link>

              <Link
                className="text-blue hover:text-black ml-3"
                href="https://www.facebook.com/jessicahoganma"
              >
                <FiFacebook className="w-6 h-6" />
              </Link>
              <Link
                className="ml-3 text-blue hover:text-black"
                href="https://twitter.com/jessicahoganma"
              >
                <FiTwitter className="w-6 h-6" />
              </Link>
              <Link
                className="ml-3 text-blue hover:text-black"
                href="https://www.instagram.com/jessica_hogan_ma/"
              >
                <FiInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jessicahoganma/"
                className="ml-3 text-blue hover:text-black"
              >
                <FiLinkedin className="w-6 h-6" />
              </Link>

              <Link
                className="text-blue hover:text-black ml-3"
                href="https://github.com/jessicahoganma"
              >
                <FiGithub className="w-6 h-6" />
              </Link>
            </span>
          </div>

          <div className="mt-8 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <Image
                  width={355}
                  height={384}
                  src={JHPortrait}
                  alt="Jessica Hogan's Portrait"
                  className="object-contain h-96 w-auto rounded-xl"
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
              <FiMapPin className="w-8 h-8 text-gray-500" />

              <div className="ml-4 text-md tracking-wide font-semibold w-full ">
                Sonoma County, CA
              </div>
            </div>

            <div className="flex items-center mt-2 text-black">
              <FiMail className="w-8 h-8 text-gray-500" />
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
