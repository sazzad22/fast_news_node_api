const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

const routerNewsArticle = require('./route/newsArticle.route');
const routerEditor = require('./route/editor.route');
const errorHandler = require('./middleware/errorHandler');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//api route middleware
app.use('/api/v1/news-article', routerNewsArticle);
app.use('/api/v1/editor', routerEditor);

//home response
app.get('/',async (req, res) => {
    res.send("News server is running");
})

//Global error handler
app.use(errorHandler);



module.exports = app;
