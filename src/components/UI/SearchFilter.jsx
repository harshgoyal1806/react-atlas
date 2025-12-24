import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
        className="placeholder-gray-400 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white"
      />
      <div>
        <select
          className="px-4 text-white border border-gray-600 rounded-2xl"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all" className="text-white bg-black">All</option>
          <option value="Africa" className="text-white bg-black">Africa</option>
          <option value="Americas" className="text-white bg-black ">Americas</option>
          <option value="Asia" className="text-white bg-black">Asia</option>
          <option value="Europe" className="text-white bg-black">Europe</option>
          <option value="Oceania" className="text-white bg-black">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
