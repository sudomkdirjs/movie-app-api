require('dotenv').config();
const accessLogMiddleware = require('./middlewares/logger.middleware');
const routes = require('./routes');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

// Req and Res logger.
app.use(accessLogMiddleware);

app.use('/', routes);

module.exports = app;
