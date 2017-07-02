const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost/todo_app', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});