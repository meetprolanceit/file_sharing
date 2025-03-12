const router = require('express').Router();
const { initialPageRender, uploadFile, fileReceiver } = require('../controller/share.controller');

router.get('/', initialPageRender);
router.post('/upload', uploadFile);
router.get('/:id', fileReceiver);

module.exports = router;
