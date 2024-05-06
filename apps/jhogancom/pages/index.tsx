import React from 'react';
import Image from 'next/image';
import { Flex, Heading } from '@with-nx/react-ui';
import { Text } from '@with-nx/generic-ui';
import { useTheme, ThemeType } from '@with-nx/theme';
import JHSection from '../components/JHSection';

import dynamic from 'next/dynamic';

const ProjectSection = dynamic(() => import('../components/JHProjectSection'));
const JHSocialMediaIcons = dynamic(
  () => import('../components/JHSocialMediaIcons')
);

import JHLayout from '../components/JHLayout';

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
    <JHLayout>
      <JHSection
        className={`${
          theme && (theme as ThemeType).name === 'light'
            ? 'light-gradient'
            : 'dark-gradient'
        } scroll-smooth w-full h-full flex justify-center items-center`}
        style={{ minHeight: '620px', margin: '0 auto' }}
      >
        <Flex className="justify-center flex-col items-center h-full text-center space-y-6">
          <Heading level={1} className="text-shadow">
            Hi, I am Jessica.
            <br />
            <Text
              className="text-shadow text-4xl"
              text="Data Scientist and Data Analyst"
            />
          </Heading>
          <Text
            className="text-xl text-shadow"
            text="I want to help you make the best data-driven decisions and translate
            data into actionable insights."
          />
        </Flex>
      </JHSection>
      <JHSection id="projects">
        <ProjectSection />
      </JHSection>
      <JHSection id="who-i-am">
        <div className="items-center lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2 lg:mr-24 space-y-6">
            <Heading level={2}>Who I am</Heading>

            <Text
              text="I am a Data Scientist and Data Analyst based in Sonoma County,
              California. I have a master’s degree and over eight years
              experience providing actionable insights. I have a diverse
              background working in both public and private sectors from
              research to marketing which gives me a unique eye in which to
              approach your data-driven questions."
            />

            <Text
              text="I look forward to hearing about how I can help you solve your data
              questions!"
            />

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
      </JHSection>
    </JHLayout>
  );
}

export default Index;
