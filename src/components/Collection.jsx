import React from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [revHolo, setRevHolo] = useState(false);
  const [firstEdition, setFirstEdition] = useState(false);
  const deUrl =
    "https://www.cardmarket.com/en/Pokemon/Users/DayEmpire/Offers/Singles";

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const searchUrl = `${deUrl}?name=${encodeURIComponent(
        searchTerm
      )}&isReverseHolo=${revHolo ? "Y" : "N"}&isFirstEd=${
        firstEdition ? "Y" : "N"
      }`;
      window.open(searchUrl, "_blank");
    }
  };

  const handleCheckboxChange = (checkboxType) => {
    if (checkboxType === "revHolo") {
      setRevHolo(!revHolo);
      if (!revHolo) setFirstEdition(false);
    } else if (checkboxType === "firstEdition") {
      setFirstEdition(!firstEdition);
      if (!firstEdition) setRevHolo(false);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-16 pb-16 text-center lg:pt-32 lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
          Our Collection
        </span>
        <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
          Start building your perfect collection today
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
          Start building your collection today with our extensive selection of
          premium trading cards, coins, and dice. Whether you're a seasoned
          collector or just beginning your journey, our curated inventory has
          something for everyone. If you know what you're looking for, try using
          our search tool to find it quickly and easily.
        </p>
        <div className="sm:flex justify-center gap-2 mt-6">
          <a
            href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire"
            title="See Day Empire Full Collection"
            target="_blank"
            className="mb-2 sm:mb-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            Our collection
          </a>

          <a
            href="#BuyCards"
            title="Search Day Empire Collection"
            className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-3 relative bg-white rounded-lg text-black hover:text-gray-500"
          >
            Search collection
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl text-center px-8 sm:px-6 mb-16 lg:mb-32">
        <div className="sm:grid md:grid-cols-3 sm:gap-6">
          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon"
            target="_blank"
            title="Pokemon Cards"
            className="inline-block mb-10 sm:mb-0"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-eevee.webp"
                alt="Buy Pokémon™ cards"
                height={388}
                width={422}
                className="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Cards</h2>
              <p className="mb-4 px-6">
                {" "}
                Build competitive decks with rare, holographic, and high-value
                trading cards featuring dynamic artwork and strategic abilities.
              </p>
              <button className="bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Shop Now
              </button>
            </div>
          </a>

          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon+coin"
            target="_blank"
            className="inline-block mb-10 sm:mb-0"
            title="Pokemon Coins"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-charizard-coin.webp"
                alt="Buy Pokémon™ Coins"
                height={388}
                width={422}
                className="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Coins</h2>
              <p className="mb-4 px-6">
                Precision-crafted for gameplay mechanics, these collectible
                coins enhance battle decisions and add aesthetic appeal.
              </p>
              <button className=" bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Upgrade Your Game
              </button>
            </div>
          </a>

          <a
            href="https://www.cardmarket.com/en/Pokemon/Products/Search?searchString=Pokemon+dice"
            title="Pokemon Dice"
            target="_blank"
          >
            <div className="bg-white rounded-lg cursor-pointer">
              <img
                src="/pokemon-dice.webp"
                alt="Buy Pokémon™ Dice"
                height={388}
                width={422}
                className="w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 pb-2">Pokémon™ Dice</h2>
              <p className="mb-4 px-6">
                Essential for tracking damage and game statistics, these
                high-quality dice ensure accuracy in every match.
              </p>
              <button className=" bg-white rounded-lg cursor-pointer text-black hover:text-gray-500 px-6 py-3 border">
                Get Yours Today
              </button>
            </div>
          </a>
        </div>
      </div>

      <div
        id="BuyCards"
        className="mx-auto max-w-7xl text-center px-8 sm:px-6 mb-16 lg:mb-32"
      >
        <div className="bg-[#F5F5F5] py-6 px-6 sm:p-16 rounded-[16px]">
          <h3 className="font-bold font-display text-3xl lg:text-4xl tracking-tight text-black mb-4">
            Search out collection
          </h3>
          <p className="mb-6 sm:mb-12">
            Search for any card or collectible, and we'll check if it's in stock
            for you.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <form
              role="search"
              className="flex items-center border-gray-200 border-1 mb-4 px-4 py-2 rounded-sm"
            >
              <MagnifyingGlass
                color="#343330"
                size={24}
                className="inline-block"
              />
              <input
                id="searchCard"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 grow"
                type="search"
                placeholder="Search for a card name..."
                aria-label="Search"
              />
              <button
                id="searcInput"
                onClick={handleSearch}
                title="Search for a Pokemon Card"
                className="hidden mb-2 sm:mb-0 sm:inline items-center justify-center gap-2 px-6 py-3 bg-black cursor-pointer rounded-lg hover:bg-gray-700 text-white"
                type="submit"
              >
                Search
              </button>
            </form>

            <div class="flex flex-col space-y-4">
              <label class="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={revHolo}
                  onChange={() => handleCheckboxChange("revHolo")}
                  id="reverseHolos"
                  className="form-checkbox w-6 h-6 text-blue-500"
                />

                <span>Reverse Holos only</span>
              </label>
              <label class="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={firstEdition}
                  onChange={() => handleCheckboxChange("firstEdition")}
                  id="firstEditions"
                  className="form-checkbox w-6 h-6 text-blue-500"
                />
                <span>First editions only</span>
              </label>

              <button
                id="searcInput"
                title="Search for a Pokemon Card"
                onClick={handleSearch}
                className="inline mb-2 sm:mb-0 sm:hidden items-center justify-center gap-2 px-6 py-3 cur bg-black rounded-lg hover:bg-gray-700 text-white"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
