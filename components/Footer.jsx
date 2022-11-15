import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <h1 className="font-bold  text-2xl ">
          Developed by<span className="text-[#af88e9]"> Palentier</span>
        </h1>
        <p className="text-sm">
        Made wih love with NextJS
        </p>
        <p>
        Copyright © 2022 Palentier. All rights reserved.
        </p>
      </div>
      <div className="footer-area">
        <h1 className="font-black text-xl">Go to</h1>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="/">Home</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="#about">About Me</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="#skills">Skills</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="#projects">Projects</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="#contact">Contact Me</Link>
        </p>
      </div>
      <div className="footer-area">
        <h1 className="font-black text-xl">Contact</h1>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="mailto:chase@utilibots.co.uk">Email me</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="https://github.com/palentier" target={"_blank"}>Github</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="https://twitter.com/palentier" target={"_blank"}>Twitter</Link>
        </p>
      </div>
      <div className="footer-area-3">
        <h1 className="font-black text-xl">Links</h1>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="https://discord.gg/k2FEGjxqN2" target={"_blank"}>My Discord</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="https://github.com/palentier/portfolio" target={"_blank"}>Source Code</Link>
        </p>
        <p className="duration-500 hover:text-[#B096D6] text-[#9d9d9d] font-normal text-[16px]">
          <Link href="https://icons8.com/license">Icon 8 Usage</Link>
        </p>
      </div>
    </footer>
  );
}
