const axios = require('axios');

// Helper function for API requests
const makeApiRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return {
      status: 200,
      success: true,
      message: 'Successfully fetched the data',
      data: response.data,
    };
  } catch (error) {
    console.error('API request error:', error.response ? error.response.data : error);
    return {
      status: 500,
      success: false,
      message: 'Failed to fetch data from the API',
      error: error.response ? error.response.data : error.message,
    };
  }
};

// Controller methods
const getAllNews = async (req, res) => {
  const { pageSize = 80, page = 1, q = 'world' } = req.query;
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
  const result = await makeApiRequest(url);
  res.status(result.status).json(result);
};

const getTopHeadlines = async (req, res) => {
  const { pageSize = 80, page = 1, category = 'general' } = req.query;
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
  const result = await makeApiRequest(url);
  res.status(result.status).json(result);
};

const getCountryHeadlines = async (req, res) => {
  const { pageSize = 80, page = 1 } = req.query;
  const { iso: country } = req.params;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&page=${page}&pageSize=${pageSize}`;
  const result = await makeApiRequest(url);
  res.status(result.status).json(result);
};

module.exports = { getAllNews, getTopHeadlines, getCountryHeadlines };
