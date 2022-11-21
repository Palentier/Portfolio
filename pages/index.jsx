import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "../components/Head";
export default function Home() {
  return (
    <div className="">
      <Head name={"Palentier - Welcome"} />
      <Navbar />
    </div>
  );
}
