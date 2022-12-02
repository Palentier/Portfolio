import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="plnt__navbar">
      <div className="plnt__navbar-links">
        <div className="plnt__navbar-links_logo">
          <img src='/newPalentierPurpleEyes.png' />
        </div>
        <div className="plnt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#skills">Skills</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#connect">Connect</a>
          </p>
        </div>
      </div>
      <div className="plnt__navbar-sign">
        <button type="button">Source Code</button>
      </div>
      <div className="plnt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="plnt__navbar-menu_container scale-up-center">
            <div className="plnt__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#skills">Skills</a>
              </p>
              <p>
                <a href="#projects">Projects</a>
              </p>
              <p>
                <a href="#connect">Connect</a>
              </p>
            </div>
            <div className="plnt__navbar-menu_container-links-sign">
              <button type="button">Source Code</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
