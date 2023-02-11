import illustration1 from "../images/Illustration1.svg";
import arrow from "../images/Arrow Right.png";
import ill from "../images/[].png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="mt-3 bg-[#0D0D2B] grid md:grid-cols-2 p-8 md:px-16 items-center justify-center gap-9"
      data-aos="fade-up"
    >
      <motion.img
        src={illustration1}
        alt="Illustration"
        animate={{ x: [-20, 0, -20] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <img
        src={ill}
        alt=""
        className="absolute left-0 z-0 pointer-events-none"
      />
      <div className="text-white flex flex-col gap-5 items-start md:row-span-full ">
        <p className=" bg-white/[0.1] px-4 py-1 rounded-xl">Coming soon</p>
        <h1 className="md:text-5xl text-2xl font-bold">
          Fastest and secure platform to track your cryptos.
        </h1>
        <p>
          Track all your cryptocurrencies in one place, see real time prices and
          get updates.
        </p>
        <button className="p-4 bg-[#3671E9] rounded-3xl">
          Try for FREE <img src={arrow} alt="" className=" inline w-5 ml-2 " />
        </button>
      </div>
    </section>
  );
}

export default Hero;
