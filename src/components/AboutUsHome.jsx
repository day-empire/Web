import React from "react";
import { Link } from "react-router-dom";

const AboutUsHome = () => {
  return (
    <>
       <div className="bg-[#fef5e9] w-full">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-16 pb-16 text-center lg:pt-32 lg:pb-32">
          <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            The Day Empire
          </span>
          <h2 className="mx-auto max-w-4xl font-bold font-display text-3xl tracking-tight text-black sm:text-5xl">
            Grow your collection with trust and confidence
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Our expert team meticulously verifies each card to ensure genuine
            collectibles, offering you only the best in the market. Experience
            top-tier customer support and a seamless shopping experience, making
            us your trusted partner in building a prestigious collection.
          </p>
          <div className="sm:flex justify-center mt-6">
            <Link
              to="/about-us"
              title="Learn About Day Empire"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
            >
              Get to know us more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
