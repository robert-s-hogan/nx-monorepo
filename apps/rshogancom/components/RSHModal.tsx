import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Flex, Modal, Text } from '@with-nx/react-ui';
import { Mail, MapPin, X } from '@with-nx/icons';
import { ModalProps } from '@with-nx/types';

export function RSHModal({
  isShowing,
  toggle,
  title,
  description,
  icon,
  children,
  onClick,
  buttonLocation = 'right',
}: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  return (
    <>
      {isShowing && (
        <Modal
          isShowing={isShowing}
          toggle={toggle}
          icon={<X />}
          title="Thanks for taking the time to reach out!"
        >
          {isSubmitted ? (
            <Text className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
              Your message has been sent! We'll get back to you soon.
            </Text>
          ) : (
            <>
              <Text className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
                Fill in the form to start a conversation
              </Text>

              <Flex className="items-center mt-4 text-gray-600 dark:text-gray-400">
                <MapPin className="h-6 w-6" />
                <Text className="ml-4 text-md tracking-wide font-semibold w-40">
                  Sonoma County, CA
                </Text>
              </Flex>

              <Flex className="items-center mt-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-6 w-6" />
                <Text className="ml-4 text-md tracking-wide font-semibold w-40">
                  <Link className="text" href="mailto:robert@robertshogan.com">
                    Email me
                  </Link>
                </Text>
              </Flex>

              <form
                className="pt-6 flex flex-col justify-center"
                action="https://submit-form.com/Mj5aEdSo"
                onSubmit={handleSubmit}
              >
                <Flex className="flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </Flex>

                <Flex className="flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </Flex>

                <Flex className="flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="What would you like to start building?"
                    className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                  />
                </Flex>

                <Button
                  type="submit"
                  className="md:w-32 mt-3"
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </form>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

export default RSHModal;
