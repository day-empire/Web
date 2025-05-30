import React from "react";
import MetaUpdater from "../MetaData";

const Terms = () => {
  return (
    <div className="mx-auto">
      <MetaUpdater title="Day Empire - Terms of Service" description="Read Day Empire’s terms of service to understand our policies on Pokémon™ card trading, sales, and customer rights."/>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-20 text-center lg:pt-32 lg:pb-32">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Terms of Service
        </span>
        <h1 className="mx-auto max-w-5xl font-bold font-display text-5xl tracking-tight text-black sm:text-7xl">
          The Fine Print
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          At Day Empire, we believe in clarity and fairness. Our Terms of
          Service outline how our platform works and what you can expect from
          us.
        </p>
      </div>

      <div className="mx-auto px-8 pb-16 lg: sm:pb-16 lg:px-8 max-w-[768px]">
        <p className="tracking-tight text-gray-600">
          Day Empire Group LTD collects, processes and uses your personal data
          in compliance with the strict UK & European data protection
          regulations. Apart from certain particulars required by the cardmarket
          platform, you may determine yourself which information to provide.
        </p>
        <p className="tracking-tight text-gray-600 mt-8">
          By using the website www.cardmarket.com, but at the latest when
          registering as a user, you grant your consent to the collection,
          processing and use of the entered personal data by The Day Empire as
          responsible entity on their servers. Please note that the data
          transmitted by you as part of the use of the website are processed
          externally by our own systems which are located securely in the UK. It
          is understood that we treat your personal data strictly
          confidentially.
        </p>
        <p className="tracking-tight text-gray-600 mt-8">
          Personal data, e.g. specific data about the personal or factual
          circumstances of a particular or identifiable natural person, are only
          collected as far as necessary for the performance of the contract and
          for the provision of contractual services. The collection of data is
          carried out exclusively to the extent provided by you.
        </p>
        <p className="tracking-tight text-gray-600 mt-8">
          The user’s personal data will not be transmitted to any third party
          beyond that which is already transferred to Card Market.
        </p>
        <p className="tracking-tight text-gray-600 mt-8">
          You shall be entitled to the right of withdrawal of the consent with
          effect for the future at all times and without limitations. The
          contact data for exercising the withdrawal may be found below.
        </p>

        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Data Controller(s)
        </h2>
        <p className="tracking-tight text-gray-600">
          Controller for the purposes of the General Data Protection Regulation
          (GDPR) and the Federal Data Protection Act is
        </p>

        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Day Empire Group LTD
        </h2>
        <p className="tracking-tight text-gray-600">
          3rd Floor, 86-90 Paul Street, London, EC2A 4NE, United Kingdom
        </p>
        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Contact us
        </h2>
        <p className="tracking-tight text-gray-600">
          Email: <a
            href="mailto:contact@edayempire"
            title="Contact Day Empire"
            className="underline hover:no-underline text-black"
          >
            {" "}
            contact@dayempire.co.uk
          </a>
        </p>
        <h2 className="font-bold font-display text-xl mt-8 tracking-tight text-black pb-6">
          Managing directors
        </h2>
        <p className="tracking-tight text-gray-600 ">
          Mr. Tom Day & Mr. Sam Day
        </p>
      </div>
    </div>
  );
};

export default Terms;
