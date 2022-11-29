const { getNewsArticleService } = require('../services/newsArticle.service');

const getNewsArticle = async (req, res, next) => {
    try {
      const newsArticles = await getNewsArticleService();
      res.status(200).json({
        status: "Success",
        message: "Data acquired",
        data: newsArticles,
      });
    } catch (error) {
      res.status(400).json({
        status: "Failed",
        message: "Cannot get the data",
        error: error,
      });
    }
};
  
module.exports = {
    getNewsArticle
} 