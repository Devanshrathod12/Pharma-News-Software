import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../App.css";

const News = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true); // Start with scrolling enabled
  const [animationFrame, setAnimationFrame] = useState(null);

  const newsData = [
    {
      title: "New Drug Approval in Pharma Industry",
      content: "",
    },
    {
      title: "Pharmaceutical Innovation in 2024",
      content: "",
    },
    {
      title: "Pharma Trends and Insights",
      content: "",
    },
  ];

  // Infinite scroll logic using JavaScript and requestAnimationFrame
  useEffect(() => {
    const scrollCards = () => {
      // Move the offset to the left gradually
      // setOffsetX((prevOffset) => prevOffset - 0.5); // Adjust speed here
      // setAnimationFrame(requestAnimationFrame(scrollCards));
    };

    if (isScrolling) {
      // setAnimationFrame(requestAnimationFrame(scrollCards)); // Start the scroll animation
    } else {
      // cancelAnimationFrame(animationFrame); // Pause scrolling when hovering
    }

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, [isScrolling, animationFrame]);

  // Handlers for mouse entering and leaving the scroll container
  const handleMouseEnter = () => {
    // setIsScrolling(false); // Pause scrolling when the mouse enters the container
  };

  const handleMouseLeave = () => {
    // setIsScrolling(true); // Resume scrolling when the mouse leaves the container
  };

  return (
    <div id="news" className="h-screen w-full bg-black bg-opacity-80 flex flex-col items-center pt-4">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-300 mt-4 mb-8">
        Latest Pharma News
      </h1>
      <div
        className="scroll-container w-full md:w-4/5 lg:w-3/5 flex justify-center overflow-hidden relative"
        onMouseEnter={handleMouseEnter} // Pause scroll when mouse enters the container
        onMouseLeave={handleMouseLeave} // Resume scroll when mouse leaves the container
      >
        <div
          className="scroll-content flex transition-transform duration-300 ease-linear"
          style={{
            transform: `translateX(${offsetX}px)`,
          }}
        >
          {newsData.concat(newsData).map((article, index) => (
            <Card
              key={index}
              className="news-card bg-blue-200"
              sx={{
                maxWidth: 450,
                height: 300,
                margin: "0 15px",
                cursor: "pointer", // Makes the card interactive
                transition: "transform 0.3s ease", // Smooth transition for hover
              }}
              onMouseEnter={() => setIsScrolling(false)} // Pause scroll when hovering over a card
              onMouseLeave={() => setIsScrolling(true)} // Resume scroll when leaving a card
            >
              <CardContent className="bg-blue-100">
                <Typography
                  variant="h5"
                  component="div"
                  className="font-bold text-blue-600 mb-2"
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
