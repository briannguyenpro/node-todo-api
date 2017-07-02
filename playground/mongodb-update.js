const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/todo_app', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectID('5958c873e37effbba380befb')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5958c137e37effbba380bdd4')
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});