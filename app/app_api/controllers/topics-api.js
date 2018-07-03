'use strict';

const mongoose = require('mongoose');
const topicModel = mongoose.model('topic');

/* Task 5 lab 11 */
const getTopic = function (req, res){
  //console.log(req.params.topicName)
  topicModel
    .find({}, {topicName: 1, topicImg: 1})
    .sort({'topicName': -1})
    .exec(function (err, topic){
      if (err) {
        res
          .status(404)
          .json(err);
      }
      else {
        res
          .status(200)
          .json(topic);
      }
    });
};

const addTopic = function (req, res){
  res
    .status(200)
    .json({"status": "success"});
};

module.exports = {
  getTopic,
  addTopic
};