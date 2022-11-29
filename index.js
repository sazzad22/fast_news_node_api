const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

// server
const port = process.env.PORT || 5000;

// database connection
mongoose
  .connect(process.env.DB_URI, {
    dbName: 'newsArticleDb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is Commented");
  });

app.listen(port, () => {
    console.log(`News App is running on port ${port}`);
});
