import Image from 'next/image';
import Link from 'next/link';

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
    <div className="card p-6 overflow-hidden text-center border-2 bg-white rounded">
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
        <h3 className="font-semibold">{title}</h3>
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
        <header className="light-gradient flex flex-col items-center justify-center space-y-4 light-gradient text-center py-16">
          <Heading level={1} isLoading>
            Innovative Digital Solutions
          </Heading>
          <Heading level={2} isLoading>
            Explore our products and services to enhance your business
          </Heading>
          <Button className="btn-primary" isLoading>
            Get Started
          </Button>
        </header>
      </RSHSection>
      {/* ABOUT */}
      <RSHSection className="bg-white py-8">
        <div className="container mx-auto px-6 text-center">
          <Heading level={2} className="text-3xl font-semibold text-gray-800">
            About Us
          </Heading>
          <Text className="mt-4 text-gray-600">
            Learn more about our journey, mission, and the team behind our
            success.
          </Text>
          {/* Add more content or images as needed */}
        </div>
      </RSHSection>
      {/* SERVICE */}
      <RSHSection className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center text-gray-800"
          >
            Our Services
          </Heading>
          <Grid className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            {/* Repeat for each service */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Heading level={3} className="font-semibold">
                Service Name
              </Heading>
              <Text className="mt-2 text-gray-600">
                Brief description of the service...
              </Text>
            </div>
          </Grid>
        </div>
      </RSHSection>
      {/* PORTFOLIO */}
      <RSHSection className="bg-white py-8">
        <div className="container mx-auto px-6">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center text-gray-800"
          >
            Our Portfolio
          </Heading>
          <Text className="mt-4 text-gray-600">
            Check out some of our recent projects and case studies.
          </Text>
          {/* Portfolio items */}
        </div>
      </RSHSection>
      {/* BLOG */}
      <RSHSection className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center text-gray-800"
          >
            Latest Insights
          </Heading>
          <Grid className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog posts or resources */}
          </Grid>
        </div>
      </RSHSection>
      {/* CONTACT */}
      <RSHSection className="bg-white py-8">
        <div className="container mx-auto px-6 text-center">
          <Heading level={2} className="text-3xl font-semibold text-gray-800">
            Get in Touch
          </Heading>
          <Text className="mt-4 text-gray-600">
            Have a question or want to work together?
          </Text>
          {/* Contact details or a form */}
        </div>
      </RSHSection>
      {/* FAQ */}
      <RSHSection className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <Heading
            level={2}
            className="text-3xl font-semibold text-center text-gray-800"
          >
            Frequently Asked Questions
          </Heading>
          {/* FAQ items */}
        </div>
      </RSHSection>
      {/* NEWSLETTER */}
      <RSHSection className="bg-white py-8">
        <div className="container mx-auto px-6 text-center">
          <Heading level={2} className="text-3xl font-semibold text-gray-800">
            Stay Updated
          </Heading>
          <Text className="mt-4 text-gray-600">
            Subscribe to our newsletter for the latest updates.
          </Text>
          {/* Newsletter form */}
        </div>
      </RSHSection>
      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Featured Products
          </h2>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 shadow-lg rounded-lg p-4">
                <img
                  className="w-full h-48 object-cover rounded"
                  src="path_to_product_image"
                  alt="product"
                />
                <h3 className="mt-2 text-xl font-medium text-gray-700">
                  Product Name
                </h3>
                <p className="mt-2 text-gray-600">
                  Short product description...
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg text-gray-700">$Price</span>
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            As Seen In
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-6">
            {collaborators.map((collaborator) => (
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
                <Image
                  src={collaborator.src}
                  height={collaborator.height}
                  width={collaborator.width}
                  loading="lazy"
                  alt={collaborator.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            What Our Customers Say
          </h2>
          <div className="mt-6 space-y-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600">
                "This product was amazing, it really helped me with..."
              </p>
              <div className="flex items-center mt-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="path_to_customer_photo"
                  alt="customer"
                />
                <div className="ml-4">
                  <p className="text-gray-800 text-lg font-medium">
                    Customer Name
                  </p>
                  <p className="text-gray-600 text-sm">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Our Products
        </h2>
        <div className="flex items-center flex-wrap mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src="path_to_your_image"
                alt="product image"
              />
              <div className="p-4">
                <h3 className="text-xl text-gray-800 font-semibold">
                  Product One
                </h3>
                <p className="text-gray-600 mt-2">
                  Description of Product One.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between">
            <div>
              <Heading level={3} className="text-lg font-semibold">
                YourLogo
              </Heading>
              {/* Footer links */}
            </div>
            <div>{/* Social media links */}</div>
          </div>
          <Text className="text-gray-600 text-sm text-center mt-4">
            © 2023 Your Web Dev Business. All rights reserved.
          </Text>
        </div>
      </footer>

      {/* Hi Im Robert */}
      <RSHSection className="bg-surface w-full py-24 flex flex-col justify-center text-center px-4">
        <Heading level={2}>
          Hi, I’m Robert.
          <br /> Nice to meet you.
        </Heading>
        <Text>
          Since beginning my journey as a freelance designer nearly 6 years ago,
          Ive done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. Im quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </Text>
      </RSHSection>

      {/* Skills */}
      <RSHSection className="bg-primary py-24">
        <Grid className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-12 md:px-8 lg:gap-24 lg:px-16 xl:gap-8 xl:px-0">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </Grid>
      </RSHSection>

      {/* Testimonials */}
      <RSHSection className="bg-primary w-full pb-12">
        <div className="px-5 py-24">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <Text className="leading-relaxed text-lg mb-6">
              Robert helped me create a website and set up my blog. I had zero
              experience and had no idea how to go about it. Thanks to Roberts
              help, my site is up and running, and I am very pleased with how it
              looks. Robert was so patient and knowledgeable. He made the
              process easy and enjoyable. I highly recommend Robert!
            </Text>
            <Image
              className="object-cover mx-auto rounded-full"
              alt="Woman Testimonial Portrait"
              height={64}
              width={64}
              src="https://rshogan.imgix.net/projects/rshogancom/images/rshhogan_testimonials_ellen_2.avif"
            />

            <Heading level={2} className="text-gray-500 first-line:mt-3">
              Ellen S.
            </Heading>
            <Text className="text-gray-500">
              <Link href="https://anitaliandish.com/">AnItalianDish.com</Link>
            </Text>
          </div>
        </div>
      </RSHSection>

      {/* Start a Project  */}
      <RSHSection className="bg-surface pb-32 -mt-32 md:-mt-24 lg:-mt-16 text-center">
        <div className="w-11/12 mx-auto shadow-lg overflow-hidden">
          <Flex className="flex-col space-y-8 px-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center py-12">
            <Heading level={2} className="lg:!w-1/3">
              Start a project
            </Heading>
            <Text>
              Interested in working together? <span className="lg:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </Text>
            <Button className="btn-primary lg:!w-1/3" onClick={toggle}>
              Lets do this
            </Button>
          </Flex>
        </div>
      </RSHSection>
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHoganComLayout>
  );
}

export default Index;
