const Editor = require("../models/Editor");
const NewsArticle = require("../models/NewsArticle");

exports.getNewsArticleService = async () => {
  const newsArticle = await NewsArticle.find({});
  return newsArticle;
};

//post a news article to collection
exports.addOneNewsService = async (addedNews) => {
  const newsArticle = await NewsArticle.create(addedNews);
  const { _id:newsArticleId, editor } = newsArticle;
  //update the editor document
  const res = await Editor.updateOne({ _id: editor.id }, { $push: { newsArticle: newsArticleId } })
  
  
  return newsArticle;
};
