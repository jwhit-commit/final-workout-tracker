const { ConnectionStates } = require('mongoose');
const { User, Workout, Exercise} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('workouts');
                user.workouts.sort((a, b) => b.createdAt - a.createdAt);

                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        // workouts: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return Workout.find(params).sort({ createdAt: -1 });
        // },
        // workout: async (parent, { _id }) => {
        //     return Workout.findOne({ _id: workoutId });
        // },
    },

    Mutation: {
        createWorkout: async (_, { name}, context) => {
            try {
                const workout = new Workout({
                    name,
                    day: new Date().toISOString(),
                    exercises: []
                })
                await User.findByIdAndUpdate(

                )
                await workout.save();
                return workout;
            } catch(error) {
                console.log(error);
                throw new Error('Failed to create workout')
            }
        },

        // addWorkout: async (parent, { exercises }, context) => {
        //     // Check if the user is authenticated
        //     if (context.user) {
        //         // Create the workout
        //         const workout = await Workout.create({ exercises });
    
        //         // Associate the workout with the user
        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { workouts: workout._id } }
        //         );
    
        //         return workout;
        //     }
        //     // If not authenticated, throw an error
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        // updateWorkout: async (parent, { _id, exercises }) => {
        //     const updatedWorkout = await Workout.findOneAndUpdate(
        //         { _id },
        //         { exercises },
        //         { new: true }
        //     );
        //     return updatedWorkout;
        // },

        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        // addExercise: async (parent, { name, sets, target }, context) => {
        //     // Check if the user is authenticated
        //     if (context.user) {
        //         // Create the exercise
        //         const exercise = await Exercise.create({ name, sets, target });
                
        //         return exercise;
        //     }
        //     // If not authenticated, throw an error
        //     throw new AuthenticationError('You need to be logged in!');
        // },
    },
    };

module.exports = resolvers;
