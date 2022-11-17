import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="landing-section">
        <div className="left-landing font-black text-4xl">
          <h1> Hello, I&apos;m Palentier. </h1>
          <p>I&apos;m a front-end developer based in the United States.</p>
          <div className="flex">
            <Link href="https://discord.gg/k2FEGjxqN2">
              <Image width={40} height={40} src="/icons8-discord-new-50.png" />
            </Link>
            <Link href="https://github.com/palentier">
              <Image width={40} height={40} src="/icons8-github-64.png" />
            </Link>
            <Link href="https://twitter.com/palentier_">
              <Image width={40} height={40} src="/icons8-twitter-30.png" />
            </Link>
          </div>
        </div>
        <div className="right-landing ">
          <Image
            width={100}
            height={100}
            src="/undraw_code_typing_re_p8b9.svg"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
