import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        user {
            _id
            firstName
            lastName
            email
            workouts {
                _id
                day
                exercises {
                    name
                    sets {
                      reps
                      weight
                      duration
                    }
                    target
                  }
            }
        }
    }
`;

export const QUERY_WORKOUTS = gql`
    query getWorkouts {
        workouts {
            _id
            day
            exercises {
                name
                sets {
                  reps
                  weight
                  duration
                }
                target
              }
        }
    }
`;