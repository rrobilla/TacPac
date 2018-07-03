'use strict';

const request = require('request');
request.debug = true;
const apiOptions = {
server: 'http://localhost:3000/api/'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server =
'http://tacpac.deploy.cs.camosun.bc.ca/api/';
}

const topics = function(req, res) {
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: '/topic',
    method: 'GET',
    json: {}
  };

  request( reqOptions, function(err, apiRes, apiResBody) {
    // debugging code - api response body
    /*if (err) {
      console.log(err);
    } else if (apiRes.statusCode === 200) {
      console.log(apiResBody);
    } else {
      console.log(apiRes.statusCode);
    }*/
  renderTopicCards(req, res, apiResBody);
  });
};

const details = function(req, res) {
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: `/topic/${req.params.topicName}`,
    method: 'GET',
    json: {}
  };

  request( reqOptions, function(err, apiRes, apiResBody) {
    // debugging code - api response body
    /*if (err) {
      console.log(err);
    } else if (apiRes.statusCode === 200) {
      console.log(apiResBody);
    } else {
      console.log(apiRes.statusCode);
    }*/
  renderDetails(req, res, apiResBody);
  });
};

const renderTopicCards = function(req, res, data) {
  let errorMsg = null;
  if (!(data instanceof Array)){
    errorMsg = "API lookup error";
    data = [];
  }
  res.render('topics', {
    title: 'TacPac - Topics',
    topicNames: {data},
    errorMsg: errorMsg
  });
};

const renderDetails = function(req, res, data) {
  let errorMsg = null;
  if (!(data instanceof Array)){
    errorMsg = "API lookup error";
    data = [];
  }
  res.render('details', { title: 'TacPac - Topic Details',
    details: {data},
    errorMsg: errorMsg
});
}

module.exports = {
  topics,
  details
};