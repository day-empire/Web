import React from "react";

const Certfication = () => {
  return (
    <>
      <div className="mx-4 sm:mx-16 mb-10 sm:mb-16 font-bold">
     
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-12 items-center justify-center">
          <li>
            <a href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire" title="Day Empire is certifed with Card Market" target="_blank">
            <img
              src="/card-market.webp"
              role="img"
              aria-label="Certifed with Cardmarket"
              height={140}
              width={140}
              alt="Certifed with Cardmarket - DayEmpire"
            /></a>
          </li>
          <li>
            <img
              src="/pokemon-trading.webp"
              height={140}
              width={140}
              role="img"
              aria-label="Pokemon Trading Cards"
              alt="Pokemon Trading Cards"
            />
          </li>
          <li>
          <a href="https://aws.amazon.com/startups" title="Day Empire backed by AWS Startup" target="_blank">
            <img
              src="/amazon-startup.webp"
              height={140}
              width={140}
              role="img"
              aria-label="Backed by AWS Startup"
              alt="image shows we are backed by AWS Startup"
            />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Certfication;
