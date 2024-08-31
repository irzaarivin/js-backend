const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = db;