const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('workouts');
        },
        workouts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Workout.find(params).sort({ createdAt: -1 });
        },
        workout: async (parent, { _id }) => {
            return Workout.findOne({ _id: workoutId });
        },
    },

    Mutation: {
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
