require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

// Middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'OPTIONS'] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { error: err.message });
});

// Start server after syncing DB
const PORT = process.env.PORT || 3005;
sequelize.sync().then(() => {
  console.log('Database synced!');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
