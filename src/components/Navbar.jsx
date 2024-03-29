import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white py-4 shadow-xl sticky top-0 z-50">
      <div className="px-4 md:container md:mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-cyan-600">
          <Link to="/">FoodPrep Tips</Link>
        </h1>
        <ul className="flex">
          <li className="mx-3 md:mx-10">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/create"
              className="border border-cyan-6 00 py-2 px-2 md:px-5 rounded-md text-white bg-cyan-600 hover:bg-white hover:text-cyan-700 transition-all ease-in-out duration-500"
            >
              New Food
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
