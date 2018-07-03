'use strict';

const mongoose = require('mongoose');
const topicsModel = mongoose.model('topic');


const getDetails = function (req, res){
  if (req.params && req.params.topicName) {
    topicsModel
      .find({topicName: req.params.topicName}, {_id: 0, topicName: 1, topicDetails: 1})
      .exec( function(err, topic) {
        res
          .status(200)
          .json(topic);
      });
  } else {
    res
      .status(404)
      .json({"message": "No topic name in request"});
  }
};

module.exports = {
  getDetails
};