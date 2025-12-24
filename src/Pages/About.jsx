import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="max-w-6xl px-4 mx-auto">
      <h2 className="mt-4 mb-8 text-4xl font-medium text-center">
        Here are the interesting Facts <br /> we're proud of
      </h2>

      <div>
        <div className="flex flex-wrap justify-center gap-8">
          {countryFacts.map((country) => (
            <div
              key={country.id}
              className="p-8 w-full sm:w-[300px] md:w-[340px] bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)] border-2 text-white rounded-3xl shadow-lg border-[#222] transition duration-300 shadow-blue-100/10"
            >
              <p className="text-2xl font-medium">{country.countryName}</p>
              <p>
                <span className="text-xs text-gray-500">Capital: </span>
                {country.capital}
              </p>
              <p>
                <span className="text-xs text-gray-500">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="text-xs text-gray-500">Interesting fact: </span>
                {country.interestingFact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
