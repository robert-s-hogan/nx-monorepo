import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Flex, Modal, Text } from '@with-nx/react-ui';
import { FiMail, FiMapPin, FiX } from 'react-icons/fi';
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
          icon={<FiX />}
          title="Thanks for taking the time to reach out!"
        >
          {isSubmitted ? (
            <Text>Your message has been sent! We'll get back to you soon.</Text>
          ) : (
            <>
              <Text>Fill in the form to start a conversation</Text>

              <Flex className="items-center mt-4">
                <FiMapPin className="h-6 w-6" />
                <Text className="ml-4">Sonoma County, CA</Text>
              </Flex>

              <Flex className="items-center mt-2">
                <FiMail className="h-6 w-6" />
                <Text className="ml-4">
                  <Link className="text" href="mailto:robert@robertshogan.com">
                    Email me
                  </Link>
                </Text>
              </Flex>

              <form
                className="pt-6 flex flex-col justify-center space-y-2"
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
                    className="w-full"
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
                    className="w-full mt-2"
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
                    className="w-full"
                  />
                </Flex>

                <Button
                  type="submit"
                  className="md:w-32 mt-3 btn-secondary"
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
