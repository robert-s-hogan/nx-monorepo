'use client';
import React, { useState } from 'react';
import { Button, Label, Input, TextArea } from '../../atoms';
import { Meteors } from './Meteors';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Introduce a slight delay
    setTimeout(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setIsSuccess(true);
          setIsError(false);
          setResponseMessage('Message sent successfully!');
        } else {
          setIsSuccess(false);
          setIsError(true);
          setResponseMessage(result.message || 'Failed to send message.');
        }
      } catch (error) {
        console.error('Error during submission:', error); // Debug log
        setIsSuccess(false);
        setIsError(true);
        setResponseMessage('Failed to send message.');
      } finally {
        setLoading(false);
      }
    }, 200); // Delay of 100ms
  };

  return (
    <div className="shadow-input bg-surface-color relative mx-auto min-h-[560px] w-full max-w-md rounded-2xl p-4 md:p-8">
      <form
        className={`my-8 ${
          isSuccess ? 'pointer-events-none opacity-20' : 'opacity-100'
        } transition-opacity duration-500`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="youremail@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            placeholder="Your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          text=""
          className="flex w-full items-center justify-center"
          theme="primary"
        >
          {loading ? <div className="loader" /> : 'Send Message →'}
        </Button>
      </form>
      {isSuccess && (
        <div className="bg-surface-color absolute inset-0 overflow-hidden rounded-2xl bg-black/95 p-4 shadow-xl md:p-8">
          <h1 className="text-success-color mb-4 flex h-full flex-col items-center justify-center text-xl font-bold">
            {responseMessage}
          </h1>
          <Meteors number={20} />
        </div>
      )}
      {responseMessage && !isSuccess && (
        <p className={`mt-4 ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {responseMessage}
        </p>
      )}
    </div>
  );
}

export { ContactForm };
