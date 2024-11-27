const sequelize = require('../config/db');
const Sequelize = require('sequelize');

// Import models
const User = require('./userModel');

// Initialize models
const models = {
  User,
};

// Associate models if needed
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, ...models };