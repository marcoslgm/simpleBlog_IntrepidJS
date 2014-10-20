
/**
 * @file Blog.js
 * @namespace Blog schema
 * @desc MongoDB Blog object schema
 */

var mongoose = require('mongoose'),
    rek = require('rekuire'),
    _ = require('underscore');


var postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    title: String,
    text: String,
    created: {type: Date, default: Date.now }
});

module.exports = postSchema;