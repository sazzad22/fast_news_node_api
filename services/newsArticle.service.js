const NewsArticle = require("../models/NewsArticle");

exports.getNewsArticleService = async () => {
  const newsArticle = await NewsArticle.find({});
  return newsArticle;
};

//post a news article to collection
exports.addOneNewsService = async (addedNews) => {
  const result = await NewsArticle.create(addedNews);
  return result;
};
