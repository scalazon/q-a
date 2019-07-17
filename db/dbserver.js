/*
This is meant to be spun up locally as-needed to clear the DB or bulk-load additional data. It draws on the same
db.js file as the production database does, it just pulls in methods that are only used for seeding.
Right now, these methods are:
 * Load Bulk Data - takes in an array of objects and loads them into the database, sends back a success message
 * Clear Products Collection - wipes everything in the products collection. Useful if our data sheet expands and I want to copy in everything fresh
*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const { dataLoader, deleteAllProducts } = require('../db/db');

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  res.send('Connected to DB Seeding Server');
});
app.post('/seeding', (req, res) => {});

app.post('/loadBulkData', (req, res) => {
  const productData = req.body;
  dataLoader(productData).then(result => {
    res.status(201).send('Data loaded!');
  });

  // console logs for testing:
  // console.log("The type of the data is:", typeof data);
  // console.log("The data is an array?", Array.isArray(data))
  // console.log("Length of data is:", data.length)
});

app.delete('/clearProductsCollection', (req, res) => {
  deleteAllProducts().then(result => {
    res.status(200).send('All clear!');
  });
});
const { PORT, HOST } = require('../config');

const port = PORT || 3030;
const host = HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`DB Seed Server running http://${host}:${port}`);
});
