const express = require('express')
const dbConnect = require('./dbConnect')
const Idea = require('./models/IdeaModel')

const app = express();
dbConnect();
module.exports = app;