import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../App.css";

const Home = () => {
  return (
    <div className="h-screen w-full bg-pharma bg-cover bg-center flex items-center justify-center">
      <div className="bg-black bg-opacity-30 p-6 rounded-lg text-center text-white w-auto md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="static-text ">Welcome to</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="animated-text text-blue-100">PharmaNews!Updates</span>
        </h2>
       
        <a href="#news" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary text-sm m-auto md:m-0 hover:scale-105  transition-all  duration-300">
         Explore More <FaArrowRight />
        </a>

      </div>
    </div>
    // 
  );
};

export default Home;
