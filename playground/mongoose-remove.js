const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({ _id: '5959a9b34d018ae47a6c5095' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5959a9b34d018ae47a6c5095').then((todo) => {
    console.log(todo);
});
