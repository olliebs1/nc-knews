const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const apiRouter = require('./routes/apiRouter');
const {
  error400, routeNotFound, methodNotFound, error422, error500,
} = require('./errors/errors.js');

const app = express();
app.use(bodyParser.json());
app.use(cors())


app.use('/api', apiRouter);
app.use('/*', (req, res, next) => {
  next({ status: 404, message: 'Page Not Found' });
});

// app.use(methodNotFound);
app.use(error400);
app.use(error422);
app.use(routeNotFound);
app.use(error500);

module.exports = app;
