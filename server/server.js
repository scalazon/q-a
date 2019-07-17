const express = require('express');
const morgan = require('morgan');
const path = require('path');

const mongo = require(path.resolve(__dirname, '../db/dbMethods.js'));

const app = express();
const { PORT, HOST } = require('../config.js');

const port = PORT || 3001;
const host = HOST || '0.0.0.0';

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/grab', (req, res) => {
  mongo.getAll().then(all => res.send(all));
});

app.listen(port, host, () => {
  console.log(`Serving it up at: http://${host}:${port}`);
});
