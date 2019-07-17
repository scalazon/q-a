const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD } = require('../config');

mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@hackmazon-qu1yo.mongodb.net/hackmazon?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

const productSchema = new mongoose.Schema({
  asin: String,
  questions: [{ question: String, answer: String }]
});

const Product = mongoose.model('Product', productSchema);
