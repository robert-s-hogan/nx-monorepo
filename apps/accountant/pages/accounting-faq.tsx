import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';

const AccountingFaq = () => {
  return (
    <AccountantLayout>
      <div id="faq" className="flex flex-col items-center">
        <div className="w-full md:w-8/12 lg:w-6/12">
          <div className="text-center">
            <h4 className="text-lg font-bold">FREQUENTLY ASKED QUESTIONS</h4>
            <p className="mt-2">
              Below you will find a selection of the most frequently asked
              questions. Simply click on the question to view the answer.
            </p>
          </div>

          <div className="my-6">
            <h3 className="text-2xl font-bold mb-4">
              ACCOUNTING & BOOKKEEPING
            </h3>
            <button className="w-full bg-gray-100 text-gray-900 py-3 px-4 mb-2 rounded-lg font-bold">
              What Is The Difference Between Vat And Tax?
            </button>
            <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mb-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <button className="w-full bg-gray-100 text-gray-900 py-3 px-4 mb-2 rounded-lg font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mb-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <h3 className="service-faq">TAXATION</h3>
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />

            <h3 className="service-faq">PAYROLL &amp; HR</h3>
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <h3 className="service-faq">FINANCIAL &amp; BUSINESS MANAGEMENT</h3>
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />

            <h3 className="service-faq">STATUTORY &amp; SECRETARIAL</h3>
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />
            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <h3 className="service-faq">OTHER SUPPORT SERVICES</h3>

            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>

            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>

            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>

            <h3 className="service-faq">ACCOUNTING &amp; BOOKKEEPING</h3>

            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>

            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
            <br />

            <button className="accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </button>

            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet pharetra tellus, vulputate molestie justo. Ut eget
                suscipit tortor.
              </p>
              <p>
                Duis at rutrum odio, id dictum metus. Aenean consectetur
                sollicitudin neque. Suspendisse semper ac ex eget condimentum.
                Praesent non blandit massa, commodo ullamcorper lacus. Quisque
                id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
              </p>
              <p>
                Sed iaculis dignissim laoreet. In porta turpis et massa dapibus
                tempus. Quisque eu convallis diam. Maecenas sagittis enim erat,
                at lobortis nunc volutpat in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default AccountingFaq;
