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
      </div>
    </div>
  );
}
