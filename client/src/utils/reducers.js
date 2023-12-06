import {
    LOGIN,
    ADD_USER,
    ADD_WORKOUT,
    UPDATE_WORKOUT,
    REMOVE_WORKOUT,
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            };
        case ADD_WORKOUT:
            return {
                ...state,
                workouts: [...state.workouts, action.payload]
            };
        case UPDATE_WORKOUT:
            const updatedWorkout = action.payload;
            const updatedWorkouts = state.workouts.map(workout => {
                if (workout._id === updatedWorkout._id) {
                    return updatedWorkout;
                }
                return workout;
            });
            return {
                ...state,
                workouts: updatedWorkouts
            };
        case REMOVE_WORKOUT:
            return {
                ...state,
                workouts: state.workouts.filter(workout => {
                    return workout._id !== action.payload._id;
                })
            };
        case UPDATE_PRODUCTS:
        return {
            ...state,
            products: [...action.products],
        };

        case ADD_TO_CART:
        return {
            ...state,
            cartOpen: true,
            cart: [...state.cart, action.product],
        };

        case ADD_MULTIPLE_TO_CART:
        return {
            ...state,
            cart: [...state.cart, ...action.products],
        };

        case UPDATE_CART_QUANTITY:
        return {
            ...state,
            cartOpen: true,
            cart: state.cart.map(product => {
            if (action._id === product._id) {
                product.purchaseQuantity = action.purchaseQuantity
            }
            return product
            })
        };

        case REMOVE_FROM_CART:
        let newState = state.cart.filter(product => {
            return product._id !== action._id;
        });

        return {
            ...state,
            cartOpen: newState.length > 0,
            cart: newState
        };

        case CLEAR_CART:
        return {
            ...state,
            cartOpen: false,
            cart: []
        };

        case TOGGLE_CART:
        return {
            ...state,
            cartOpen: !state.cartOpen
        };
        default:
            return state;
    }
}