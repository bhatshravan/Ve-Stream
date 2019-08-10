const express = require('express');
const router = express.Router();
const video = require('../controllers/Videos.controller');
const Video = new video();

router.post('/uploadVideo/', Video.upload);
router.get('/viewSubscribedVideos/:id', Video.viewVideoById);
router.get('/videoHome/', Video.viewHome);
router.get('/videoList/:id', Video.viewVideoById);
// router.delete('/video/:id', Video.view);
// router.delete('/video/:id', Video.view);

module.exports = router;
