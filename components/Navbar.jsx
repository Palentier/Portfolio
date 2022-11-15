import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-screen flex justify-between">
      <div className="navbar-left font-bold flex">
        <div className="navbar-logo">
          <Image width={65} height={65} src="/newPalentierPurpleEyes.png" />
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
    </nav>
  );
}
