const express = require('express');
const newsArticleController = require('../controller/newsArticle.controller');
const { verifyAdmin } = require('../middleware/verifyAdmin');
const router = express.Router();

router
    .route('/')
    .get(newsArticleController.getNewsArticle)
    .post(newsArticleController.addOneNews)


module.exports = router;