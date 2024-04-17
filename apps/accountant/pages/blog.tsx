import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';

const Blog = () => {
  return (
    <AccountantLayout>
      <div className="blog-background">
        <h2>Accountant Blog</h2>
      </div>
      <div className="container blog">
        <div className="row">
          <div className="col-sm-8 blog-main">
            <div className="blog-post">
              <br />
              <a href="http://yourwebsitename.com/">
                <img
                  src="images/blog-post1-img.jpg"
                  className="img-responsive"
                  alt="blog-post-img"
                />
              </a>
              <h2 className="text-center">
                <a
                  className="text-2xl font-bold"
                  href="http://yourwebsitename.com/"
                >
                  Why You Need an Accountant
                </a>
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur aliquet purus sit amet quam eleifend feugiat. Vivamus
                sit amet mi tellus. Vestibulum et mi nec nisl sollicitudin
                tincidunt id non augue. Sed rutrum blandit nibh et malesuada.
                Quisque vel lacus gravida, viverra nisi sed, faucibus quam.
                Aenean lobortis sapien lorem, et faucibus ante consectetur
                accumsan...
              </p>
              <br />
              <a
                className="inline-block font-bold text-blue-500"
                href="http://yourwebsitename.com/"
              >
                <strong>Read Article</strong>
              </a>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <a href="http://yourwebsitename.com/">
                <img
                  src="images/blog-post2-img.jpg"
                  className="img-responsive"
                  alt="blog-post-img"
                />
              </a>
              <h2 className="text-center">
                <a
                  className="text-2xl font-bold"
                  href="http://yourwebsitename.com/"
                >
                  How to Find a Qualified Accountant
                </a>
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur aliquet purus sit amet quam eleifend feugiat. Vivamus
                sit amet mi tellus. Vestibulum et mi nec nisl sollicitudin
                tincidunt id non augue. Sed rutrum blandit nibh et malesuada.
                Quisque vel lacus gravida, viverra nisi sed, faucibus quam.
                Aenean lobortis sapien lorem, et faucibus ante consectetur
                accumsan...
              </p>
              <br />
              <a
                className="inline-block font-bold text-blue-500"
                href="http://yourwebsitename.com/"
              >
                <strong>Read Article</strong>
              </a>
              <br />
              <br />
              <hr />
              <br />
              <br />
            </div>
            <br />
          </div>
          <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module">
              <h4>Blog Posts</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="http://yourwebsitename.com/">
                    Why You Need an Accountant
                  </a>
                </li>
                <br />
                <li>
                  <a href="http://yourwebsitename.com/">
                    How to Find a Qualified Accountant
                  </a>
                </li>
                <br />
              </ol>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default Blog;
