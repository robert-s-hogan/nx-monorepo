import {
  MdDesignServices,
  MdOutlineDesignServices,
  MdSpeed,
} from 'react-icons/md';
import { SiOpenai } from 'react-icons/si';
import { FaCode, FaWordpress, FaConnectdevelop } from 'react-icons/fa';

const servicesData = [
  {
    id: 'ai-integration',
    icon: <SiOpenai className="text-5xl mx-auto" color="var(--text-color)" />,
    title: 'AI Integration',
    description:
      'Utilizing the latest advancements in AI and custom GPT solutions. Our services enhance user interaction on your website, providing personalized and efficient responses to your customers.',
  },
  {
    id: 'full-stack-development',
    icon: <FaCode className="text-5xl mx-auto" color="var(--text-color)" />,
    title: 'Full-Stack Development',
    description:
      "Offering end-to-end solutions with expertise in both front-end and back-end technologies. Whether it's building responsive interfaces or robust server-side applications, we've got you covered.",
  },
  {
    id: 'wordpress-development',
    icon: (
      <FaWordpress className="text-5xl mx-auto" color="var(--text-color)" />
    ),
    title: 'WordPress Development',
    description:
      'Specializing in creating and optimizing WordPress sites for speed, responsiveness, and SEO. From theme customization to plugin development, we ensure your WordPress site stands out.',
  },
  {
    id: 'ui-ux-consultation',
    icon: (
      <MdOutlineDesignServices
        className="text-5xl mx-auto"
        color="var(--text-color)"
      />
    ),
    title: 'UI/UX Consultation and Design',
    description:
      'Enhance user experience with our expert UI/UX consultation and design services. We focus on creating intuitive and visually appealing interfaces that resonate with your target audience.',
  },
  {
    id: 'api-development',
    icon: (
      <FaConnectdevelop
        className="text-5xl mx-auto"
        color="var(--text-color)"
      />
    ),
    title: 'API Development and Integration',
    description:
      'Offering custom API development and integration services to enhance and streamline your business processes, ensuring seamless data exchange and system interoperability.',
  },
  {
    id: 'performance-optimization',
    icon: <MdSpeed className="text-5xl mx-auto" color="var(--text-color)" />,
    title: 'Performance Optimization',
    description:
      'Specializing in optimizing website performance for speed and efficiency. We ensure your site is fast, responsive, and optimized for the best user experience.',
  },
];

export default servicesData;
