import React, { useState } from 'react';
import Link from 'next/link';

const CoffeeShopHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <section className="">
      {/* <Seo title={title} description={description} image={image} path={path} /> */}
      <header className="w-full z-10">
        <nav
          className="lg:max-w-screen-xl flex flex-row flex-wrap justify-between my-4 lg:my-6 ml-auto mr-auto "
          role="navigation"
        >
          <div className="flex items-center ml-3">
            <Link href="/" aria-label="Home">
              <svg
                width="82"
                height="27"
                viewBox="0 0 82 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33333 26.6667H18.6667C18.9875 26.6667 19.2976 26.5511 19.5401 26.3409C19.7825 26.1308 19.9411 25.8403 19.9867 25.5227L22.4893 8H24V5.33333H22.1573L19.8587 0.737334C19.7483 0.515698 19.5782 0.329264 19.3676 0.199005C19.157 0.0687447 18.9143 -0.000174134 18.6667 3.30415e-07H5.33333C4.828 3.30415e-07 4.36667 0.285334 4.14 0.737334L1.84267 5.33333H0V8H1.51067L4.01333 25.5227C4.05889 25.8403 4.21745 26.1308 4.45991 26.3409C4.70238 26.5511 5.01248 26.6667 5.33333 26.6667V26.6667ZM19.224 12H4.776L4.204 8H19.7947L19.224 12ZM6.48933 24L5.91733 20H18.0813L17.5093 24H6.48933V24ZM6.15733 2.66667H17.8427L19.176 5.33333H4.824L6.15733 2.66667Z"
                  fill="#374151"
                />
                <path
                  d="M33.008 14.36C33.008 12.552 33.36 10.984 34.064 9.656C34.784 8.312 35.848 7.272 37.256 6.536C38.68 5.8 40.448 5.432 42.56 5.432C43.376 5.432 44.112 5.496 44.768 5.624C45.424 5.752 45.944 5.896 46.328 6.056V9.728H46.064C45.68 9.52 45.208 9.352 44.648 9.224C44.088 9.096 43.48 9.032 42.824 9.032C41.56 9.032 40.52 9.248 39.704 9.68C38.904 10.112 38.312 10.728 37.928 11.528C37.544 12.328 37.352 13.272 37.352 14.36C37.352 15.448 37.544 16.392 37.928 17.192C38.312 17.992 38.904 18.608 39.704 19.04C40.52 19.472 41.56 19.688 42.824 19.688C43.48 19.688 44.088 19.624 44.648 19.496C45.208 19.368 45.68 19.2 46.064 18.992H46.328V22.664C45.944 22.824 45.424 22.968 44.768 23.096C44.112 23.224 43.376 23.288 42.56 23.288C40.448 23.288 38.68 22.928 37.256 22.208C35.848 21.488 34.784 20.464 34.064 19.136C33.36 17.792 33.008 16.2 33.008 14.36ZM49.0471 18.584H49.2871C49.6871 18.792 50.1671 18.992 50.7271 19.184C51.2871 19.376 51.8951 19.536 52.5511 19.664C53.2231 19.776 53.8951 19.832 54.5671 19.832C55.2711 19.832 55.8551 19.784 56.3191 19.688C56.7991 19.592 57.1591 19.44 57.3991 19.232C57.6551 19.008 57.7831 18.712 57.7831 18.344C57.7831 17.88 57.6231 17.536 57.3031 17.312C56.9991 17.088 56.4471 16.912 55.6471 16.784L54.0631 16.544C52.8791 16.368 51.8711 16.064 51.0391 15.632C50.2231 15.2 49.6071 14.632 49.1911 13.928C48.7751 13.208 48.5671 12.344 48.5671 11.336C48.5671 10.104 48.8551 9.048 49.4311 8.168C50.0231 7.288 50.9191 6.616 52.1191 6.152C53.3191 5.672 54.8551 5.432 56.7271 5.432C57.5591 5.432 58.3591 5.504 59.1271 5.648C59.8951 5.776 60.5351 5.952 61.0471 6.176V9.8H60.7831C60.3031 9.576 59.6871 9.368 58.9351 9.176C58.1831 8.984 57.3431 8.888 56.4151 8.888C55.6151 8.888 54.9351 8.968 54.3751 9.128C53.8311 9.288 53.4151 9.536 53.1271 9.872C52.8391 10.192 52.6951 10.6 52.6951 11.096C52.6951 11.736 52.9031 12.192 53.3191 12.464C53.7351 12.736 54.4071 12.952 55.3351 13.112L56.8471 13.352C57.7911 13.496 58.6471 13.752 59.4151 14.12C60.1991 14.488 60.8151 15 61.2631 15.656C61.7271 16.312 61.9591 17.176 61.9591 18.248C61.9591 19.16 61.7671 19.944 61.3831 20.6C60.9991 21.24 60.4631 21.76 59.7751 22.16C59.1031 22.544 58.3191 22.824 57.4231 23C56.5431 23.192 55.5911 23.288 54.5671 23.288C53.8471 23.288 53.1351 23.24 52.4311 23.144C51.7431 23.064 51.1031 22.952 50.5111 22.808C49.9191 22.664 49.4311 22.512 49.0471 22.352V18.584ZM64.2815 18.584H64.5215C64.9215 18.792 65.4015 18.992 65.9615 19.184C66.5215 19.376 67.1295 19.536 67.7855 19.664C68.4575 19.776 69.1295 19.832 69.8015 19.832C70.5055 19.832 71.0895 19.784 71.5535 19.688C72.0335 19.592 72.3935 19.44 72.6335 19.232C72.8895 19.008 73.0175 18.712 73.0175 18.344C73.0175 17.88 72.8575 17.536 72.5375 17.312C72.2335 17.088 71.6815 16.912 70.8815 16.784L69.2975 16.544C68.1135 16.368 67.1055 16.064 66.2735 15.632C65.4575 15.2 64.8415 14.632 64.4255 13.928C64.0095 13.208 63.8015 12.344 63.8015 11.336C63.8015 10.104 64.0895 9.048 64.6655 8.168C65.2575 7.288 66.1535 6.616 67.3535 6.152C68.5535 5.672 70.0895 5.432 71.9615 5.432C72.7935 5.432 73.5935 5.504 74.3615 5.648C75.1295 5.776 75.7695 5.952 76.2815 6.176V9.8H76.0175C75.5375 9.576 74.9215 9.368 74.1695 9.176C73.4175 8.984 72.5775 8.888 71.6495 8.888C70.8495 8.888 70.1695 8.968 69.6095 9.128C69.0655 9.288 68.6495 9.536 68.3615 9.872C68.0735 10.192 67.9295 10.6 67.9295 11.096C67.9295 11.736 68.1375 12.192 68.5535 12.464C68.9695 12.736 69.6415 12.952 70.5695 13.112L72.0815 13.352C73.0255 13.496 73.8815 13.752 74.6495 14.12C75.4335 14.488 76.0495 15 76.4975 15.656C76.9615 16.312 77.1935 17.176 77.1935 18.248C77.1935 19.16 77.0015 19.944 76.6175 20.6C76.2335 21.24 75.6975 21.76 75.0095 22.16C74.3375 22.544 73.5535 22.824 72.6575 23C71.7775 23.192 70.8255 23.288 69.8015 23.288C69.0815 23.288 68.3695 23.24 67.6655 23.144C66.9775 23.064 66.3375 22.952 65.7455 22.808C65.1535 22.664 64.6655 22.512 64.2815 22.352V18.584Z"
                  fill="#374151"
                />
              </svg>
            </Link>
          </div>

          <div className="inline-block h-8 mr-3 lg:hidden">
            <button
              id="nav_toggle"
              className="h-full w-full"
              aria-label="Mobile Navigation"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="h-full w-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#4B5563"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="64"
                  x2="216"
                  y2="64"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="192"
                  x2="216"
                  y2="192"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </button>
          </div>
          {
            <div
              id="nav_content"
              className={`w-full py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-full shadow-md lg:shadow-none bg-yellow-50 ${
                navbarOpen ? 'open' : ''
              }`}
            >
              <ul className="flex flex-col ml-auto text-md text-gray-700 font-semibold lg:flex-row">
                <li className="mx-6 w-mc hover:text-gray-900 mb-4 lg:mb-0">
                  <Link href="/growth-tips">GROWTH TIPS</Link>
                </li>
                <li className="mx-6 w-mc hover:text-gray-900 mb-4 lg:mb-0">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          }
        </nav>
      </header>
    </section>
  );
};

export default CoffeeShopHeader;
