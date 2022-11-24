import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



export default function Navbar({}) {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menu = useRef(null);
  const updateMenu = () => {
    setBurgerClass(
      isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked"
    );
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  function handleHover(index) {
    if (!menu.current) return;
    menu.current.setAttribute("data-active-index", `${index}`);
  };



  return (
    <div className="">
    <div className="desktop" style={{ width: "100%", height: "100vh" }}>
      <div className="navbar-left font-bold flex">
        <div className="navbar-logo">
          <Image
            width={65}
            height={65}
            src="/newPalentierPurpleEyes.png"
            draggable="false"
          />
          <Link href="/">
            <h1 className="text-2xl"> Palentier </h1>
          </Link>
        </div>
        <div className="navbar-items">
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
           <Link href="/">about.jsx</Link>
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
          <Link href="/">skills.jsx</Link>
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
          <Link href="/">projects.jsx</Link>
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
          <Link href="/">contact.jsx</Link>
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
          <Link href="/">source.jsx</Link>
          </div>
        </div>
      </div>
      </div>

  

      <div
        onClick={() => isMenuClicked && updateMenu()}
        className="mobile"
        style={{ width: "100%", height: "100vh" }}
      >
        <nav>
          <div className=" flex text-3xl font-black items-center">
            <Image
              className="w-[70px] h-[70px]"
              width={70}
              height={70}
              src={"/newPalentierPurpleEyes.png"}
            />
          </div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>

        <div className={menu_class}>
          <div ref={menu} className="menu">
            <div className="menu-items ">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <Link
                  className="menu-items"
                  key={index}
                  href={`#${item.toLowerCase()}`}
                >
                  <div
                    onMouseOver={() => handleHover(index)}
                    className="menu-item"
                  >
                    {item}
                  </div>
                </Link>
              ))}
            </div>
            <div className="menu-background-pattern"></div>
          </div>
        </div>
      </div>
      </div>
  );
}
