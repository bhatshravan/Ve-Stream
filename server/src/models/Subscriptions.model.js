const mongoose = require('mongoose');

const SubscriptionsSchema = new mongoose.Schema([
  {
    userid: {
      type: String,
      required: true,
      unique: true,
    },
    subscribedTo: [
      {
        subscriberid: String,
        subscribedName: String,
        followed: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
]);

let Subscriptions = mongoose.model('Subscriptions', SubscriptionsSchema);
module.exports = Subscriptions;
