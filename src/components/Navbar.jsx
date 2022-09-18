import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cyan-500 py-4 shadow-xl">
      <div className="px-4 md:container md:mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-white font-thin">FoodPrep Tips</h1>
        <ul className="flex text-white">
          <li className="mx-3 md:mx-10">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/create"
              className="border py-2 px-2 md:px-5 rounded-md text-cyan-500 bg-white hover:bg-cyan-500 hover:text-white transition-all ease-in-out duration-500"
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
