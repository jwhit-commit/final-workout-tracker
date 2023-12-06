const { ConnectionStates } = require('mongoose');
const { User, Workout, Product} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('workouts')
                .populate('orders');
                user.workouts.sort((a, b) => b.createdAt - a.createdAt);
                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

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
        products: async () => {
          return await Product.find();
          },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
          },
        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category',
              });
      
              return user.orders.id(_id);
            }
      
            throw AuthenticationError;
          },

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            // We map through the list of products sent by the client to extract the _id of each item and create a new Order.
            await Order.create({ products: args.products.map(({ _id }) => _id) });
            const line_items = [];
      
            for (const product of args.products) {
              line_items.push({
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: product.name,
                    description: product.description,
                    images: [`${url}/images/${product.image}`],
                  },
                  unit_amount: product.price * 100,
                },
                quantity: product.purchaseQuantity,
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`,
            });
      
            return { session: session.id };
          },
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
        addOrder: async (parent, { products }, context) => {
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, {
                $push: { orders: order },
              });
      
              return order;
            }
      
            throw AuthenticationError;
          },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Product.findByIdAndUpdate(
              _id,
              { $inc: { quantity: decrement } },
              { new: true }
            );
          },
    },
    };

module.exports = resolvers;
