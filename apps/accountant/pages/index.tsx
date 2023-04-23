import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

import AccountantLayout from '../components/AccountantLayout';
import accountingAndBookkeepingImage from './public/images/accounting-and-bookkeeping.jpg';
import accountingService2Image from './public/images/accounting-service2.jpg';
import accountingService3Image from './public/images/accounting-service3.jpg';
import accountingService4Image from './public/images/accounting-service4.jpg';
import accountingService5Image from './public/images/accounting-service5.jpg';
import accountingService6Image from './public/images/accounting-service6.jpg';

export function Index() {
  return (
    <AccountantLayout>
      <div className="accounting-intro flex flex-col items-center">
        <h1 className="text-center mb-6">
          CLEVELAND ACCOUNTING SERVICES
          <br />
          &amp; CONSULTING
        </h1>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 intro">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              massa justo, facilisis vel bibendum ut, vulputate sed sem.
              Phasellus imperdiet porta est sed consequat. Integer ut risus vel
              nibh fringilla pulvinar.
            </p>
            <p className="mb-4">
              Integer aliquam vulputate dui sit amet imperdiet. Ut commodo magna
              lectus, tristique pulvinar nibh mattis at. Ut eget viverra lacus,
              ut lobortis eros.
            </p>
          </div>
        </div>
      </div>
      <div id="tax-expert" className="text-center">
        <p>
          DO YOU NEED HELP WITH ACCURATE BOOKKEEPING SERVICES?
          <br />
          DO YOU NEED TO REGISTER YOUR BUSINESS?
          <br />
          ARE YOU LOOKING FOR A TAX EXPERT?
        </p>
      </div>
      <div className="free-call text-center">
        <h5>WE CAN HELP</h5>
        <p>
          <a
            href="http://yourwebsitename.com/contact.php"
            className="inline-flex items-center"
          >
            REQUEST A FREE CONSULTATION{' '}
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
      </div>
      <div className="accounting-services">
        <h4 className="text-center">SERVICES</h4>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-and-bookkeeping"
                  src="images/accounting-and-bookkeeping.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">
                  ACCOUNTING &amp; BOOKKEEPING
                </h2>
              </a>
            </div>
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-service2"
                  src="images/accounting-service2.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">SERVICE #2</h2>
              </a>
            </div>
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-service3"
                  src="images/accounting-service3.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">SERVICE #3</h2>
              </a>
            </div>
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-service4"
                  src="images/accounting-service4.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">SERVICE #4</h2>
              </a>
            </div>
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-service5"
                  src="images/accounting-service5.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">SERVICE #5</h2>
              </a>
            </div>
            <div className="text-center">
              <a href="http://yourwebsitename.com/">
                <img
                  className="mx-auto w-2/3"
                  alt="accounting-service6"
                  src="images/accounting-service6.jpg"
                />
                <h2 className="mt-4 font-bold text-xl">
                  OTHER SUPPORT SERVICES
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h4>TESTIMONIALS</h4>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="md:w-1/3 sm:w-full">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna..."{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />
              <p className="reviewer">- ANDREW (COMPANY NAME)</p>
            </div>
            <div className="md:w-1/3 sm:w-full">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna..."{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />
              <p className="reviewer">- CHERYL STAPLES (COMPANY NAME)</p>
            </div>
            <div className="md:w-1/3 sm:w-full">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna..."{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />
              <p className="reviewer">- KEVIN HAYES (COMPANY NAME)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <h4 className="text-center">CLIENTS</h4>
        <div className="flex justify-center items-center">
          <div className="hidden md:block md:col-span-2"></div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2 mx-4 my-2">
            <img
              className="mx-auto w-full"
              src="images/client-logo.png"
              alt="client-logo-1"
            />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2 mx-4 my-2">
            <img
              className="mx-auto w-full"
              src="images/client-logo.png"
              alt="client-logo-1"
            />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2 mx-4 my-2">
            <img
              className="mx-auto w-full"
              src="images/client-logo.png"
              alt="client-logo-1"
            />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2 mx-4 my-2">
            <img
              className="mx-auto w-full"
              src="images/client-logo.png"
              alt="client-logo-1"
            />
          </div>
          <div className="hidden md:block md:col-span-2"></div>
        </div>
      </div>
      <div className="consultation-strip">
        <p>
          <a
            href="http://yourwebsitename.com/contact.php"
            className="text-blue-500 hover:text-blue-700"
          >
            REQUEST A FREE CONSULTATION
          </a>
        </p>
      </div>
    </AccountantLayout>
  );
}

export default Index;
