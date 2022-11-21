import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({}) {

  const menu = document.getElementsByClassName("menu");
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setBurgerClass(
      isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked"
    );
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };



  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="menu">
          <div className="menu-items">
            {["Home", "Shop", "About", "Contact"].map((item, index) => (
              <Link href={item.toLowerCase()}>
                <div
                  onMouseOver={() => (menu.dataset.activeIndex = index)}
                  className="menu-item"
                >
                  {item}
                </div>
              </Link>
            ))}
          </div>
          <div className="menu-background-pattern"></div>
        </div>
    <nav className="w-screen flex justify-between">
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
            About Me
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
            Skills
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
            Projects
          </div>
          <div className="navbar-item transition duration-500 ease-in-out hover:text-[#B096D6]">
            Contact Me
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <Link target="_blank" href="https://github.com/palentier/portfolio">
          <button className="drop-shadow-2xl inline-flex items-center justify-center w-auto px-2 py-2 text-sm md:text-base font-bold leading-6 text-white bg-[#495C83] border border-transparent rounded-lg md:w-auto hover:bg-[#607BB0] transition duration-500 ease-in-out transform hover:-translate-y-1 focus-none">
            <Image
              width={25}
              height={25}
              src="/icons8-hand-drawn-star-30.png"
            />
            <Image width={25} height={25} src="/icons8-github-64.png" />
          </button>
        </Link>
      </div>
    </div>
  );
}
