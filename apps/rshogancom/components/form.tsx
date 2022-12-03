import React from 'react';

export const Form = () => {
  return (
    <form
      className="p-6 flex flex-col justify-center"
      action="https://submit-form.com/Mj5aEdSo"
    >
      <div className="flex flex-col">
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
      </div>

      <div className="flex flex-col mt-2">
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
      </div>

      <div className="flex flex-col mt-2">
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
      </div>

      <button
        type="submit"
        className="bg-vivid-500 md:w-32 font-bold py-3 px-6 rounded-lg mt-3 text-black hover:bg-vivid-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
