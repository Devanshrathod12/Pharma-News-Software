<<<<<<< Updated upstream
import React from "react";
import "../App.css"; // Ensure your styles are imported

const Home = () => {
  return (
    <div className="h-screen w-full bg-pharma bg-cover bg-center flex items-center justify-center">
      <div className="bg-black bg-opacity-30 p-6 rounded-lg text-center text-white w-auto md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="static-text">Welcome to</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="animated-text">PharmaNews!updates
          </span>
        </h2>
        <a
          href="#news"
          className="bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-medium px-6 py-3 mt-4 rounded-full"
        >
          Explore News
        </a>
      </div>
=======
import React, { useEffect, useState } from "react";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual API endpoint
    const fetchNews = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setNews(data.slice(0, 10)); // Limit to 10 news articles for display
        setLoading(false);
       } catch (error) {
        console.error("Error fetching news",error);
        setLoading(false);
       }
      };
   
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-10"> 
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Latest Pharma News</h2>
      {loading ? (
        <p className="text-blue-500">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article) => (
            <div key={article.id} className="bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-blue-600 font-semibold">{article.title}</h3>
              <p className="text-blue-500">{article.body}</p>
            </div> 
          ))}
        </div>
      )}
>>>>>>> Stashed changes
    </div>
  );
};

<<<<<<< Updated upstream
export default Home;
=======
export default Home;
>>>>>>> Stashed changes
