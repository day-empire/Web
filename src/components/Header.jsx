import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        headerRef.current && !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header ref={headerRef} className="flex h-[72px] z-200 items-center justify-center px-8 md:px-16 py-0 relative bg-white border-b-1 border-gray-200">
        <div className="flex items-center justify-between w-full">
          <nav className="hidden md:inline-flex items-start gap-8 list-none">
            <ul className="inline-flex  gap-8">
            <li>
              <Link
                to="/"
                title="Day Empire Home Page"
                className="text-black hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                title="About Day Empire"
                className="text-black hover:text-gray-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                title="Contact the Day Empire team"
                className="text-black hover:text-gray-500"
              >
                Contact Us
              </Link>
            </li>
            </ul>
          </nav>

          <div className="flex items-start">
            <ul>
            <li className="list-none">
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
            </li>
            </ul>
          </div>

          <div className="hidden md:flex items-center justify-end gap-2 ">
            <a
              href="#SellCards"
              title="Ask Us about Pokemon cards"
              className="flex items-center justify-center gap-2 px-6 py-2 relative bg-white rounded-lg text-black hover:text-gray-500"
            >
              Enquire
            </a>

            <a
                href="#BuyCards"
                title="Buy Pokemon cards"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
              >
                Buy Cards
              </a>

          </div>

          <button aria-label="Navigation button" className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
          <svg fill="none" viewBox="0 0 24 24" stroke="black" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg  fill="none" viewBox="0 0 24 24" stroke="black" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
          </button>

          {menuOpen && (
          <div ref={navRef} className="fixed top-[72px] list-none left-0 w-full md:hidden h-screen bg-white z-50">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)} title="Day Empire Home Page" className="text-black hover:text-gray-500 block text-lg bg-white border-b-1 px-8 py-4 border-gray-200 ">Home</Link></li>
              <li><Link to="/about-us" onClick={() => setMenuOpen(false)} title="About Day Empire" className="text-black hover:text-gray-500 block  text-lg bg-white border-b-1  px-8 py-4 border-gray-200 ">About Us</Link></li>
              <li><Link to="/contact-us" onClick={() => setMenuOpen(false)} title="Contact the Day Empire team" className="text-black hover:text-gray-500 block text-lg bg-white border-b-1  px-8 py-4 border-gray-200  ">Contact Us</Link></li>
              <li><a href="#SellCards" onClick={() => setMenuOpen(false)} title="Sell your Pokemon cards"  className="text-black hover:text-gray-500 block text-lg bg-white  px-8 py-4  ">Enquire</a></li>
              </ul>
              <div className="px-8 py-8 fixed bottom-0 w-full">
                <Link to="/#BuyCards"  onClick={() => setMenuOpen(false)} title="Buy Pokemon cards" className="inline-flex w-full items-center justify-center px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white text-lg ">Buy Cards</Link>
                </div>
          </div>
          )}

        </div>
      </header>
    </>
  );
};

export default Header;
