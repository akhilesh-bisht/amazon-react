import React, { useState } from "react";

const Header = ({ cartItems, setSearchValue }) => {
  const searchFilter = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Amazon</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={searchFilter}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-0 top-0 mt-3 mr-4 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l5-5m0 0l-5-5m5 5H4"
              />
            </svg>
          </form>
        </div>
        <div>
          <button className="text-white bg-blue-500 rounded-full px-4 py-2">
            Cart {cartItems}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
