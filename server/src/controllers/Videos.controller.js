const VideoDb = require('../models/Videos.model.js');
const logger = require('../utils/logger');
class Videos {
  upload(req, res, next) {
    VideoDb.create(req.body, logger.ParseCallback);
  }

  viewVideoById(req, res, next) {
    VideoDb.findById(req.params.id, logger.ParseCallback);
  }
  viewMyVideos(req, res, next) {
    VideoDb.find({ userid: req.params.id }, logger.ParseCallback);
  }

  viewHome(req, res, next) {
    VideoDb.find()
      .sort({ _id: -1 })
      .limit(50)
      .exec(ParseCallback);
  }
}
module.exports = Videos;
