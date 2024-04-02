const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a username"],
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
        },
        email: {
            type: String,
            required: [true, "Please enter a valid email address"],
        },
        comments: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;