const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '595971f37a992f03ec285b9b';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid.');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }

    console.log('Todo by ID', todo);
}).catch((err) => console.log(err));

User.findById('5958f3460582e00fbc3ccac0').then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User by ID', user);
}).catch((err) => console.log(err));
