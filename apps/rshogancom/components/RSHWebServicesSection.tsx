import { Grid, Heading, Text } from '@with-nx/react-ui';
import { FaCode, FaWordpress, FaConnectdevelop } from 'react-icons/fa';
import {
  MdDesignServices,
  MdOutlineDesignServices,
  MdSpeed,
} from 'react-icons/md';
import { motion } from 'framer-motion';

import RSHSection from '../components/RSHSection';

const RSHWebServicesSection = () => {
  // Add your service cards here as per your original code
  return (
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
            Crafting unique digital products like flyers, invitations, and more.
            Our designs are tailored to your needs, ensuring each product is as
            unique and special as your event or brand.
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
            Offering custom API development and integration services to enhance
            and streamline your business processes, ensuring seamless data
            exchange and system interoperability.
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
  );
};

export default RSHWebServicesSection;
