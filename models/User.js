const mongoose = require("mongoose");

// Schema design //
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "provide a email for this article."],
    },
    newsArticle: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NewsArticle'
    }],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timeStamps: true,
  }
);

//from Schema we get data/table Model
//Editor Model
const User = new mongoose.model("User", UserSchema);
// model function will creates a model for 'Users' collection in the db

module.exports = User;
