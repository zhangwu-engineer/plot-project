import express from 'express';
import bodyParser from 'body-parser';
import config from './config';

const PORT = config.port;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
  next();
});

const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});
