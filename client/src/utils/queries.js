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

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
    }
  }
`;