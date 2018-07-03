const mongoose = require('mongoose');

const mainpageSchema = new mongoose.Schema({
  whatTitle: {
    type: String,
    required: true},
  whatBody: {
    type: String,
    required: true},
  howTitle: {
    type: String,
    required: true},
  howBody: {
    type: String,
    required: true},
  suggestTitle: {
    type: String,
    required: true},
  suggestBody: {
    type: String,
    required: true}
});

mongoose.model('mainpage', mainpageSchema);