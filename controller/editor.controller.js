const {
    addOneEditorService
} = require('../services/editor.service');

//adds an editor to the userdatabase
const addOneEditor = async (req, res,next) => {
    try {
      const result = await addOneEditorService(req.body);
  
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
    addOneEditor,

}