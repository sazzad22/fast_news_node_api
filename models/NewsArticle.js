const mongoose = require("mongoose");

// Schema design //
const NewsArticleSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please provide a link for this image."],
    },
    title: {
      type: String,
      required: [true, "provide a title for this article."],
    },
    description: {
      type: String,
      required: true,
    },

    writer: {
      type: String,
      required: [true, "provide writer name for this article."],
    },
    editor: {
      type: String,
      required: [true, "provide writer name for this article."],
    },
  },
  {
    timeStamps: true,
  }
);

//from Schema we get data/table Model
//news article Model
const NewsArticle = new mongoose.model("NewsArticle", NewsArticleSchema);
// model function will creates a model for 'NewsArticle' collection in the db

module.exports = NewsArticle;
