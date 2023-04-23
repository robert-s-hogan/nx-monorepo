import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';
import ReusableSection from '../components/ReusableSection';

const WhyYouNeedAnAccountant = () => {
  return (
    <AccountantLayout>
      <div className="banner">
        <p className="text-center">
          <img
            alt="why-you-need-an-accountant"
            className="img-responsive"
            src="images/blog-post1-img.jpg"
          />
        </p>
      </div>
      <div className="heading row">
        <div className="col-md-6 col-md-offset-3">
          <h1 className="text-center font-bold">
            <strong>Why You Need an Accountant</strong>
          </h1>
        </div>
      </div>
      <div className="jumbotron blogtext blog-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <p className="authordate">
              <span className="glyphicon glyphicon-user"></span> By Sarah
              Jane&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              <span className="glyphicon glyphicon-time"></span> Last updated Nov.
              15, 2017
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus, magna vitae rutrum ornare, orci nulla vestibulum quam, sit
              amet maximus turpis tellus sed ipsum. Suspendisse sem ligula,
              molestie sed euismod nec, consectetur quis diam. Mauris lobortis
              elit non rhoncus pellentesque.
            </p>
            <br />
            <h3 className="text-center font-bold">
              <strong>SUB-HEADING GOES HERE</strong>
            </h3>
            <br />
            <p className="text-center">
              <img
                alt="accountant-for-business"
                className="img-responsive"
                src="images/blog-post-img1.jpg"
              />
            </p>
            <p>
              Nunc dictum nec tellus nec hendrerit. Etiam leo felis, congue
              vitae placerat vel, vestibulum id massa. Maecenas cursus, ante sit
              amet placerat rhoncus, risus est auctor diam, in pulvinar magna
              lectus at erat.
            </p>
            <p>
              Nullam eget neque tellus. In tellus odio, pretium ac risus vitae,
              bibendum dignissim lectus. Vestibulum hendrerit libero nec mauris
              feugiat vehicula. Duis malesuada diam tempor odio efficitur, vitae
              faucibus purus ornare.
            </p>
            <p>
              Aenean rhoncus mauris id sapien gravida lobortis. Praesent vel
              eleifend purus. Nulla euismod pharetra massa sit amet vestibulum.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              nec semper quam.
            </p>
            <br />
            <h3 className="text-center font-bold">
              <strong>SUB-HEADING GOES HERE</strong>
            </h3>
            <br />
            <p className="text-center">
              <img
                alt="accountant-for-business"
                className="img-responsive"
                src="images/blog-post-img2.jpg"
              />
            </p>
            <p>
              Aliquam mattis eros nulla, at luctus eros porttitor quis. Vivamus
              eu erat non quam pharetra bibendum. Duis quis faucibus justo, in
              suscipit urna. Pellentesque lacinia tortor id purus mollis
              maximus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. In ultrices vel dolor vel
              sodales.
            </p>
            <p>
              Vivamus interdum diam nec velit lobortis fringilla. Aliquam
              dapibus felis nec laoreet malesuada. Nullam gravida fermentum leo
              eu semper. Donec eget leo consequat neque dictum dignissim a
              malesuada dui. Nam at lacus laoreet, interdum velit sit amet,
              scelerisque augue. Aliquam quis feugiat odio, a ornare dui. In a
              condimentum ex, in placerat quam. Sed sed tincidunt nisl.
            </p>
            <p>
              Sed aliquet augue quis ullamcorper mollis. Nullam pulvinar, dui
              eget blandit aliquet, lacus ligula lacinia mi, ultr
            </p>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default WhyYouNeedAnAccountant;
