exports.verifyEditor = async (req, res, next) => {
    const requester = req.email;
    const requesterAccount = await userCollection.findOne({ email: requester });
    if (requesterAccount.role === 'admin') {
      next();
    }
    else {
      res.status(403).send({ message: 'forbidden' });
    }
  }