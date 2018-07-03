'use strict';

const mongoose = require('mongoose');
const mainpageModel = mongoose.model('mainpage');

const getContent = function (req, res){
    mainpageModel
      .find({whatTitle: 'What is the TacPac?'})
      .exec(function (err, mpage){
        if (!mpage) {
          res
            .status(404)
            .json({"message": "mainpage not found"});
            return;
        }
        else if (err) {
          res
            .status(404)
            .json(err);
            return;
        }
        else {
          res
            .status(200)
            .json(mpage);
        }
      });

};

module.exports = {
  getContent
};