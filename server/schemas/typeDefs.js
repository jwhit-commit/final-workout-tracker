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
    _id: ID!
    name: String!
    day: String!
    exercises: [Exercise]!
}


type Exercise {
    _id: ID!
    name: String!
    sets: [ExerciseSet!]!
    
}
type ExerciseSet {
    reps: Int!
    weight: Int!
    duration: Int!
}

input ExerciseInput {
    name: String!
    sets: [ExerciseSetInput!]!
    target: String
}

input ExerciseSetInput {
    reps: Int!
    weight: Int!
    duration: Int!
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
    products: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExerciseToWorkout(workoutId: ID!, exercise: ExerciseInput!): Workout!
    createWorkout(name: String!): Workout!

    updateWorkout(_id: ID!, exercises: [ExerciseInput]!): Workout
        addExercise(
          name: String!
          sets: [ExerciseInput]!
          target: String!
        ): Exercise
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
}
`;

module.exports = typeDefs;