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
    addExerciseToWorkout(workoutId: ID!, exercise: ExerciseInput!): Workout!
    createWorkout(name: String!): Workout!

    updateWorkout(_id: ID!, exercises: [ExerciseInput]!): Workout
        addExercise(
          name: String!
          sets: [ExerciseInput]!
          target: String!
        ): Exercise
}
`;

module.exports = typeDefs;