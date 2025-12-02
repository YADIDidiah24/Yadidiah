'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full px-6 sm:px-16 py-4 transition-all duration-300 ${
        scrolled ? "bg-secondary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo.src} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-text-primary text-lg font-bold cursor-pointer">
            Yadidiah
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${
                active === nav.title ? "text-text-primary" : "text-text-secondary"
              } hover:text-accent`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setToggle(!toggle)}
            className="focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
          >
            <img
              src={toggle ? close.src : menu.src}
              alt="menu"
              className="w-7 h-7 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-2/3 bg-secondary/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
            <button
                aria-label="Close menu"
                onClick={() => setToggle(false)}
                className="focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
            >
                <img src={close.src} alt="close" className="w-7 h-7 cursor-pointer" />
            </button>
        </div>
        <ul className="flex flex-col items-center gap-8 mt-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-2xl font-semibold cursor-pointer transition-colors duration-300 ${
                active === nav.title ? "text-accent" : "text-text-primary"
              } hover:text-accent`}
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
    </nav>
  );
};

export default Navbar;
