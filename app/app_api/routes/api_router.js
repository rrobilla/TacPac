'use strict';

const express = require('express');
const router = express.Router();

const topicsAPICONTROLLER = require('../controllers/topics-api');
const topicdetailsAPICONTROLLER = require ('../controllers/topic-details-api');
const mainpagecontentAPICONTROLLER = require('../controllers/mpage-api');

/*topic*/
router
  .route('/topic')
  .get(topicsAPICONTROLLER.getTopic)
  .post(topicsAPICONTROLLER.addTopic);
  
/* topic details */
router
  .route('/topic/:topicName')
  .get(topicdetailsAPICONTROLLER.getDetails);

/*mainpage*/
router
  .route('/mpage')
  .get(mainpagecontentAPICONTROLLER.getContent);

module.exports = router;