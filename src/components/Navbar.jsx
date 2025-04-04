import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full py-5 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-lg font-semibold cursor-pointer flex">
  Yadidiah<span className="hidden sm:block text-gray-400 ml-1"> | AI Engineer & Data Scientist</span>
</p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-lg font-medium cursor-pointer transition duration-300 ${
                active === nav.title ? "text-white" : "text-gray-400"
              } hover:text-[#4ADE80]`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative group">
                {nav.title}
                <span className="absolute left-0 w-0 h-[2px] bg-[#4ADE80] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 right-6 w-48 p-5 rounded-lg bg-[#1e293b] shadow-lg transition-transform duration-300 ${
            toggle ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-md font-medium cursor-pointer transition duration-300 ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } hover:text-[#4ADE80]`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
