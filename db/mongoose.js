const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@hackmazon-qu1yo.mongodb.net/hackmazon?retryWrites=true&w=majority`,
  { useNewUrlParswer: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});
