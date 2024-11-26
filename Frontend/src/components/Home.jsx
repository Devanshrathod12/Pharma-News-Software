import React from "react";
import "../App.css"; // Ensure your styles are imported

const Home = () => {
  return (
    <div className="h-screen w-full bg-pharma bg-cover bg-center flex items-center justify-center">
      <div className="bg-black bg-opacity-30 p-6 rounded-lg text-center text-white w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-xl md:text-6xl font-bold mb-4">
          <span className="static-text">Welcome to</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="animated-text">PharmaNews!
          </span>
        </h2>
        <a
          href="#news"
          className="bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-medium px-6 py-3 mt-4 rounded-full"
        >
          Explore News
        </a>
      </div>
    </div>
  );
};

export default Home;