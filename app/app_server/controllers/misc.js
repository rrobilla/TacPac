'use strict';

const feedback = function(req, res) {
  res.render('feedback', { title: 'TacPac - Feedback / Contact' });
};


module.exports = {
  feedback
};