const express = require('express')
const dbConnect = require('./models/dbConnect')
const Idea = require('./models/IdeaModel')
const User = require('./models/userModel')
const routes = require('./routes/routes');

const app = express();
dbConnect();

//cors error
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","POST, GET, PATCH, PUT, DELETE, OPTIONS");
    next();
})


app.use('/auth',routes);
app.use(express.urlencoded({ extended: true }));

module.exports = app;