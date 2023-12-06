import {gql} from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            _id
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $firstName: String!, 
    $lastName: String!,
    $email: String!, 
    $password: String!) {
    addUser(
        firstName: $firstName,
        lastName: $lastName,
        email: $email, 
        password: $password
        ) {
        token
        user{
            _id
        }
    }
}
`;

export const ADD_WORKOUT = gql`
mutation addWorkout($bodyPart: String!, $exercises: [Exercise]) {
    addWorkout(bodyPart: $bodyPart, exercises: $exercises){
        _id
        bodyPart
        exercises{
            name
            sets
            reps
            weight
            duration
            equipment
            target
        }
    }
}
`;

export const UPDATE_WORKOUT = gql`
mutation updateWorkout($id: ID!, $exercises: [Exercise]) {
    updateWorkout(_id: $id, exercises: $exercises){
        _id
        bodyPart
        exercises{
            name
            sets
            reps
            weight
            duration
            equipment
            target
        }
    }
}
`;

export const REMOVE_WORKOUT = gql`
mutation removeWorkout($id: ID!) {
    removeWorkout(_id: $id){
        _id
        bodyPart
        exercises{
            name
            sets
            reps
            weight
            duration
            equipment
            target
        }
    }
}
`;

export const ADD_EXERCISE = gql`
mutation addExercise($id: ID!, $exercise: Exercise) {
    addExercise(_id: $id, exercise: $exercise){
        _id
        bodyPart
        exercises{
            name
            sets
            reps
            weight
            duration
            equipment
            target
        }
    }
}
`;

export const REMOVE_EXERCISE = gql`
mutation removeExercise($id: ID!, $exercise: Exercise) {
    removeExercise(_id: $id, exercise: $exercise){
        _id
        bodyPart
        exercises{
            name
            sets
            reps
            weight
            duration
            equipment
            target
        }
    }
}
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
      }
    }
  }
`;