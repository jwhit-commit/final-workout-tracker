const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]
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

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(bodyPart: String!, exercises: [Exercise]): Workout
    updateWorkout(_id: ID!, exercises: [Exercise]): Workout
}
`;

module.exports = typeDefs;