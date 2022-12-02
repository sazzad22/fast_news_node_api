const { getOneEditorService } = require("../services/editor.service");

exports.verifyEditor = async (req, res, next) => {
    const email = req.params.email;
    const requesterAccount = await getOneEditorService(email)
    if (requesterAccount && requesterAccount.status === 'active') {
      next();
    }
    else {
      res.status(403).send({ message: 'forbidden' });
    }
  }