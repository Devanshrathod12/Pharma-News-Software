import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../App.css"; // Ensure your styles are imported

const News = () => {
  // Example data for news articles
  const newsData = [
    {
      title: "New Drug Approval in Pharma Industry",
      content:
        "The FDA has approved a new drug aimed at treating Alzheimer’s disease, offering hope to millions of patients worldwide.",
    },
    {
      title: "Pharmaceutical Innovation in 2024",
      content:
        "With groundbreaking advancements in drug delivery systems, the pharmaceutical industry is poised for a major transformation in the coming years.",
    },
    {
      title: "Pharma Trends and Insights",
      content:
        "Emerging trends in the pharmaceutical sector include AI-driven research, personalized medicine, and digital health technologies.",
    },
  ];

  return (
    <div className="h-screen w-full bg-black bg-opacity-80 flex items-center justify-center">
      <div className="p-6 rounded-lg text-center text-white w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-xl md:text-6xl font-bold mb-6">Latest Pharma News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-400">
          {newsData.map((article, index) => (
            <Card
              key={index}
              className="bg-white text-black"
              sx={{ maxWidth: 345 }}
            >
              <CardContent>
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
