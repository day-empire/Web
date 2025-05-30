import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex mx-8 sm:mx-16 border-t-1 border-gray-200 sm:items-center sm:justify-center pt-8 pb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full">
          <div className="flex items-start mb-8 sm:mb-0 sm:w-[72px]">
            <Link to="/" title="Day Empire - Buy Pokémon Cards UK">
              <svg
                width="38"
                height="32"
                viewBox="0 0 38 32"
                fill="none"
                role="img"
                aria-label="Day Empire Logo"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2102_1270)">
                  <path
                    d="M38 9.23298V22.767C37.9806 22.7957 37.9492 22.8227 37.9441 22.8536C37.8642 23.3451 37.8203 23.844 37.705 24.3269C37.333 25.8919 36.6215 27.2952 35.5625 28.4989C34.5366 29.666 33.3413 30.6317 31.8749 31.1885C31.1891 31.4495 30.4702 31.6261 29.761 31.8211C29.4523 31.906 29.1299 31.9415 28.8132 31.9994H19.9694C19.9021 31.9209 19.8399 31.8383 19.7674 31.7649C17.0989 29.081 14.4292 26.3977 11.76 23.7144C11.6904 23.6444 11.6259 23.5682 11.5255 23.4575C11.6836 23.4575 11.7857 23.4575 11.8884 23.4575C16.5859 23.4575 21.284 23.4586 25.9815 23.4529C26.1629 23.4529 26.3495 23.399 26.5247 23.3416C27.1443 23.1392 27.635 22.7366 28.0418 22.2457C28.4863 21.7095 28.7756 21.1177 28.7699 20.371C28.7453 17.2456 28.7613 14.1201 28.755 10.9947C28.755 10.8123 28.702 10.6242 28.6455 10.4482C28.4458 9.8248 28.0464 9.33104 27.558 8.92158C27.0251 8.47427 26.4374 8.18409 25.6945 8.18638C20.3597 8.20473 15.0248 8.19613 9.69 8.19613C9.19931 8.19613 9.06865 8.32631 9.06865 8.81548C9.06865 12.7627 9.06865 16.7105 9.06865 20.6578V20.9434C8.92772 20.8814 8.86039 20.8006 8.78679 20.7266C5.93679 17.8621 3.08565 14.9964 0.233363 12.1319C0.160901 12.0591 0.0775976 11.996 0 11.9283C0 7.95527 0 3.98165 0 0C9.66147 0 19.3235 0 28.985 0C29.0135 0.0194982 29.0403 0.0510394 29.0711 0.0562007C29.4397 0.116989 29.8146 0.150251 30.1769 0.236272C32.2817 0.733477 34.0671 1.77204 35.4963 3.41849C36.2369 4.27125 36.8263 5.21176 37.256 6.25663C37.5675 7.01477 37.7906 7.79584 37.8859 8.61247C37.9098 8.82065 37.9612 9.02595 38 9.23298Z"
                    fill="black"
                  />
                  <path
                    d="M0 14.3369C0.0707508 14.3994 0.144354 14.4585 0.211111 14.5256C5.93679 20.2793 11.6619 26.0335 17.3864 31.7884C17.4526 31.8549 17.5114 31.9295 17.5741 32.0006H0C0 26.1121 0 20.2248 0 14.3369Z"
                    fill="#F5981F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2102_1270">
                    <rect width="38" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <ul className="flex flex-col mb-6 sm:mb-0 sm:flex-row sm:gap-4 sm:items-center">
            <li className="mt-0 sm:mt-0">
        
              <a
                href="#BuyCards"
                title="Buy Pokemon cards"
                className="text-black hover:text-gray-500 hover:underline mt-1"
              >
                Buy
              </a>
            </li>{/* Hide  
            <li className="mt-2 sm:mt-0">
              <a
                href="#SellCards"
                title="Sell Pokemon Cards"
                className="text-black hover:text-gray-500 hover:underline mt-1"
              >
                Sell
              </a>
            </li>*/}
            <li className="mt-2 sm:mt-0">
              <Link
                to="/about-us"
                title="About Day Empire"
                className="text-black hover:text-gray-500 hover:underline mt-1"
              >
                About Us
              </Link>
            </li>
            <li className="mt-2 sm:mt-0"> 
              <Link
                to="/contact-us"
                title="Contact Day Empire team"
                className="text-black hover:text-gray-500 hover:underline mt-1"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex items-center sm:justify-end gap-6 flex-row">
            <li>
              <a
                href="https://www.facebook.com/thedayempire"
                title="Visit Day Empire Facebook page"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  role="img"
                  aria-label="FaceBook logo"
                  className="text-black hover:text-gray-500 transition-all duration-300"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/day-empire"
                title="Visit Day Empire GitHub"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  role="img"
                  aria-label="Github logo"
                  className="text-black hover:text-gray-500 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2019_1270)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9642 0C5.34833 0 0 5.5 0 12.3042C0 17.7432 3.42686 22.3472 8.18082 23.9767C8.77518 24.0992 8.9929 23.712 8.9929 23.3862C8.9929 23.101 8.97331 22.1232 8.97331 21.1045C5.64514 21.838 4.95208 19.6378 4.95208 19.6378C4.41722 18.2118 3.62473 17.8452 3.62473 17.8452C2.53543 17.0915 3.70408 17.0915 3.70408 17.0915C4.91241 17.173 5.54645 18.3545 5.54645 18.3545C6.61592 20.2285 8.33927 19.699 9.03257 19.373C9.13151 18.5785 9.44865 18.0285 9.78539 17.723C7.13094 17.4377 4.33812 16.3785 4.33812 11.6523C4.33812 10.3078 4.81322 9.20775 5.56604 8.35225C5.44727 8.04675 5.03118 6.7835 5.68506 5.09275C5.68506 5.09275 6.69527 4.76675 8.97306 6.35575C9.94827 6.08642 10.954 5.9494 11.9642 5.94825C12.9744 5.94825 14.0042 6.091 14.9552 6.35575C17.2332 4.76675 18.2434 5.09275 18.2434 5.09275C18.8973 6.7835 18.481 8.04675 18.3622 8.35225C19.1349 9.20775 19.5904 10.3078 19.5904 11.6523C19.5904 16.3785 16.7976 17.4172 14.1233 17.723C14.5592 18.11 14.9353 18.8432 14.9353 20.0045C14.9353 21.6545 14.9158 22.9787 14.9158 23.386C14.9158 23.712 15.1337 24.0992 15.7278 23.977C20.4818 22.347 23.9087 17.7432 23.9087 12.3042C23.9282 5.5 18.5603 0 11.9642 0Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2019_1270">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="flex mx-8 sm:mx-16 sm:justify-center mb-8">
        <div className="sm:flex sm:gap-4 sm:items-center sm:flex-row-reverse">
          <ul className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:gap-4">
            <li className="mt-0 sm:mt-0">
              <Link
                to="/privacy"
                title="About Day Empire"
                className="text-black hover:text-gray-500 underline hover:no-underline sm:text-xs"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mt-0 sm:mt-0">
              <Link
                to="/terms"
                title="Contact Day Empire team"
                className="text-black hover:text-gray-500 underline hover:no-underline sm:text-xs"
              >
                Terms of service
              </Link>
            </li>
          </ul>
          <p
            className="text-gray-600 sm:text-xs
"
          >
            ©{new Date().getFullYear()} Day Empire Group Ltd.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
