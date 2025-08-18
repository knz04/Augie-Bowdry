import { Link } from "react-router-dom";
import hero from "../assets/hero.jpeg";

function Hero() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-6 bg-[{hero}] h-[50vh] md:h-[88vh] p-12 md:p-4 bg-fixed"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-sky-700 opacity-10 z-0"></div>
      <h1 className="font-bold text-3xl md:text-8xl text-center text-neutral-50 z-10">
        Build Wealth
        <br />
        Lead with Purpose
        <br />
        Live Fully Aligned
      </h1>
      <p className="text-base md:text-xl text-center text-neutral-50 z-10">
        Financial guidance and business mentorship rooted in core values.
      </p>
      <Link
        to="/contact"
        className="text-center text-base font-semibold text-neutral-50 hover:text-sky-600 bg-sky-600 hover:bg-neutral-50 hover:cursor-pointer mt-6 py-4 px-9 z-10 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-115"
      >
        Let's Connect
      </Link>
    </div>
  );
}

export default Hero;
