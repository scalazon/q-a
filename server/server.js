const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const { PORT, HOST } = require('../config.js');

const port = PORT || 3001;
const host = HOST || '0.0.0.0';

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, host, () => {
  console.log(`Serving it up at: http://${host}:${port}`);
});
