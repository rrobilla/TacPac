const mongoose = require('mongoose');

const topicDetailsSchema = new mongoose.Schema({
    variable: String,
    ifelse: String,
    forloop: String,
    whileloop: String,
    deffunc: String,
    topic_one_title: String,
    topic_one_url: String,
    topic_two_title: String,
    topic_two_url: String,
    doculinks_title: String,
    doculinks_url: String,
    otherlinks_title: String,
    otherlinks_url: String,
    sheet: String,
    download: String
});

const topicSchema = new mongoose.Schema({
  topicName: {
    type: String,
    required: true,
    enum: ['Java', 'Python', 'Javascript', 'PHP', 'CSS3', 'Bootstrap', 'NodeJS', 'Docker', 'Git', 'Linux']},
  topicType: {
    type: String,
    required: true,
    enum: ['language', 'nonlanguage']},
  topicImg: {
    type: String,
    required: true},
  topicDetails: [topicDetailsSchema],

});

mongoose.model('topic', topicSchema);