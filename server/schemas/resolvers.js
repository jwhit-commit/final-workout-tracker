const { ConnectionStates } = require('mongoose');
<<<<<<< HEAD
const { User, Workout, Exercise} = require('../models');
=======
const { User, Workout, Product, Order} = require('../models');
>>>>>>> main
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
          console.log(context.user);
          console.log(args)
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
            console.log(session);
            return { session: session.id };
          },
    },

    Mutation: {
        createWorkout: async (_, { name}, context) => {
            console.log(context);
            if(!context.user) {
                throw new Error("User not authenticated");
            }
            try {
                const workout = new Workout({
                    name,
                    day: new Date().toISOString(),
                    exercises: []
                })
                
                await workout.save();
                return workout;
            } catch(error) {
                console.log(error);
                throw new Error('Failed to create workout')
            }
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
