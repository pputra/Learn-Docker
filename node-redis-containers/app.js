require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const client = require('redis').createClient({
  host: 'redis-server',
});

client.set('output', 'foo');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  client.get('output', (err, reply) => {
    res.send(reply);
    client.set('output', reply === 'foo' ? 'bar' : 'foo');
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;