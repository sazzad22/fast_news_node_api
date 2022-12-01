const express = require('express');
const editorController = require('../controller/editor.controller');
const router = express.Router();

router
    .route('/')
    .post(editorController.addOneEditor)


module.exports = router;