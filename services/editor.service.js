const Editor = require('../models/Editor');


// Query service to get all editors
exports.getEditorService = async () => {
  //collection - users(newly create if not exits)
  const editors = await Editor.find({});
  return editors;
};

//post a user data to editor collection
exports.addOneEditorService = async (addedEditor) => {
    const result = await Editor.create(addedEditor);
    return result;
};
  
//query one editor that matches the id
exports.getOneEditorService = async (email) => {
  const query = { email:email };
  const editor = await Editor.findOne(query);
  
  return editor;
};
  