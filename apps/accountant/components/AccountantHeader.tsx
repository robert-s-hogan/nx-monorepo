import React, { useState } from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

const AccountantHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="container mx-auto max-w-7xl ">
      <Flex className="justify-end w-full h-full pt-8">
        <Link href="/contact">
          <Button className="btn-primary uppercase" onClick={() => {}}>
            Request a Free Consultation
          </Button>
        </Link>
      </Flex>
      <div className="container-fluid" id="banner">
        <a href="/contact">
          <img
            alt="accounting-logo"
            className="logo"
            src="images/accounting-logo.png"
          />
        </a>
      </div>
      <nav
        className="navbar navbar-default navbar-static-top"
        id="topnavbar"
        role="navigation"
      >
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-target=".navbar-collapse"
            data-toggle="collapse"
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="http://yourwebsitename.com/accounting-services.html">
                ACCOUNTING SERVICES
              </a>
            </li>
            <li>
              <a href="http://yourwebsitename.com/accounting-resources.html">
                RESOURCES
              </a>
            </li>
            <li>
              <a href="http://yourwebsitename.com/blog.html">BLOG</a>
            </li>
            <li>
              <a href="http://yourwebsitename.com/about.html">ABOUT</a>
            </li>
            <li>
              <a href="http://yourwebsitename.com/contact.php">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AccountantHeader;
