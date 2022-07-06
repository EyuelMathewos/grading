import express from 'express';
const app = express();

app.get('/', function(req, res) {
    res.send("Express is running");
});

module.exports = app;