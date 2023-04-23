import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';
import ReusableSection from '../components/ReusableSection';

const AccountingServices = () => {
  return (
    <AccountantLayout>
      <div className="accounting-services">
        <h4 className="text-center">PRODUCTS/SERVICES</h4>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="md:col-span-6 sm:col-span-6">
              <p className="text-center">
                <img
                  src="images/accounting-and-bookkeeping.jpg"
                  alt="accounting-and-bookkeeping"
                  className="w-full"
                />
              </p>
              <h2 className="text-center">ACCOUNTING &amp; BOOKKEEPING</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Glorious baklava ex librus hup hey ad infinitum</li>
                <li>Epsum factorial non deposit quid pro quo hic escorol</li>
              </ul>
            </div>
            <div className="md:col-span-6 sm:col-span-6">
              <p className="text-center">
                <img
                  src="images/accounting-service2.jpg"
                  alt="accounting-services"
                  className="w-full max-w-xs mx-auto"
                />
              </p>
              <h2 className="text-center">SERVICE #2</h2>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Glorious baklava ex librus hup hey ad infinitum</li>
                <li>Epsum factorial non deposit quid pro quo hic escorol</li>
                <li>Lor separat existentie es un myth.</li>
                <li>
                  Por scientie, musica, sport etc, li tot Europa usa li sam
                  vocabularium
                </li>
                <li>Li lingues differe solmen in li grammatica</li>
                <li>It solmen va esser necessi far uniform grammatica</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div>
              <p className="text-center">
                <img
                  src="images/accounting-and-bookkeeping.jpg"
                  alt="accounting-and-bookkeeping"
                  className="img-responsive"
                />
              </p>

              <h2 className="text-center">ACCOUNTING &amp; BOOKKEEPING</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>

              <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Glorious baklava ex librus hup hey ad infinitum</li>
                <li>Epsum factorial non deposit quid pro quo hic escorol</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <p className="text-center">
                <img
                  src="images/accounting-service2.jpg"
                  alt="accounting-services"
                  className="img-responsive"
                />
              </p>
              <h2 className="text-center">SERVICE #2</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>
              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Glorious baklava ex librus hup hey ad infinitum</li>
                <li>Epsum factorial non deposit quid pro quo hic escorol</li>
                <li>Lor separat existentie es un myth.</li>
                <li>
                  Por scientie, musica, sport etc, li tot Europa usa li sam
                  vocabularium
                </li>
                <li>Li lingues differe solmen in li grammatica</li>
                <li>It solmen va esser necessi far uniform grammatica</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="w-full md:w-1/2 p-4">
              <div className="mx-auto">
                <img
                  src="images/accounting-service5.jpg"
                  alt="accounting-services"
                  className="block w-full"
                />
              </div>
              <h2 className="text-center my-4">SERVICE #5</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>
              <ul className="list-disc list-inside my-4">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Glorious baklava ex librus hup hey ad infinitum</li>
                <li>Epsum factorial non deposit quid pro quo hic escorol</li>
                <li>Lor separat existentie es un myth.</li>
                <li>
                  Por scientie, musica, sport etc, li tot Europa usa li sam
                  vocabularium
                </li>
                <li>Li lingues differe solmen in li grammatica</li>
                <li>It solmen va esser necessi far uniform grammatica</li>
              </ul>
            </div>
            <div className="flex flex-col md:w-1/2 sm:w-1/2">
              <div className="mx-auto">
                <img
                  src="images/accounting-service6.jpg"
                  alt="accounting-services"
                  className="w-full"
                />
              </div>
              <h2 className="text-center my-4">SERVICE #6</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum semper orci libero, eu blandit elit maximus pharetra.
                Mauris a sodales ante. Maecenas ut auctor nulla. Etiam sodales
                turpis ut condimentum elementum. Sed rutrum sapien odio, eu
                elementum nunc vulputate a. Fusce risus leo, euismod sit amet
                orci sit amet, tempor ultrices eros.
              </p>
              <ul className="list-disc list-inside mx-6">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                <li>Souvlaki ignitus carborundum e pluribus unum</li>
                <li>Defacto lingo est igpay atinlay</li>
                <li>Marquee selectus non provisio incongruous feline</li>
                <li>Quote meon an estimate et non interruptus stadium</li>
                <li>Sic tempus fugit esperanto hiccup estrogen</li>
                <li>Li lingues differe solmen in li grammatica</li>
                <li>It solmen va esser necessi far uniform grammatica</li>
                <li>Business Rescue Practitioners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h4 className="text-center">TESTIMONIALS</h4>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 py-2">
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna...”{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />
              <p className="reviewer text-center">- ANDREW HARVEY (COMPANY NAME)</p>
            </div>

            <div className="w-full md:w-1/3 px-4 py-2">
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna...”{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />

              <p className="reviewer text-center">
                - CHERYL STAPLES (COMPANY NAME)
              </p>
            </div>

            <div className="w-full md:w-1/3 px-4 py-2">
              <p className="text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel sagittis eros. Ut quam augue, mattis et sagittis nec, rutrum
                id odio. Praesent nec dolor nisi. Phasellus vulputate augue vel
                quam lobortis interdum. Donec blandit sem eu lorem varius, ac
                placerat est imperdiet. Cras enim elit, bibendum nec maximus et,
                volutpat a urna...”{' '}
                <a
                  className="read-more"
                  href="http://yourwebsitename.com/testimonials.html"
                >
                  read more
                </a>
              </p>
              <br />

              <p className="reviewer text-center">- KEVIN HAYES (COMPANY NAME)</p>
            </div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default AccountingServices;
