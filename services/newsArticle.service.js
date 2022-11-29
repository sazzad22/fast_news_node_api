const NewsArticle = require('../models/NewsArticle');

exports.getNewsArticleService = async () => {
    const NewsArticle = await NewsArticle.find({})
    return NewsArticle;
  };