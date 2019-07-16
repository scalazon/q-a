const { MongoClient } = require('mongodb');
const axios = require('axios');
const { MONGO_USER, MONGO_PASSWORD } = require('../config');

const uri = `mongodb+srv://hackmazon:lemonade12@hackmazon-qu1yo.mongodb.net/hackmazon?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

function getAll() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
        .db(dbName)
        .collection(collectionName)
        .find({});
    })
    .then(result => {
      return result.toArray();
    })
    .catch(err => {
      console.log('Error in get all', err);
    });
}

function dataLoader(JSONarray) {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  const asins = JSONarray.map(obj => {
    const { asin } = obj;
    return { asin };
  });
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
        .db(dbName)
        .collection(collectionName)
        .insertMany(asins);
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('Error in data loader', err);
    });
}

function addQuestions() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options).then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .find();
  });
}

function deleteAllProducts() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
        .db(dbName)
        .collection(collectionName)
        .remove({});
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('Error in delete all', err);
    });
}

module.exports = {
  dataLoader,
  deleteAllProducts,
  getAll
};
