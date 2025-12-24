import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);
  if (isPending) return <Loader />;
  console.log(search, filter);
  const searchCountry = (currCountry) => {
    return (
      search === "" ||
      currCountry.name.common.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredCountry = (currCountry) => {
    return filter === "all" || currCountry.region === filter;
  };
  const filteredData = country.filter(
    (currCountry) => searchCountry(currCountry) && filteredCountry(currCountry)
  );
  return (
    <section className="max-w-6xl p-4 mx-auto">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="flex flex-wrap justify-between gap-4">
        {filteredData.length === 0 ? (
          <p className="w-full mt-8 text-center text-white">
            No countries found for your search.
          </p>
        ) : (
          filteredData.map((currCountry) => (
            <CountryCard country={currCountry} key={currCountry.name.common} />
          ))
        )}
      </ul>
    </section>
  );
};

export default Country;
