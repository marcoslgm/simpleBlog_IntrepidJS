
/**
 * @file Blog.js
 * @namespace Blog model
 * @desc MongoDB Blog object model
 */


var mongoose = require('mongoose'),
    rek = require('rekuire'),
    moduleSchema = rek('modules/blog/data/schemas/post'),
    schema = mongoose.model('Blog', moduleSchema);

module.exports = schema;
