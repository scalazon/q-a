const mongoose = require('mongoose');
const connection = require('./dbConnect');

const productSchema = new mongoose.Schema({
  asin: String,
  question: String,
  answer: String
});

const Product = mongoose.model('Product', productSchema);

module.exports.getAll = () =>
  Product.find()
    .then(stuff => console.log(stuff))
    .catch(console.error);
