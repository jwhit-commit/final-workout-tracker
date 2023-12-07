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




    export const CREATE_WORKOUT_MUTATION = gql`
    mutation createWorkout($name: String!) {    
        createWorkout(name: $name) {
            _id
            name
            day
            exercises {
                _id
                name
                sets {
                    reps
                    weight
                    duration
                }
               
            }
        }
    }
    `;

    export const ADD_EXERCISE_TO_WORKOUT_MUTATION = gql`
    mutation addExerciseToWorkout($workoutId: ID!, $exercise: ExerciseInput) {
        addExerciseToWorkout(workoutId: $workoutId, exercise: $exercise) {
            _id
            name
            day
            exercises {
                _id
                name
                sets {
                    reps
                    weight
                    duration
                }
               
            }
        }
    }
    `;

// export const REMOVE_WORKOUT = gql`
// mutation removeWorkout($id: ID!, $exercises: [Exercise]) {
//     removeWorkout(_id: $id, $exercises: $exercises){
//         _id
//         exercises {
//             name
//             sets {
//               reps
//               weight
//               duration
//             }
//             target
//           }
//         }
//       }
//     `;

// Mutation for adding an Exercise



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
