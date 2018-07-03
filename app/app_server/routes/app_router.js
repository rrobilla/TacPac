'use strict';

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const topicsController = require('../controllers/topics');
const miscController = require('../controllers/misc');

/* -- INDEX PAGES -- */
/* GET home page. */
router.get('/', indexController.index);

/* -- TOPICS PAGES -- */
/*GET topics page */
router.get('/topics', topicsController.topics);
/* GET topics details page */
router.get('/topic/:topicName', topicsController.details);

/* -- MISC PAGES -- */
/* GET Feedback page */
router.get('/feedback', miscController.feedback); 

module.exports = router;
