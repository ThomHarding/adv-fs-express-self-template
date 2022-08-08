const express = require('express');
const cookieParser = require('cookie-parser');
const users = require('./routes/users');
const items = require('./routes/items');
const notFound = require('./middleware/not-found');
const error = require('./middleware/error');

const app = express();

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.use('/api/v1/users', users);
app.use('/api/v1/items', items);

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(notFound);
app.use(error);

module.exports = app;
