import express from 'express';
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;