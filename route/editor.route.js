const express = require('express');
const editorController = require('../controller/editor.controller');
const router = express.Router();

router
    .route('/')
    .get(editorController.getAllEditor)
    .post(editorController.addOneEditor)
    


module.exports = router;