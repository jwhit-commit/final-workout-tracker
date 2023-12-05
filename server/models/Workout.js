const { Schema, model } = require('mongoose');

// code below creates the schema for the workout collection and sets the fields to be required
const workoutSchema = new Schema({
    // day is set to the current date
    day: {
        type: Date,
        default: () => new Date()
    },
    // defines the exercises that were performed
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ],
});
// code below creates the Workout model using the workoutSchema
const Workout = model('Workout', workoutSchema);

// code below exports the Workout model
module.exports = Workout;