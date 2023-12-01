const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// the code below creates the schema for the user collection and sets the fields to be required
const userSchema = new Schema({
    // defines the username, and sets it to be unique, required, and trimmed
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    // defines the email, and sets it to be unique, required, and to match a valid email address
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    // defines the password, and sets it to be required and to have a minimum length of 5 characters
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    // defines the workouts that the user has created
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Workout'
        }
    ]
    });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
    });

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
    };

const User = model('User', userSchema);

module.exports = User;