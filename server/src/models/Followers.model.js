const mongoose = require('mongoose');

const FollowersSchema = new mongoose.Schema([
  {
    userid: {
      type: String,
      required: true,
      unique: true,
    },
    subscribers: [
      {
        subscriberid: String,
        joined: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
]);

let Followers = mongoose.model('Followers', FollowersSchema);
module.exports = Followers;
