const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Define routes
router.get('/all-news', newsController.getAllNews);
router.get('/top-headlines', newsController.getTopHeadlines);
router.get('/country/:iso', newsController.getCountryHeadlines);

module.exports = router;
