import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';

const Testimonials = () => {
  return (
    <AccountantLayout>
      <div className="testimonial-banner"></div>

      <div id="testimonials" className="py-12">
        <h3 className="text-3xl font-bold mb-8">TESTIMONIALS</h3>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="px-4">
              <p className="text-lg mb-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et congue nibh. Integer lectus nisl, vestibulum non dignissim
                at, consequat at dui. Aenean nibh nibh, feugiat nec pellentesque
                ut, tincidunt vitae tortor. Integer quis sem sed lectus
                fringilla ullamcorper. Pellentesque nisi risus, pellentesque vel
                diam sit amet, dignissim molestie mauris. Maecenas suscipit diam
                elit. Vivamus libero nisl, facilisis et elit tristique, pretium
                auctor sem. Duis euismod sit amet dolor vel consectetur. Nunc
                vitae consectetur diam, at egestas velit. Fusce sed metus
                gravida, bibendum lorem pharetra, consectetur neque. ”
              </p>

              <p className="text-lg font-bold">
                - Debbie Moore (COMPANY/ORGANISATION)
              </p>
            </div>

            <div className="px-4">
              <p className="text-lg mb-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et congue nibh. Integer lectus nisl, vestibulum non dignissim
                at, consequat at dui. Aenean nibh nibh, feugiat nec pellentesque
                ut, tincidunt vitae tortor. Integer quis sem sed lectus
                fringilla ullamcorper. Pellentesque nisi risus, pellentesque vel
                diam sit amet, dignissim molestie mauris. Maecenas suscipit diam
                elit. Vivamus libero nisl, facilisis et elit tristique, pretium
                auctor sem. Duis euismod sit amet dolor vel consectetur. Nunc
                vitae consectetur diam, at egestas velit. Fusce sed metus
                gravida, bibendum lorem pharetra, consectetur neque. ”
              </p>

              <p className="text-lg font-bold">- Kyle (COMPANY/ORGANISATION)</p>
            </div>

            <div className="px-4">
              <p className="text-lg mb-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et congue nibh. Integer lectus nisl, vestibulum non dignissim
                at, consequat at dui. Aenean nibh nibh, feugiat nec pellentesque
                ut, tincidunt vitae tortor. Integer quis sem sed lectus
                fringilla ullamcorper. Pellentesque nisi risus, pellentesque vel
                diam sit amet, dignissim molestie mauris. Maecenas suscipit diam
                elit. Vivamus libero nisl, facilisis et elit tristique, pretium
                auctor sem. Duis euismod sit amet dolor vel consectetur. Nunc
                vitae consectetur diam, at egestas velit. Fusce sed metus
                gravida, bibendum lorem pharetra, consectetur neque. ”
              </p>

              <p className="text-lg font-bold">
                - John Wilson (COMPANY/ORGANISATION)
              </p>
            </div>

            <div className="px-4"></div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default Testimonials;
