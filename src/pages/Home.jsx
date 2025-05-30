import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import Benefits from "../components/Benefits";
import AboutUsHome from "../components/AboutUsHome";
import Collection from "../components/Collection";
import SellPanel from "../components/SellPanel";
import Testimonial from "../components/Testimonials";
import MetaUpdater from "../MetaData";

const Home = () => {
  return (
    <>
      <MetaUpdater
        title="Day Empire - Pokémon™ Trading Cards & Collectibles"
        description="Discover top-tier Pokémon™ trading cards at At Day Empire. Expert curation, cutting-edge technology, and a passion for collectibles—be the best, like no one ever was!"
      />
      <div className="bg-[url('/empire-crown.webp')] bg-bottom sm:bg-[0%_80%] bg-cover xl:h-screen">
        <div className="hidden xl:inline absolute left-0 xl:left-20 top-100 z-100">
          <img
            src="/pikachu-coin.webp"
            width={160}
            height={186}
            alt="Image shows a Pikachu coin"
          />
        </div>

        <div className="hidden xl:inline absolute left-0 xl:left-0 top-130 z-60">
          <img
            src="/charizard-card.webp"
            width={561}
            height={699}
            alt="Image shows a Charizard card"
          />
        </div>
        <div className="hidden xl:inline absolute left-0 xl:left-100 top-150 z-60">
          <img
            src="/umbreon-card.webp"
            width={340}
            height={470}
            alt="Image shows a Umbreon card"
          />
        </div>

        <div className="hidden xl:inline absolute right-0 xl:right-0 top-130 z-70">
          <img
            src="/blastoise-card.webp"
            width={561}
            height={699}
            alt="Image shows a Blastoise card"
          />
        </div>
        <div className="hidden xl:inline absolute right-0 xl:right-100 top-150 z-70">
          <img
            src="/venusaur-card.webp"
            width={433}
            height={553}
            alt="image shows a Venusaur card"
          />
        </div>

        <div className="hidden xl:inline absolute right-0 xl:right-0 top-100 z-70">
          <img
            src="/raichu-coin.webp"
            height={209}
            width={182}
            alt="Image shows a Raichu coin"
          />
        </div>

        <div className="mx-auto relative max-w-7xl px-8 sm:px-6 lg:px-8 pt-16 pb-8 text-center lg:pt-32 lg:pb-32 z-100">
          <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            Over 30,000 items for sale!
          </span>
          <h1 className="mx-auto max-w-5xl font-bold font-display text-5xl tracking-tight text-black sm:text-6xl xl:text-7xl">
            Elevate your Pokémon™ collection to the next level
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Specialists in Pokémon™ Trading cards, powered by Technology. You
            can trust Day Empire for delivering authenticity and excellence.
          </p>
          <div className="sm:flex justify-center gap-2 mt-6">
            <a
              href="#BuyCards"
              title="Buy Pokemon cards"
              className="mb-2 sm:mb-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
            >
              Buy Pokemon Cards
            </a>

            <Link
              to="/about-us"
              title="Learn about Day Empire"
              className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-3 relative w-auto  text-black hover:text-gray-500"
            >
              About Day Empire
            </Link>
          </div>
        </div>

        <div className="pb-6 xl:hidden">
          <img
            src="default.jpg"
            srcset="pokemon-trio-mobile.webp 466w, pokemon-trio.webp 675w"
            sizes="(max-width: 466px) 100vw, 100vw"
            width="675"
            height="425"
            alt="Image show the Kanto Starters, Charizard, Blastoise and Venusaur"
          ></img>
        </div>
      </div>

      <AboutUsHome />
      <Collection />
      <Benefits />
      <FAQ />
      <Testimonial />
      <SellPanel />
    </>
  );
};

export default Home;
