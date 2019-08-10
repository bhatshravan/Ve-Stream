const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userid: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    views: {
      type: Number,
    },
    upvote: {
      type: Number,
      default: 0,
    },
    downvote: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
    },
    comments: [
      {
        name: String,
        comment: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

let Video = mongoose.model('Video', VideoSchema);
module.exports = Video;
