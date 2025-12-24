import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import { getIndividualCountryData } from "../../api/postApi";
import { NavLink } from "react-router-dom";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState({});

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getIndividualCountryData(params.id);
        if (res.status === 200) {
          console.log(res.data[0]);
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch country:", error);
      }
    });
  }, [params.id]);

  if (isPending || !country.name) return <Loader />;

  return (
    <section className="max-w-6xl min-h-screen p-12 mx-auto text-white">
      <div className="flex flex-col sm:flex-row bg-gradient-to-br from-[#0f0c13] via-[#1a171c] to-[#0f0c13] border border-[#2a2a2a] rounded-3xl shadow-lg shadow-blue-100/10 py-16 px-6 hover:shadow-blue-400/20 transition duration-300 w-full">
        {/* Image Section */}
        <img
          src={country.flags?.svg}
          alt={country.flags?.alt || country.name?.common}
          className="w-full max-w-md mb-6 rounded-lg shadow-lg sm:w-1/2 sm:mb-0"
        />

        {/* Text + Button Section */}
        <div className="flex flex-col justify-between flex-1 space-y-4 sm:pl-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-medium">{country.name?.official}</h1>
            <p>
              <span className="font-semibold text-gray-400">Native Names:</span>{" "}
              {country.name?.nativeName &&
                Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Region:</span>{" "}
              {country.region}
            </p>
            <p>
              <span className="font-semibold text-gray-400">SubRegion:</span>{" "}
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Population:</span>{" "}
              {country.population?.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Currencies:</span>{" "}
              {Object.keys(country.currencies || {})
                .map((currEl) => country.currencies[currEl].name)
                .join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Languages:</span>{" "}
              {Object.keys(country.languages || {})
                .map((lang) => country.languages[lang])
                .join(", ")}
            </p>
          </div>

        
          <div className="flex justify-end mt-6">
            <NavLink to="/country">
              <button className="px-4 py-2 text-white transition rounded-lg bg-[#202020]">
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
};

export default CountryDetails;
