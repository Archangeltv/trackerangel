import chart from "../images/Chart.svg";
import base from "../images/Group.svg";
import table from "../images/Table.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="About"
      className="text-white relative p-8 md:px-16 bg-[#2B076E]"
    >
      <h2 className="text-2xl text-center font-bold mb-7">
        Track markets and portfolio.
      </h2>
      <div className="flex flex-col gap-10" data-aos="fade-up">
        <div
          className="grid md:grid-cols-2 items-center gap-10 mb-7"
          data-aos="fade-up"
        >
          <div
            className="flex flex-col items-start justify-center gap-5"
            data-aos="fade-up"
          >
            <h2 className=" text-2xl md:text-4xl font-bold">Invest Smart</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              maiores libero dolorem rem reiciendis harum fugiat tempore nisi
              ratione eum consectetur labore tempora tenetur amet, corporis
              dolores omnis odio fugit.
            </p>
            <button className="bg-[#3671E9] px-4 py-3  rounded-3xl">
              Learn More
            </button>
          </div>
          <img
            src={chart}
            alt=""
            className="row-span-full md:row-span-1 "
            data-aos="fade-up"
          />
        </div>
        <div
          className="grid md:grid-cols-2 items-center gap-10 mb-7"
          data-aos="fade-up"
        >
          <img src={base} alt="" data-aos="fade-up" />
          <div
            className="flex flex-col items-start justify-center gap-5"
            data-aos="fade-up"
          >
            <h2 className=" text-2xl md:text-4xl font-bold">
              Trading Statistics
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              obcaecati nam tenetur ipsa consequuntur necessitatibus quam fugit
              pariatur exercitationem unde, dignissimos amet tempora ut, laborum
              magnam, explicabo eligendi autem distinctio.
            </p>
            <button className="bg-[#3671E9] px-4 py-3  rounded-3xl">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="grid md:grid-cols-2 items-center gap-10"
          data-aos="fade-up"
        >
          <div
            className="flex flex-col items-start justify-center gap-5"
            data-aos="fade-up"
          >
            <h2 className=" text-2xl md:text-4xl font-bold">Invest Smart</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi
              quos nostrum libero aut minima quae quidem impedit adipisci
              placeat assumenda ab tenetur, voluptas dolorum voluptatibus vitae
              nesciunt nulla nisi?
            </p>
            <button className="bg-[#3671E9] px-4 py-3  rounded-3xl">
              Learn More
            </button>
          </div>
          <img
            src={table}
            alt=""
            className="row-span-full md:row-span-1 self-start justify-self-start w-fit"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
