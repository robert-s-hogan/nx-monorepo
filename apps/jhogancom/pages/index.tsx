import React from 'react';
import Image from 'next/image';
import { Flex, Heading, Section, Text } from '@with-nx/react-ui';
import { useTheme, ThemeType } from '@with-nx/theme';

import dynamic from 'next/dynamic';

const ProjectSection = dynamic(() => import('../components/JHProjectSection'));
const JHSocialMediaIcons = dynamic(
  () => import('../components/JHSocialMediaIcons')
);

import JHoganComLayout from '../components/JHoganComLayout';

export function Index() {
  const { theme } = useTheme();

  // const { isShowing, toggle } = useModal();
  // const dialogRef = useRef(null);

  // const handleCloseDialog = () => {
  //   toggle();
  // };

  // useHandleBackdropClick(dialogRef, () => {
  //   toggle(); // Toggle the dialog visibility
  //   handleCloseDialog(); // Call handleCloseDialog function
  // });

  // useEffect(() => {
  //   if (isShowing) {
  //     dialogRef.current?.showModal();
  //   } else {
  //     dialogRef.current?.close();
  //   }
  // }, [isShowing]);

  // const fields = [
  //   { name: 'name', label: 'Full Name', type: 'text', required: true },
  //   { name: 'email', label: 'Email', type: 'email', required: true },
  //   {
  //     name: 'message',
  //     label: 'Message',
  //     type: 'textarea',
  //     required: true,
  //   },
  // ];

  // const handleFormSubmit = (values) => {
  //   // handle form submission here
  //   console.log(values);
  //   // for example, sending the form data to the server or an API endpoint
  // };

  return (
    <JHoganComLayout>
      <Section
        style={{ minHeight: '620px' }}
        className={`${
          theme && (theme as ThemeType).name === 'light'
            ? 'light-gradient'
            : 'dark-gradient'
        } scroll-smooth w-full h-full flex justify-center items-center`}
      >
        <Flex className="justify-center flex-col items-center h-full text-center space-y-6">
          <Heading level={1} className="text-shadow">
            Hi, I am Jessica.
            <br />
            <Text className="text-shadow">Data Scientist and Data Analyst</Text>
          </Heading>
          <Text className="w-4/5 text-shadow">
            I want to help you make the best data-driven decisions and translate
            data into actionable insights.
          </Text>
          {/* <Flex className="my-4 flex-col justify-center items-center space-x-4 md:space-x-0 md:flex-row md:space-between">
            <Button className="btn-primary" onClick={handleCloseDialog}>
              Contact me
            </Button>
          </Flex> */}
        </Flex>
      </Section>
      <Section id="projects">
        <ProjectSection />
      </Section>
      <Section id="who-i-am">
        <div className="items-center lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2 lg:mr-24 space-y-6">
            <Heading level={2}>Who I am</Heading>

            <Text>
              I am a Data Scientist and Data Analyst based in Sonoma County,
              California. I have a master’s degree and over eight years
              experience providing actionable insights. I have a diverse
              background working in both public and private sectors from
              research to marketing which gives me a unique eye in which to
              approach your data-driven questions.
            </Text>

            <Text>
              I look forward to hearing about how I can help you solve your data
              questions!
            </Text>

            <JHSocialMediaIcons />
          </div>

          <div className="mt-8 lg:col-span-1">
            <Flex className="items-center justify-center lg:justify-end">
              <Image
                width={355}
                height={384}
                src="https://app-assets.vercel.app/apps/jhogancom/jessica_portrait.webp"
                alt="Jessica Hogan's Portrait"
                loading="lazy"
                className="object-contain h-96 w-auto"
              />
            </Flex>
          </div>
        </div>
      </Section>
      {/* <Section id="contact" className="lg:px-24" style={{ minHeight: '150px' }}>
        <div className="bg-primary w-full rounded-md shadow-lg">
          <Flex className="flex-col md:flex-row md:items-center mx-auto justify-center md:justify-between p-8 space-y-6 md:space-y-0 md:space-x-6">
            <span className="text-3xl font-semibold text-center text-on-primary whitespace-nowrap">
              Start a project
            </span>
            <Text className="text-center text-on-primary lg:whitespace-nowrap">
              Interested in working together? <span className="md:block"></span>
              We should queue up a chat.
              <span className="hidden lg:inline-flex">
                &nbsp;I’ll buy the coffee.
              </span>
            </Text>
            <Button
              className="mx-auto btn-primary font-semibold border-2 whitespace-nowrap md:whitespace-normal"
              onClick={toggle}
            >
              <span className="md:block">Contact</span>
              <span className="hidden md:hidden">Let's do this!</span>
            </Button>
          </Flex>
        </div>
      </Section> */}

      {/* <Dialog
        backdropRef={dialogRef}
        onClose={handleCloseDialog}
        title="Thanks for taking the time to reach out!"
        isShowing={isShowing}
        toggle={toggle}
      >
        <Flex className="flex-col p-2 md:p-6 space-y-6">
          <Heading level={2} className="text-black font-semibold text-center">
            Got ideas? Let's talk!
          </Heading>
          <Flex className="items-center space-x-4">
            <FiMapPin className="w-9 h-9" />

            <Text>Sonoma County, CA</Text>
          </Flex>

          <Flex className="items-center space-x-4">
            <FiMail className="w-8 h-8" />
            <Link className="text" href="mailto:robert@robertshogan.com">
              <Text className="underline">Email me</Text>
            </Link>
          </Flex>

          <Form
            fields={fields}
            onSubmit={handleFormSubmit}
            action="https://formsubmit.co/8cd307fd3307175b764f19822bcd9a02"
          />
        </Flex>
      </Dialog> */}
    </JHoganComLayout>
  );
}

export default Index;
