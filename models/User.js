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
      required: [true, "provide a email for this user."],
    },
    password: {
      type: String,
      required:[true,"provide a password for this user"]
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
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
