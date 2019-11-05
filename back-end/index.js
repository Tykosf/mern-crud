const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const conn = require('./config/connection');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(2221,'localhost', async () => {
  console.log('Server ready!');
  conn.connect(err => {if (err) throw err;})
  console.log('Database ready!');
  console.log('Listening on port 2221');
});