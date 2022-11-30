const express = require('express');
const newsArticleController = require('../controller/newsArticle.controller');
const router = express.Router();

router
    .route('/')
    .get(newsArticleController.getNewsArticle)
    .post(newsArticleController.addOneNews)


module.exports = router;