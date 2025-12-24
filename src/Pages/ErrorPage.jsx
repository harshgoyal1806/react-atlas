import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="max-w-md mx-auto my-24 px-6 py-10 border border-gray-700 rounded-lg text-center text-white bg-[#1a1a1a]">
      <h1 className="mb-3 text-3xl font-semibold">404 - Not Found</h1>
      <p className="mb-5 text-sm text-gray-400">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <NavLink to="/">
        <button className="px-5 py-2 text-sm transition-all border border-white rounded-md hover:bg-white hover:text-black">
          Go to Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
