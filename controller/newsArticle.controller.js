const {
  getNewsArticleService,
  addOneNewsService,
} = require('../services/newsArticle.service');

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

//adds a user to the userdatabase
const addOneNews = async (req, res) => {
  try {
    const result = await addOneNewsService(req.body);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add data",
      error: error.message,
    });
  }
};

  
module.exports = {
  getNewsArticle,
  addOneNews
} 