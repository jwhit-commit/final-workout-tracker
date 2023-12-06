const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    workouts: [Workout]
    orders: [Order]
}

type Workout {
    _id: ID
    day: String
    bodyPart: String
  #  exercises: [Exercise]
}

input Exercise {
    name: String
    sets: Int
    reps: Int
    weight: Int
    duration: Int
    equipment: String
    target: String
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

type Auth {
    token: ID!
    user: User
}

input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

type Checkout {
    session: ID
  }

type Query {
    users: [User]
    user(username: String!): User
    products(name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(bodyPart: String!, exercises: [Exercise]): Workout
    updateWorkout(_id: ID!, exercises: [Exercise]): Workout
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
}
`;

module.exports = typeDefs;