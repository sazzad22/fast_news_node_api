const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

const routerNewsArticle = require('./route/newsArticle.route');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//api route middleware
app.use('/api/v1/news-article', routerNewsArticle);

//home response
app.get('/',async (req, res) => {
    res.send("News server is running");
})



module.exports = app;
