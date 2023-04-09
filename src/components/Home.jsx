import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import readerAnimation from "../assets/reader-animation.json";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="py-16 flex flex-col lg:flex-row items-center gap-2">
      <div className="flex flex-col gap-6 justify-between lg:basis-[50%]">
        <p className="px-3 py-1 text-xs bg-[#FACC15] text-[#5D4E4A] rounded-full w-fit">
          ON SALE!
        </p>
        <h1 className="text-gray-900 text-3xl font-bold tracking-tight">
          A reader lives a thousand lives{" "}
          <span className="text-blue-400">before he dies</span>
        </h1>
        <p className="text-base text-gray-700">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center">
          <Link to="books">
            <button className="px-6 py-2 bg-[#60A5FA] hover:bg-[#392de4]  flex justify-center items-center gap-2 rounded-md text-white font-semibold">
              Visit Store
              <ShoppingCartIcon className="w-5 h-5 text-white" />
            </button>
          </Link>
          <Link to="about">
            <button className="px-6 py-2 flex justify-center items-center gap-2 rounded-md font-semibold text-gray-800 hover:text-[#392de4] ">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:basis-[50%]">
        <Lottie animationData={readerAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Home;
