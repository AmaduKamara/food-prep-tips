import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cyan-500 py-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl text-white">Food Prep Tips</h1>
        <ul className="flex text-white">
          <li className="mx-10">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/create"
              className="border py-2 px-5 rounded-md text-cyan-500 bg-white hover:bg-cyan-500 hover:text-white transition-all ease-in-out duration-500"
            >
              Create New Food
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
