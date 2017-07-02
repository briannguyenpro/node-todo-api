const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/todo_app', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('users').deleteMany({ name: 'Andrew' });

    db.collection('users').findOneAndDelete({
        _id: new ObjectID('5958cb2fe37effbba380bfe0')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});