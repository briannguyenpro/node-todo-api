let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds147052.mlab.com:47052/node_todo_api');

module.exports = { mongoose };
