import React from "react";
import MetaUpdater from "../MetaData";

const AboutUs = () => {
  return (


    <>
    <MetaUpdater title="About Day Empire - Pokémon™ Card Experts & Collectors" description="At Day Empire, we’re Pokémon™ trading card specialists, combining expertise with technology to deliver an unparalleled collecting experience. Join us in the world of Pokémon™!"/>

    <div className="mx-auto relative">

    
     <div className="hidden lg:inline absolute -right-50 top-10"><img src='/squirtle-card.webp' width={574} height={696} className="w-0 xl:w-[500px] 2xl:w-[600px]"  alt='Image shows a Squirtle Pokemon card'/></div>
     <div className="hidden lg:inline absolute right-70 top-10"><img src='/raichu-coin.webp' width={182} height={209}  className="w-0  xl:w-[168px] 2xl:w-[168px]"  alt='Image shows a Raichu coin'/></div>
     <div className="hidden lg:inline absolute left-30 top-10"><img src='/blastiose-coin.webp' width={229} height={296}  className="w-0 xl:w-[168px] 2xl:w-[168px]"  alt='Image shows a Blastoise coin'/></div>
     <div className="hidden lg:inline absolute -right-20 top-80 -rotate-10"><img src='/sam-owner-card.webp' width={467} height={627}  className="w-0  xl:w-[300px] 2xl:w-[467px]"  alt='Image shows Sam, owner of the Day Empire'/></div>
     <div className="hidden lg:inline absolute -left-20 top-60 rotate-10"><img src='/tom-owner-card.webp' width={467} height={627}  className="w-0 xl:w-[300px] 2xl:w-[467px]"  alt='Image shows Tom, owner of the Day Empire'/></div>

      <div className="relative mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-16 pb-8 text-center lg:pt-32 lg:pb-32">
        
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          About Day Empire
        </span>
        <h1 className="mx-auto sm:max-w-4xl lg:max-w-5xl font-bold font-display text-5xl tracking-tight text-black sm:text-7xl">
          Meet the Pokemon™ Experts
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          At Day Empire, we’re passionate specialists in Pokémon™ trading cards,
          combining cutting-edge technology with unparalleled expertise to bring
          you the finest in collectibles.
        </p>
      </div>

      <div className="mx-auto px-8 pb-8 lg:px-8 max-w-[768px]">
        <h2 className="font-bold font-display text-xl tracking-tight text-black pb-6">
          We wanna be the very best, like no one ever was.
        </h2>

        <p className="tracking-tight text-gray-600">
          At Day Empires, we’re not just another trading card shop—we’re your
          dedicated partners in the exciting world of Pokémon™. Our team of
          passionate specialists combines deep knowledge with cutting-edge
          technology to offer you an unparalleled experience in collecting and
          trading Pokémon™ cards.
        </p>

        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Our Mission
        </h2>
        <p className="tracking-tight text-gray-600">
          Our mission is simple: to provide Pokémon™ enthusiasts and collectors
          with the highest quality cards and the most reliable service. We
          believe that collecting should be as thrilling and enjoyable as the
          cards themselves, and we’re here to make that happen for you.
        </p>

        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          What Sets Us Apart
        </h2>
        <div className="tracking-tight text-gray-600">
          <ul className="list-disc ml-[22px]">
            <li>
              Expert Knowledge: Our team lives and breathes Pokémon™. We stay
              ahead of the curve with the latest trends, releases, and market
              insights, ensuring that you get the best of the best.
            </li>
            <li>
              Certified Authenticity: We utilize advanced technology and
              rigorous verification processes to ensure that every card in our
              collection is 100% authentic and meets our high standards of
              quality.
            </li>
            <li>
              Innovative Technology: From advanced card grading to seamless
              online shopping, we leverage the latest technology to enhance your
              experience and make your collecting journey as smooth as possible.
            </li>
            <li>
              Customer-Centric Service: At Day Empires, you’re more than just a
              customer—you’re a valued member of our community. We’re here to
              support you every step of the way, whether you’re looking for
              advice, have questions, or need assistance with your order.
            </li>
          </ul>
        </div>

        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Join the Day Empires Community
        </h2>
        <p className="tracking-tight text-gray-600">
          We invite you to explore our curated selection of Pokémon™ cards and
          experience the difference that expertise and technology can make.
          Whether you’re a seasoned collector or just starting your journey,
          we’re here to help you find your next great addition to your
          collection.
        </p>

        <p className="tracking-tight text-gray-600 mt-8">
          Thank you for choosing Day Empires. We’re excited to be part of your
          Pokémon™ adventure!
        </p>

        <div className="mt-8 xl:hidden"><img src="/profile.webp" width={968} height={710} alt="Image show Sam and Tom. Creators of Day Empire."/></div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
