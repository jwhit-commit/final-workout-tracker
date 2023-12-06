const db = require('../config/connection');
const { User, Product } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
//   await cleanDB('Product', 'products');
//   await cleanDB('User', 'users');


  const products = await Product.insertMany([
    {
      name: 'Protein Drink',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'protein-drink.jpg',
      price: 2.99,
      quantity: 500
    },
    {
        name: 'Protein bar',
        description:
          'Litora torquent per conubia pqowij, sdiw woijf skkaoe.',
        image: 'protein-bar.jpg',
        price: 4.99,
        quantity: 100
      }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
