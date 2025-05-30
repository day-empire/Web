import React from "react";
import { Crown, Headset, Question, Star } from "@phosphor-icons/react";

const Benefits = () => {
  return (
    <>
    <div className="border-t-1 mx-8 pt-16 pb-16 lg:pb-0 lg:pt-0 sm:mx-16 border-gray-200">
       <div className="mx-auto max-w-7xl lg:px-8 pb-10 text-center lg:pt-32 lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Benefits with Day Empire
        </span>
        <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
          Building trust, one card at a time
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          At Day Empires, we pride ourselves on expert knowledge, certified
          authenticity, innovative technology, and customer-centric service. Our
          team lives and breathes Pokémon™, staying ahead of the latest trends
          and market insights to bring you the best.
        </p>
      </div>
      <div className="mx-auto max-w-7xl text-center sm:px-6 lg:mb-32">
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <Crown color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l lg:text-2xl font-bold mt-4 pb-2 px-4">
              Diverse selection of quality cards
            </h3>
          </div>
          <div>
            <Star color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l lg:text-2xl font-bold mt-4 pb-2 px-4">
              Quality service from shop to doorstep
            </h3>
          </div>
          <div>
            <Headset color="#F5981F" size={64} className="inline-block" />
            <h3 className="text-l lg:text-2xl font-bold mt-4 pb-2 px-4">
              Get exceptional customer service
            </h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Benefits;
