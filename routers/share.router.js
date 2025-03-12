const router = require('express').Router();
const { Router } = require('express');
const { initialPageRender, uploadFile } = require('../controller/share.controller');

router.get('/', initialPageRender);
router.post('/upload', uploadFile);

module.exports = router;
