import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import config from './config';

import ScenarioController from './controllers/index.js';

const PORT = config.port;
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
  next();
});

app.use('/api/scenarios', ScenarioController);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});
