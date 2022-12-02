const User = require('../models/User');


// Query service to get all users
exports.getAllUserService = async () => {
    
    const users = await User.find({});
    return users;
};


//post a user data to users collection
exports.addOneUserService = async (addedUser) => {
    const result = await User.create(addedUser);
    return result;
  };


//update user field
exports.updateOneUserService = async (email, link) => {
    const updatedData = {
      uploadedVideo: link
    }
    const result = await User.updateOne({ email: email }, { $push: updatedData });
    
   
    return result;
};
  
//query one user that matches the id
exports.getOneUserService = async (email) => {
    const query = { email:email };
    const user = await User.findOne(query);
    console.log(query,user);
    return user;
  };
