import illustration from "../images/Illustrations.svg";
import chart from "../images/Bar Chart.svg";
import person from "../images/Person.svg";
import earth from "../images/Earth.svg";
import ill from "../images/[].png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Why() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="why" className="bg-[#0D0D2B] p-8 md:px-16">
      <div
        className="grid md:grid-cols-3 items-center gap-10 md:justify-center"
        data-aos="fade-up"
      >
        <div className="flex gap-3 text-white" data-aos="fade-up">
          <img src={chart} alt="" className="bg-white/[0.1] p-4 rounded-3xl" />
          <div>
            <h2 className="text-3xl font-bold mb-2">$30b</h2>
            <p className="text-sm">Digital Currency Tracked</p>
          </div>
        </div>
        <img
          src={ill}
          alt=""
          className="absolute left-0 z-0 pointer-events-none"
        />
        <div className="flex gap-3 text-white py-8" data-aos="fade-up">
          <img src={person} alt="" className="bg-white/[0.1] p-4 rounded-3xl" />
          <div>
            <h2 className="text-3xl font-bold mb-2">10M+</h2>
            <p className="text-sm">Wallet tracked</p>
          </div>
        </div>
        <div className="flex gap-3 text-white" data-aos="fade-up">
          <img src={earth} alt="" className="bg-white/[0.1] p-4 rounded-3xl" />
          <div>
            <h2 className="text-3xl font-bold mb-2">195</h2>
            <p className="text-sm">Countries Supported</p>
          </div>
        </div>
      </div>
      <div
        className="grid md:grid-cols-2 items-center justify-center gap-9"
        data-aos="fade-up"
      >
        <motion.img
          src={illustration}
          alt=""
          animate={{ x: [-20, 0, -20] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <div
          className="text-white flex flex-col items-start justify-center gap-5"
          data-aos="fade-up"
        >
          <h2 className=" text-3xl md:text-4xl font-bold">
            Why you should use Trackangel
          </h2>
          <p>
            Experience the next generation cryptocurrency tracking platform. No
            financial borders, fake prices and fake reviews.
          </p>
          <button className="bg-[#3671E9] px-4 py-3  rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Why;
