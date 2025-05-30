import React from "react";

const SellPanel = () => {
  return (
    <>
       <div className="bg-[#fef5e9] w-full">

      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8 gap-16 sm:px-6 lg:px-8 pt-16 pb-16 mb-16 lg:pt-32 lg:pb-32 lg:mb-16">

       <img src="/pokemon-collection.webp" width={621} height={674} alt="Sell unwanted Pokemon Cards with Day Emmpire" className="w-full md:w-1/2 rounded-lg"/>
       
       <div className="w-full md:w-1/2">
       <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
           Contact Us
          </span>
          <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
           Speak with our expert assistance!
          </h2>
          <p className="mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          Have questions about Pokémon™ cards? We’re here to help! Whether you're curious about bulk cards, valuations, or general advice, we’ve got you covered. Just reach out, and we’ll be happy to chat, share insights, and help with whatever you need. Let’s connect!
          </p>
          <div className="flex mt-6">
            <a
              href="#SellCards"
              title="Sell unwanted cards with Day Empire"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
            >
              Get in touch</a>
          </div>
       </div>
      </div>
      </div>
    </>
  );
};

export default SellPanel;
