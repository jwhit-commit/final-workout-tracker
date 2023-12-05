const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    workouts: [Workout]
}

type Workout {
    _id: ID
    day: String
  #  exercises: [Exercise]
}

input Exercise {
    name: String
    sets: [SetInput]
    equipment: String
    target: String
}

input SetInput {
    reps: Int
    weight: Int
    duration: Int
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(bodyPart: String!, exercises: [Exercise]): Workout
    updateWorkout(_id: ID!, exercises: [Exercise]): Workout
}
`;

module.exports = typeDefs;