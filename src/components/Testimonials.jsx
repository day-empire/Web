import React from "react";

const Testimonial = () => {
  return (
    <div className="mx-8 mb-16 lg:mb-32">

      <div className="mx-auto max-w-7xl lg:px-8 pb-10 text-center lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            Testimonials
        </span>
        <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
          Our customers love us 
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Don’t just take our word for it! Discover why our customers love our service.
        </p>
      </div>

      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4">
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">SilverFoxG</h3>
            <p>Dispatched quickly, arrived in great condition and well packaged. Great and friendly seller.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">Vici314</h3>
            <p>Well packaged, good condition and arrived quickly.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">DHertz</h3>
            <p>Perfect!</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">QuailMail</h3>
            <p>Fantastic customer service!</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">Big Ash</h3>
            <p>The card has arrived quickly & in great condition.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">PADuk</h3>
            <p>A++.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">Zim108</h3>
            <p>Great seller. Fast shipping.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">GeckGraph</h3>
            <p>Perfect, exactly what I wanted!</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">Stratic-10</h3>
            <p>Arrived Quickly. Happy and sent a message to say it had been dispatched.</p>
          </div>
          <div className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
            <img src="/five-stars.webp" height={116} width={19} className="mb-2" alt="Five Star Review"/>
            <h3 className="font-bold text-black text-2l mb-1">ScalpMoutain</h3>
            <p>Very quick ship, responsive seller who quickly helped when there was an issue with the order.</p>
          </div>
        </div>


        <div className="mx-auto sm:flex justify-center gap-2 mt-10 sm:mt-16 text-center">
          <a
            href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire"
            title="See Day Empire Full Collection" target="_blank"
            className="mb-2 sm:mb-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            See all reviews
          </a>

          <a
            href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire"
            title="Join Day Empire community" target="_blank"
            className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-3 relative bg-white rounded-lg text-black hover:text-gray-500"
          >
            Join our community
          </a>
        </div>

      </div>

      </div>

  );
};

export default Testimonial;




