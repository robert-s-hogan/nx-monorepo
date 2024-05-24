'use client';
import React, { useState } from 'react';
import { Label } from './label';
import { Input } from './input';
import { TextArea } from './TextArea';
import { Meteors } from './meteors';

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
    }, 100); // Delay of 100ms
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-surface-color min-h-[560px] relative">
      <form
        className={`my-8 ${
          isSuccess ? 'opacity-20 pointer-events-none' : 'opacity-100'
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

        <button
          className="btn-primary btn-md w-full text-white rounded-md"
          aria-label="Sign up →"
          type="submit"
        >
          {loading ? <div className="loader" /> : 'Send Message →'}
        </button>
      </form>
      {isSuccess && (
        <div className="absolute inset-0 bg-surface-color bg-opacity-95 rounded-2xl p-4 md:p-8 shadow-xl overflow-hidden">
          <h1 className="h-full flex flex-col justify-center items-center font-bold text-xl text-success-color mb-4">
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
