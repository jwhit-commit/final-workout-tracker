const { Schema, model } = require('mongoose');

// code below creates the schema for the workout collection and sets the fields to be required
const workoutSchema = new Schema({
    // day is set to the current date
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    day: {
        type: Date,
        default: () => new Date()
    },
    // defines the muscle group that was worked out
    muscleGroup: {
        type: String,
        required: true,
        trim: true,
    },
    // defines the exercises that were performed
    exercises: [
        {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            sets: {
                type: Number,
                required: true,
                trim: true,
            },
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
        }
    ],
});
// code below creates the Workout model using the workoutSchema
const Workout = model('Workout', workoutSchema);

// code below exports the Workout model
module.exports = Workout;