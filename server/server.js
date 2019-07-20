const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const mongo = require(path.resolve(__dirname, '../db/dbMethods.js'));
const app = express();
const { PORT, HOST } = require('../config.js');

const port = PORT || 3001;
const host = HOST || '0.0.0.0';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get(
  'q-a-env.brpmxghy9w.us-east-1.elasticbeanstalk.com/everything',
  (req, res) => {
    mongo.getAll().then(all => res.send(all));
  }
);

app.get('q-a-env.brpmxghy9w.us-east-1.elasticbeanstalk.com/one', (req, res) => {
  console.log(req.body);
  mongo.getOne(req.body.asin).then(one => {
    res.send({ question: one.question, answer: one.answer });
  });
});

app.listen(port, host, () => {
  console.log(`Serving it up at: http://${host}:${port}`);
});
