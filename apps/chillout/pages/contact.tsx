import ChilloutLayout from '../components/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';

const Contact = () => {
  return (
    <ChilloutLayout>
      <section className="pt-16">
        <div className="w-full lg:flex">
          <div className="relative flex-grow justify-center px-8 lg:px-20 flex items-center py-20 lg:py-48 bg-blue-500">
            <div>
              <h2 className="font-medium mb-5 text-blue-50">Get in Touch</h2>
              <div>
                <div className="flex items-center mb-10">
                  <div className="p-2 rounded-full mr-6 bg-blue-100">
                    <svg
                      className="text-blue-500 fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.3649 1.88322C4.30193 1.80222 4.22245 1.73554 4.13173 1.68762C4.04101 1.6397 3.94113 1.61162 3.83873 1.60527C3.73633 1.59891 3.63375 1.61442 3.5378 1.65075C3.44185 1.68709 3.35474 1.74342 3.28223 1.81602L2.1793 2.92002C1.6641 3.43628 1.47423 4.16695 1.6993 4.80802C2.63342 7.46144 4.15295 9.87052 6.14517 11.8566C8.13122 13.8487 10.5403 15.3683 13.1937 16.3024C13.8348 16.5275 14.5654 16.3376 15.0817 15.8224L16.1846 14.7195C16.2572 14.647 16.3136 14.5599 16.3499 14.4639C16.3862 14.368 16.4017 14.2654 16.3954 14.163C16.389 14.0606 16.361 13.9607 16.313 13.87C16.2651 13.7793 16.1984 13.6998 16.1174 13.6368L13.6566 11.7232C13.5701 11.6561 13.4694 11.6095 13.3623 11.587C13.2551 11.5644 13.1442 11.5665 13.038 11.5931L10.702 12.1766C10.3902 12.2545 10.0635 12.2503 9.75375 12.1645C9.44401 12.0788 9.16177 11.9142 8.9345 11.687L6.31477 9.06615C6.08732 8.83899 5.92258 8.5568 5.83659 8.24706C5.75061 7.93732 5.7463 7.61058 5.8241 7.29869L6.40863 4.96268C6.4352 4.85644 6.43729 4.74555 6.41475 4.63838C6.39221 4.53121 6.34562 4.43056 6.2785 4.34402L4.3649 1.88322ZM2.4769 1.01175C2.66356 0.82503 2.88781 0.680157 3.13475 0.58675C3.3817 0.493343 3.64569 0.453539 3.9092 0.469984C4.17271 0.486428 4.4297 0.558742 4.66312 0.682126C4.89654 0.80551 5.10103 0.977139 5.26303 1.18562L7.17663 3.64535C7.52757 4.09655 7.6513 4.68428 7.51263 5.23895L6.92917 7.57495C6.899 7.69594 6.90063 7.82268 6.9339 7.94286C6.96717 8.06303 7.03094 8.17256 7.11903 8.26082L9.73983 10.8816C9.82819 10.9699 9.93791 11.0338 10.0583 11.067C10.1787 11.1003 10.3056 11.1018 10.4268 11.0715L12.7617 10.488C13.0354 10.4196 13.3211 10.4143 13.5972 10.4725C13.8733 10.5307 14.1325 10.6509 14.3553 10.824L16.815 12.7376C17.6993 13.4256 17.7804 14.7323 16.9889 15.5227L15.886 16.6256C15.0966 17.415 13.9169 17.7616 12.8172 17.3744C10.0024 16.384 7.44679 14.7726 5.33983 12.6598C3.22707 10.5531 1.61568 7.99784 0.625166 5.18348C0.239033 4.08482 0.585699 2.90402 1.37503 2.11468L2.47797 1.01175H2.4769Z" />
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="17.0667"
                            height="17.0667"
                            fill="white"
                            transform="translate(0.466797 0.466667)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-blue-100">
                      Telephone Number
                    </span>
                    <span className="block font-medium text-blue-50">
                      <a href="tel:+27813434552">(+27) 81 343 4552</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full mr-6 bg-blue-100">
                  <svg
                    className="text-blue-500 fill-current"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.8571 0H1.14286C0.839753 0 0.549062 0.120408 0.334735 0.334735C0.120408 0.549062 0 0.839753 0 1.14286V10.2857C0 10.5888 0.120408 10.8795 0.334735 11.0938C0.549062 11.3082 0.839753 11.4286 1.14286 11.4286H14.8571C15.1602 11.4286 15.4509 11.3082 15.6653 11.0938C15.8796 10.8795 16 10.5888 16 10.2857V1.14286C16 0.839753 15.8796 0.549062 15.6653 0.334735C15.4509 0.120408 15.1602 0 14.8571 0V0ZM13.6 1.14286L8 5.01714L2.4 1.14286H13.6ZM1.14286 10.2857V1.66286L7.67429 6.18286C7.76994 6.24922 7.88358 6.28478 8 6.28478C8.11642 6.28478 8.23006 6.24922 8.32571 6.18286L14.8571 1.66286V10.2857H1.14286Z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-medium text-blue-100">
                    Email Address
                  </span>
                  <span className="block font-medium text-blue-50">
                    <a href="mailto:accounting@business.com">
                      accounting@business.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full bg-blue-100 mr-6">
                  <svg
                    className="text-blue-500 fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path d="M17.4284 4.87413L15.4017 3.31253C15.264 3.22412 15.1142 3.15601 14.9571 3.11029C14.8006 3.05964 14.6377 3.03148 14.4733 3.02666H8.63987L9.32339 7.29333H14.4733C14.6132 7.29333 14.7881 7.26176 14.9562 7.2097C15.1244 7.15765 15.2865 7.08597 15.4008 7.00832L17.4275 5.44501C17.5427 5.36736 17.5999 5.2641 17.5999 5.16C17.5999 5.05589 17.5427 4.95264 17.4284 4.87413V4.87413ZM7.78654 1.32H6.9332C6.82004 1.32 6.71152 1.36495 6.6315 1.44496C6.55149 1.52498 6.50654 1.6335 6.50654 1.74666V4.73333H3.65982C3.51816 4.73333 3.34408 4.7649 3.17598 4.81781C3.00702 4.86901 2.84574 4.93984 2.73139 5.0192L0.704723 6.5808C0.589523 6.65845 0.533203 6.76256 0.533203 6.86666C0.533203 6.96992 0.589523 7.07317 0.704723 7.15253L2.73139 8.71584C2.84574 8.79349 3.00702 8.86517 3.17598 8.91637C3.34408 8.96842 3.51816 9 3.65982 9H6.50654V16.2533C6.50654 16.3665 6.55149 16.475 6.6315 16.555C6.71152 16.635 6.82004 16.68 6.9332 16.68H7.78654C7.8997 16.68 8.00822 16.635 8.08824 16.555C8.16825 16.475 8.2132 16.3665 8.2132 16.2533V1.74666C8.2132 1.6335 8.16825 1.52498 8.08824 1.44496C8.00822 1.36495 7.8997 1.32 7.78654 1.32V1.32Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="17.0667"
                          height="17.0667"
                          fill="white"
                          transform="translate(0.533203 0.466667)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-medium text-blue-100">
                    Physical Address
                  </span>
                  <span className="block font-medium text-blue-50">
                    3 Abbey Rd, London, United Kingdom
                  </span>
                </div>
              </div>
            </div>

            <svg
              className="absolute hidden lg:block lg:bottom-0 lg:-right-16"
              width="86"
              height="940"
              viewBox="0 0 86 940"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.687 -2.85492e-06L17.3194 10.4444C13.9517 20.8889 6.97588 41.7778 13.9517 62.6667C20.687 83.5556 41.6145 104.444 50.2742 125.333C58.9339 146.222 55.3257 167.111 48.5904 188C41.6145 208.889 31.271 229.778 38.0063 250.667C44.9822 271.556 69.2773 292.444 69.2773 313.333C69.2773 334.222 44.9822 355.111 34.6387 376C24.2952 396.889 27.6628 417.778 41.6145 438.667C55.3256 459.556 79.6208 480.445 84.9128 501.333C89.9643 522.222 76.2532 543.111 67.5935 564C58.9338 584.889 55.3256 605.778 60.6177 626.667C65.9097 647.556 79.6208 668.444 81.3046 689.333C83.229 710.222 72.645 731.111 67.5935 752C62.3015 772.889 62.3015 793.778 62.3015 814.667C62.3015 835.556 62.3015 856.445 65.9097 877.333C69.2773 898.222 76.2532 919.111 79.6208 929.556L83.229 940L-5.39882e-06 940L-4.94228e-06 929.556C-4.48574e-06 919.111 -3.57266e-06 898.222 -2.65958e-06 877.333C-1.74649e-06 856.445 -8.33411e-07 835.556 7.96714e-08 814.667C9.92754e-07 793.778 1.90584e-06 772.889 2.81892e-06 752C3.732e-06 731.111 4.64509e-06 710.222 5.55817e-06 689.333C6.47125e-06 668.444 7.38433e-06 647.556 8.29741e-06 626.667C9.2105e-06 605.778 1.01236e-05 584.889 1.10367e-05 564C1.19497e-05 543.111 1.28628e-05 522.222 1.37759e-05 501.333C1.4689e-05 480.445 1.56021e-05 459.556 1.65152e-05 438.667C1.74282e-05 417.778 1.83413e-05 396.889 1.92544e-05 376C2.01675e-05 355.111 2.10806e-05 334.222 2.19937e-05 313.333C2.29067e-05 292.444 2.38198e-05 271.556 2.47329e-05 250.667C2.5646e-05 229.778 2.65591e-05 208.889 2.74721e-05 188C2.83852e-05 167.111 2.92983e-05 146.222 3.02114e-05 125.333C3.11245e-05 104.444 3.20376e-05 83.5556 3.29506e-05 62.6667C3.38637e-05 41.7778 3.47768e-05 20.8889 3.52333e-05 10.4444L3.56899e-05 -3.75918e-06L20.687 -2.85492e-06Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
          <div className="flex-grow justify-center bg-white px-8 lg:px-20 py-20 lg:py-48">
            <div className="flex justify-center">
              <div>
                <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">
                  Have a Question?
                </h2>
                <span className="text-sm mb-4 text-gray-400">
                  Pop us a message and we'll get in touch.
                </span>
                {/* <form
                  name="contact"
                  data-netlify="true"
                  autoComplete="off"
                  netlify-honeypot="bot-field"
                >
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="input-animated">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      pattern="\S+.*"
                      placeholder="the placeholder"
                    />
                    <label htmlFor="name" className="label-name">
                      <span className="content-name">Name</span>
                    </label>
                  </div>
                  <div className="input-animated">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="the placeholder"
                    />
                    <label htmlFor="email" className="label-email">
                      <span className="content-email">Email</span>
                    </label>
                  </div>
                  <div>
                    <textarea
                      name="question"
                      placeholder="Your Question"
                      id="question"
                      cols={30}}
                      rows={5}
                      minLength={10}
                      maxLength={100}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="submit-button"
                    className="w-full font-semibold rounded-md uppercase text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-blue-500 text-blue-50 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                  >
                    Send Message
                  </button>
                  <span
                    id="success"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
                  >
                    Thanks! We'll be in touch soon.
                  </span>
                  <span
                    id="error"
                    className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
                  >
                    Whoops... Something went wrong.
                  </span>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ChilloutLayout>
  );
};

export default Contact;
