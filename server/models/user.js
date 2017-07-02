const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// newUser = new User({
//     email: 'andrew@example.com'
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('Unable to save user', err);
// });

module.exports = { User };
