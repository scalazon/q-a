const mongoose = require('mongoose');
const connection = require('./dbConnect');

const productSchema = new mongoose.Schema({
  asin: String,
  question: String,
  answer: String
});

const Product = mongoose.model('Product', productSchema);

module.exports.getAll = () => Product.find().catch(console.error);
module.exports.getOne = asin => Product.findOne({ asin }).catch(console.error);
