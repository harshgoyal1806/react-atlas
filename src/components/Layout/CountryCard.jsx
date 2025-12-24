import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="w-full sm:w-[300px] md:w-[340px]">
      <div className="bg-gradient-to-br from-[#0f0c13] via-[#1a171c] to-[#0f0c13] border border-[#2a2a2a] rounded-3xl shadow-lg shadow-blue-100/10 p-6 hover:shadow-blue-400/20 transition duration-300 text-white">
        
        <img
          src={flags.svg}
          alt={flags.alt || name.common}
          className="w-full h-48 object-cover rounded-xl mb-4 border border-[#333]"
        />

        <div className="space-y-2">
          <p className="text-xl font-semibold text-white">{name.common}</p>
          
          <p className="text-sm text-gray-400">
            <span className="font-medium text-white">Population:</span> {population.toLocaleString()}
          </p>
          
          <p className="text-sm text-gray-400">
            <span className="font-medium text-white">Region:</span> {region}
          </p>
           <p className="text-sm text-gray-400">
              <span className="font-medium text-white">Capital:</span> {capital[0]}
            </p>
          <NavLink to={`/country/${name.common}`}>
            <button
              type="button"
              className="flex items-center gap-2 px-2 py-1 mt-4 text-white transition-all border-2 border-white rounded-xl bg-[#202020] md:text-center"
            >
              Read More <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
