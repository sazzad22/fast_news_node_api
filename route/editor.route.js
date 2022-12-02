const express = require('express');
const editorController = require('../controller/editor.controller');
const { verifyAdmin } = require('../middleware/verifyAdmin');
const router = express.Router();

router
    .route('/')
    .get(editorController.getAllEditor)
    .post(editorController.addOneEditor)
router
    .route('/:email')
    .patch(verifyAdmin,editorController.updateOneEditor)



module.exports = router;