import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) 
    {
        user(username: $username) {
            _id
            username
            email
            workouts {
                _id
                day
                bodyPart
                exercises {
                    _id
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
    }
`;

export const QUERY_WORKOUTS = gql`
    query getWorkouts {
        workouts {
            _id
            day
            bodyPart
            exercises {
                _id
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