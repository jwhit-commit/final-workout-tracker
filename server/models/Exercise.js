const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    sets: [{
        reps: {
            type: Number,
            required: true,
            trim: true,
        },
        weight: {
            type: Number,
            required: true,
            trim: true,
        },
        duration: {
            type: Number,
            required: true,
            trim: true,
        },
    }],
    target: {
        type: String,
        trim: true,
    },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;