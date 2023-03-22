import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import BlogContext from '../context/BlogContext';
import {BsSunFill, BsMoonStarsFill} from "react-icons/bs";

export default function Navbar() {
  const { darkMode,setDarkMode } = useContext(BlogContext)

  const handleChangeTheme = () => {
    if(darkMode === 'light'){
      setDarkMode('dark');
    }else{
      setDarkMode('light')
    }
  }
  return (
    <header
      className="w-full flex justify-between items-center
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
          to="/"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mx-5"
        >
          Posts
        </Link>
      </div>
      <div>
        <button onClick={handleChangeTheme}>{darkMode === 'light' ? <BsMoonStarsFill size={'1.5em'}/> : <BsSunFill size={'1.5em'} fill="white"/>}</button>
      </div>
    </header>
  );
}
