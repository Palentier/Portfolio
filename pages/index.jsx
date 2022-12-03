import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Header,
  Connect,
  Projects,
  Skills,
  About,
  Langs,
} from "../containers";

import Head from "../components/Head";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="">
      <div className="gradient__bg">
        <Head name={"Palentier - Welcome"} />
        <Navbar />
        <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <var>  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  </var>
</div>
        <Header />
      </div>
      <Langs/>
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
}
