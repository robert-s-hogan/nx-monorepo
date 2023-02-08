import Image from 'next/image';
import Link from 'next/link';

import { Seo, Button } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHModal from '../components/RSHModal';
import RSHoganComLayout from '../components/layout/RSHoganComLayout';
import HeroSection from '../components/HeroSection';

import OneDemocracy from '../public/images/one_democracy.webp';
import MGISolution from '../public/images/mgi_solutions.svg';
import AnItalianDish from '../public/images/an_italian_dish.png';
import ThomasHenryWines from '../public/images/thomas_henry_wines.png';
import KRealty from '../public/images/k_realty.webp';
import TicketSaver from '../public/images/ticket_saver.jpeg';
import JHogan from '../public/images/jhogan.webp';
import BMDLogo from '../public/images/bmd_logo.webp';
import Testimonial from '../public/images/rshhogan_testimonials_ellen_2.avif';

export function Index() {
  const { isShowing, toggle } = useModal();

  return (
    <RSHoganComLayout>
      <Seo
        title="Engineer - Robert S. Hogan"
        description="Robert S. Hogan is a software engineer with a passion for building web applications and mobile apps. He has experience with React, Next.js, ChakraUI, and more."
        faviconPath="../static/favicon.ico"
      />

      <HeroSection />
      {/* Hi Im Robert */}
      <section className="w-full bg-white py-24 flex flex-col justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black text-2xl font-bold mb-6">
            Hi, I’m Robert.
            <br /> Nice to meet you.
          </h2>
          <p className="text-black lg:text-xl">
            Since beginning my journey as a freelance designer nearly 6 years
            ago, Ive done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. Im quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </section>
      {/* Skill */}
      <section className="py-24 bg-neutral-200">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-12 md:px-8 lg:gap-24 lg:px-16 xl:gap-8 xl:px-0">
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500 text-black">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Fast</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Fast load times and lag free interaction, my highest priority.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Intuitive</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Strong preference for easy to use, intuitive UX/UI.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-center h-24 w-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Responsive</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  My layouts will work on any device, big or small.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Optimize Digital Marketing</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Constantly improving your digital footprint by testing,
                  analyzing, and implementing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Recent Work */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="font-bold mb-4 text-center">My Recent Work</h2>
          <p className="mb-16 text-center">
            Here are a few design projects I have worked on recently. Want to
            see more? <a href="mailto:robert@robertshogan.com">Email me</a>.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap -m-4 gap-6 md:px-24 lg:px-16">
            <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden w-full">
              <div className="object-cover h-64 w-full relative overflow-hidden">
                <Image
                  width={750}
                  height={500}
                  src="https://rshogan.imgix.net/projects/tailwindcss-cofee-shop/rsh_coffee_hero.png"
                  alt="Local Coffee Shop Template"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Local Coffee Shop
                </h3>
                <p className="leading-relaxed mb-3">
                  Sample coffee shop for local businesses to connect with their
                  customers.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="https://rshcom-coffee-template.netlify.app/"
                    className="text text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Preview Site
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>

            <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden w-full">
              <div className="object-cover h-64 w-full relative overflow-hidden">
                <Image
                  width={750}
                  height={500}
                  src="https://rshogan.imgix.net/projects/svelte-tailwindcss-product-template/product_design.png"
                  alt="Product Shop Template"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Product Shop
                </h3>
                <p className="leading-relaxed mb-3">
                  Sample product shop for local businesses to promote their
                  product and sell online.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link
                    href="https://rshogan-svelte-tailwindcss-product-template.vercel.app/"
                    className="text text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Preview Site
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            {/*
            <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden w-full">
              <div className="object-cover h-64 w-full relative overflow-hidden">
                <Image
                  width={750}
                  height={500}
                  src="https://rshogan.imgix.net/projects/svelte-tailwindcss-deck-project/deck_design.png"
                  alt="Construction Site Template"
                />
              </div>
              <div className="p-6">
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Construction Site
                </h3>
                <p className="leading-relaxed mb-3">
                  Sample construction site for local businesses to show off
                  their work!
                </p>
                <div className="flex items-center flex-wrap ">
                  <p className="text-indigo-500 inline-flex items-center md:mb-2 disabled lg:mb-0">
                    <span className="italic text-xs">Coming Soon</span>
                    {/* <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                  </p>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
      {/* Collaborators */}
      <div className="max-w-7xl mx-auto py-24 justify-center">
        <h2 className="text-center text-black text-2xl font-bold mb-12">
          I am proud to have collaborated with some awesome companies:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          <div className="flex justify-center">
            <Link href="https://www.onedemocracy.org/">
              <Image
                src={OneDemocracy}
                height={50}
                width={87}
                loading="lazy"
                alt="One Democracy Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://www.mgisolutions.com/">
              <Image
                src={MGISolution}
                height={50}
                width={190}
                loading="lazy"
                alt="MGI Solutions Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://anitaliandish.com/">
              <Image
                src={AnItalianDish}
                height={50}
                width={200}
                loading="lazy"
                alt="An Italian Dish Logo"
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="https://www.thomashenrywines.com/">
              <Image
                src={ThomasHenryWines}
                height={50}
                width={89}
                loading="lazy"
                alt="Thomas Henry Wines Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://www.thekrealty.com/">
              <Image
                src={KRealty}
                width={100}
                height={100}
                loading="lazy"
                alt="K Realty Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://ticketsaver.net/">
              <Image
                src={TicketSaver}
                height={75}
                width={193}
                loading="lazy"
                alt="Ticket Saver Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://www.jessicahoganma.com/">
              <Image
                src={JHogan}
                height={50}
                width={89}
                loading="lazy"
                alt="Jessica Hogan MA Logo"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://www.broadwaymedia.com/">
              <Image
                src={BMDLogo}
                height={65}
                width={88}
                loading="lazy"
                alt="Broadway Media Distribution"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <section className="w-full bg-white body-font pb-12">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg mb-6">
              Robert helped me create a website and set up my blog. I had zero
              experience and had no idea how to go about it. Thanks to Roberts
              help, my site is up and running, and I am very pleased with how it
              looks. Robert was so patient and knowledgeable. He made the
              process easy and enjoyable. I highly recommend Robert!
            </p>
            <Image
              className="object-cover mx-auto rounded-full"
              alt="Woman Testimonial Portrait"
              height={64}
              width={64}
              src={Testimonial}
            />

            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm mt-3">
              Ellen S.
            </h2>
            <p className="text-gray-500">
              <Link href="https://anitaliandish.com/">AnItalianDish.com</Link>
            </p>
          </div>
        </div>
      </section>
      {/* Start a Project  */}
      <section className="pb-32 -mt-32 md:-mt-24 lg:-mt-16 text-white text-center">
        <div className="bg-gradient-to-r from-vivid-900 to-vivid-600  max-w-7xl w-5/6 mx-auto bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:space-x-6 w-3/4 lg:w-5/6 mx-auto justify-center py-12">
            <h2 className="text-white text-2xl font-bold lg:w-1/4">
              Start a project
            </h2>
            <p className="mt-2 text-white lg:flex-auto lg:w-1/2">
              Interested in working together? <span className="lg:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </p>
            <Button
              className="outline w-1/2 mx-auto mt-6 lg:mt-0 lg:py-0  lg:px-10 lg:w-1/4"
              onClick={toggle}
            >
              Lets do this
            </Button>
          </div>
        </div>
      </section>
      <RSHModal
        isShowing={isShowing}
        toggle={toggle}
        title="Thanks for taking the time to reach out!"
      >
        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          Fill in the form to start a conversation
        </p>

        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
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
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Sonoma County, CA
          </div>
        </div>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
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
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            <Link className="text" href="mailto:robert@robertshogan.com">
              Email me
            </Link>
          </div>
        </div>

        <form
          className="p-6 flex flex-col justify-center"
          action="https://submit-form.com/Mj5aEdSo"
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

          <button type="submit" className="md:w-32 mt-3">
            Submit
          </button>
        </form>
      </RSHModal>
    </RSHoganComLayout>
  );
}

export default Index;
