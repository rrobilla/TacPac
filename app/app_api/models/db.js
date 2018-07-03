const mongoose = require('mongoose');

let dbURI = 'mongodb://mongo/tacpac';

if (process.env.NODE_ENV === 'production'){
	dbURI = process.env.MONGO_URL;
}
mongoose.connect(dbURI, { useMongoClient: true});

mongoose.connection.on('connected', function() {
	console.log('Mongoose connect to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error:' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

require('./mainpage_schema');
require('./topic_schema');