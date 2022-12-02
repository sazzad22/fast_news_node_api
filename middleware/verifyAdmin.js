const User = require("../models/User");
const { getOneUserService } = require("../services/user.service");

exports.verifyAdmin = async (req, res, next) => {
    const email = req.params.email;
    
    const requesterAccount = await getOneUserService(email);
    console.log(requesterAccount);
    if (requesterAccount && requesterAccount?.role === 'admin') {
      next();
    }
    else {
        res.status(403).send({ message: 'forbidden (user do not have this privilege)' });
    }
  }