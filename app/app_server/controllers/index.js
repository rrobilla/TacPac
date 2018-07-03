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

const index = function(req, res) {
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: '/mpage',
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
  renderHomepage(req, res, apiResBody);
  });
};

const renderHomepage = function(req, res, data) {
  let errorMsg = null;
  if (!(data instanceof Array)){
    errorMsg = "API lookup error";
    data = [];
  }
  res.render('index', {
    title: 'TacPac - the programmer\'s quick reference guide',
    indexContent: {data},
    errorMsg: errorMsg
  });
};


module.exports = {
  index
};