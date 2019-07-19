const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD } = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@hackmazon-qu1yo.mongodb.net/hackmazon?retryWrites=true&w=majority`;
module.exports = mongoose.connect(uri, {
  useNewUrlParser: true
});
