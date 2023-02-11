import vector from "../images/Vector.png";
import vector2 from "../images/Vector2.png";

function Footer() {
  return (
    <footer className="p-8 md:px-16 text-white">
      <div className="bg-[#3671E9] md:p-8 rounded-2xl gap-5 flex flex-col md:flex-row p-4 items-center justify-between overflow-hidden relative">
        <img
          src={vector2}
          alt=""
          className="absolute left-0 pointer-events-none"
        />
        <h3>Subscribe to our newsletter</h3>
        <div>
          <input
            className=" bg-transparent border-b-2 outline-none placeholder:text-white "
            placeholder="Enter Email..."
          />
          <button className="bg-white text-[#0D0D2B] py-2 rounded-2xl px-3 ">
            Subscribe
          </button>
          <img
            src={vector}
            alt=""
            className="absolute top-0 right-0 pointer-events-none"
          />
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-5">TRACKANGEL</h1>
      <p className="text-center mt-5">©2023 Archangel. All rights reserved</p>
    </footer>
  );
}

export default Footer;
