const { ConnectionStates } = require('mongoose');
const { User, Workout} = require('../models');
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
        addWorkout: async (parent, { bodyPart, exercises }, context) => {
            // if (context.user) {
                const workout = await Workout.create({ bodyPart, exercises });

                await User.findByIdAndUpdate({_id: context.user._id},
                // await User.findByIdAndUpdate({_id: "656a45d6b67b02be5a4e1622"},

                {
                    $push: { workouts: workout._id},
                });

                return workout;
            // }
            // throw new AuthenticationError('You need to be logged in!');
        },
        updateWorkout: async (parent, { _id, exercises }) => {
            const updatedWorkout = await Workout.findOneAndUpdate(
                { _id },
                { exercises },
                { new: true }
            );
            return updatedWorkout;
        },

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
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
    },
    };

module.exports = resolvers;
