import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaWordpress, FaConnectdevelop } from 'react-icons/fa';
import {
  MdDesignServices,
  MdOutlineDesignServices,
  MdSpeed,
} from 'react-icons/md';
import { motion } from 'framer-motion';

import { Button, Flex, Grid, Heading, Text } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHoganComLayout from '../components/RSHoganComLayout';
import RSHSection from '../components/RSHSection';
import RSHModal from '../components/RSHModal';

import { collaborators } from '../data/collaborators';
import { featureCards } from '../data/featureCards';

export function Index() {
  const { isShowing, toggle } = useModal();

  const FeatureCard = ({ title, description, svgPathD }) => (
    <div className="card p-6 overflow-hidden text-center border-2 rounded">
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
          d={svgPathD}
        />
      </svg>
      <div className="p-4 h-auto space-y-2">
        <Heading level={3} className="font-semibold">
          {title}
        </Heading>
        <p className="text-md text-center leading-relaxed block lg:text-sm">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <RSHoganComLayout>
      {/* HERO */}
      <RSHSection fullWidth>
        <header className="light-gradient py-28">
          <div className="container max-w-3xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
            <Heading level={1}>Empowering Your Digital Presence</Heading>
            <Heading level={2}>
              Tailored web solutions and creative digital products at your
              fingertips
            </Heading>
            {/* <Button className="btn-primary">Discover More</Button> */}
          </div>
        </header>
      </RSHSection>

      {/* COMPREHENSIVE WEB SERVICES */}
      <RSHSection>
        <Heading level={2}>Comprehensive Web Services</Heading>
        <Grid className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full-Stack Development */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              Full-Stack Development
            </Heading>
            <Text className="mt-2">
              Offering end-to-end solutions with expertise in both front-end and
              back-end technologies. Whether it's building responsive interfaces
              or robust server-side applications, we've got you covered.
            </Text>
          </div>

          {/* WordPress Development */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaWordpress className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              WordPress Development
            </Heading>
            <Text className="mt-2">
              Specializing in creating and optimizing WordPress sites for speed,
              responsiveness, and SEO. From theme customization to plugin
              development, we ensure your WordPress site stands out.
            </Text>
          </div>

          {/* Digital Product Design */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MdDesignServices className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              Digital Product Design
            </Heading>
            <Text className="mt-2">
              Crafting unique digital products like flyers, invitations, and
              more. Our designs are tailored to your needs, ensuring each
              product is as unique and special as your event or brand.
            </Text>
          </div>

          {/* UI/UX Consultation and Design */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MdOutlineDesignServices className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              UI/UX Consultation and Design
            </Heading>
            <Text className="mt-2">
              Enhance user experience with our expert UI/UX consultation and
              design services. We focus on creating intuitive and visually
              appealing interfaces that resonate with your target audience.
            </Text>
          </div>

          {/* API Development and Integration */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaConnectdevelop className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              API Development and Integration
            </Heading>
            <Text className="mt-2">
              Offering custom API development and integration services to
              enhance and streamline your business processes, ensuring seamless
              data exchange and system interoperability.
            </Text>
          </div>

          {/* Performance Optimization */}
          <div className="card p-6">
            <div className="icon-container mb-4">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MdSpeed className="text-5xl mx-auto" />
              </motion.div>
            </div>
            <Heading level={3} className="font-semibold">
              Performance Optimization
            </Heading>
            <Text className="mt-2">
              Specializing in optimizing website performance for speed and
              efficiency. We ensure your site is fast, responsive, and optimized
              for the best user experience.
            </Text>
          </div>
        </Grid>
      </RSHSection>

      {/* OUR STORY */}
      <RSHSection>
        <div className="container max-w-2xl mx-auto">
          <Heading level={2}>Our Story</Heading>
          <Text className="mt-4 ">
            Dive into our journey of transforming ideas into digital realities.
            From humble beginnings to becoming a beacon for creative and
            technical excellence, we're here to guide you through the digital
            landscape.
          </Text>
        </div>
        {/* Add more content or images as needed */}
      </RSHSection>

      {/* FEATURED PRODUCTS */}
      {/* <RSHSection>
        <Heading level={2}>Digital Creatives</Heading>
        <Text className="mt-4">
          Explore our unique digital products ranging from party PDFs to custom
          invites, crafted to add a special touch to your celebrations.
        </Text>
        <div className="flex flex-wrap mt-6">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="card">
              <Image
                className="w-full object-cover rounded-tr-lg rounded-tl-lg"
                src="https://rshogan.imgix.net/projects/rshogancom/images/Comic_book_swap_day_preview.jpg"
                loading="lazy"
                width={250}
                height={250}
                alt="product"
              />
              <Heading level={3} className="mt-2 text-xl font-medium">
                Super Hero Birthday Invitation
              </Heading>
              <Text className="mt-2">
                Make your child's birthday unforgettable with our
                superhero-themed digital invitation.
              </Text>
              <div className="flex justify-between items-center mt-4 p-4">
                <span className="text-lg">$4.99</span>
                <Button className="btn-primary">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </RSHSection> */}

      {/* AS SEEN IN */}
      <RSHSection>
        <Heading level={2}>As Seen In</Heading>
        <div className="flex flex-wrap justify-center items-center mt-6">
          {collaborators.map((collaborator) => (
            <div
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4"
              key={collaborator.alt}
            >
              <a href={collaborator.href} target="_blank" rel="noreferrer">
                <span className="sr-only">{collaborator.alt}</span>

                <Image
                  src={collaborator.src}
                  height={collaborator.height}
                  width={collaborator.width}
                  loading="lazy"
                  alt={collaborator.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </RSHSection>

      {/* NEWSLETTER */}
      {/* <RSHSection>
        <Heading level={2}>Stay Updated</Heading>
        <Text className="mt-4 ">
          Subscribe to our newsletter for the latest updates.
        </Text> */}
      {/* Newsletter form */}
      {/* </RSHSection> */}

      {/* WHAT OUR CUSTOMERS SAY */}
      <RSHSection>
        <div className="container mx-auto max-w-3xl">
          <Heading level={2}>What Our Customers Say</Heading>
          <div className="mt-6 space-y-4">
            <div className="card p-4">
              <Text className="">
                "Robert helped me create a website and set up my blog. I had
                zero experience and had no idea how to go about it. Thanks to
                Roberts help, my site is up and running, and I am very pleased
                with how it looks. Robert was so patient and knowledgeable. He
                made the process easy and enjoyable. I highly recommend Robert!"
              </Text>
              <div className="flex items-center mt-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="https://rshogan.imgix.net/projects/rshogancom/images/rshhogan_testimonials_ellen_2.jpeg"
                  loading="lazy"
                  width={200}
                  height={200}
                  alt="customer"
                />
                <div className="ml-4">
                  <Text className="text-lg font-medium">Ellen S.</Text>
                  <Text className="text-xs">Verified Buyer</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RSHSection>
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHoganComLayout>
  );
}

export default Index;
