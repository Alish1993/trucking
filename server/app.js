const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routers/postRouter');

const app = express();

app.use(express.json());
app.use(morgan('start'));
app.use(express.urlencoded());

app.use('/api/post', postRouter);

module.exports = app;
