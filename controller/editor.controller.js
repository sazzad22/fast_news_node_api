const {
  addOneEditorService,
  getEditorService
} = require('../services/editor.service');

//loads all editor data
const getAllEditor = async (req, res, next) => {
  try {
    const editors = await getEditorService();

    res.status(200).json({
      status: "Success",
      message: "Data acquired",
      data: editors,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add data",
      error: error.message,
    });
  }
};


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
    getAllEditor
}