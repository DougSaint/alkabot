import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header
      className="w-full flex justify-between items-center bg-white
       sm:px-8 px-4 py-4 border-b border-b-[#e6eqbf4]"
    >
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Link
          to="/users"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Users
        </Link>
        <Link
          to="/home"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mx-5"
        >
          Posts
        </Link>
      </div>
    </header>
  );
}
