const express = require('express');
const newsArticleController = require('../controller/newsArticle.controller');
const { verifyAdmin } = require('../middleware/verifyAdmin');
const { verifyEditor } = require('../middleware/verifyEditor');
const router = express.Router();

router
    .route('/')
    .get(newsArticleController.getNewsArticle)
router
    .route('/:email')
    .post( verifyEditor, newsArticleController.addOneNews)


module.exports = router;