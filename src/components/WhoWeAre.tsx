import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { Mail, Phone } from "lucide-react";

function WhoWeAre() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-10 px-4 md:px-8 md:h-[50vh] lg:h-screen 2xl:h-[70vh] bg-neutral-50">
      <div className="flex flex-col justify-center w-full md:w-1/2 p-4 md:p-8">
        <p className="text-2xl md:text-4xl font-semibold text-sky-600 pb-2">
          Who I Am
        </p>
        <p className="text-base md:text-xl font-light text-neutral-950 lg:pr-16">
          I'm Agustin Bowdry, a purpose-driven entrepreneur committed to
          building a life that aligns with faith, family, and legacy.
          <br />
          <br />
          After more than a decade in the mortgage and financial world, I
          realized I wasn't just here to build transactions–I was here to build
          people.
          <br />
          <br />
          Today, I help individuals and leaders grow purpose-filled lives and
          businesses that unlock time, income, and freedom–without sacrificing
          what matters most. My life is built around the Five Fs: Faith, Family,
          Finance, Fitness, and Fun.
          <br />
          <br />I help others align their lives and decisions around those
          values so they can lead boldly, provide fully, and live freely.
        </p>
      </div>

      <Link
        to="/contact"
        className="flex flex-col items-center w-full md:w-1/2 bg-white border border-neutral-100  shadow-sm md:flex-row md:max-w-xl hover:bg-neutral-200 hover:cursor-pointer mt-8 md:mt-0"
      >
        <img
          className="object-cover w-full h-auto  md:h-full md:w-48 "
          src={profile}
          alt="Agustin Bowdry"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-center md:text-start text-2xl font-bold tracking-tight text-neutral-950 ">
            Agustin Bowdry
          </h5>
          <p className="text-center md:text-start mb-2">
            CEO of Project Me Ventures
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <Phone color="#374151" className="mr-2" />
              <p className="text-center md:text-start font-normal text-gray-700">
                415-894-2790
              </p>
            </div>
            <div className="flex">
              <Mail color="#374151" className="mr-2" />
              <p className="text-center md:text-start mb-3 font-normal text-gray-700 ">
                agustinbowdry@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WhoWeAre;
