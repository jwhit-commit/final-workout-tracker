import {
    LOGIN_USER,
    ADD_USER,
    ADD_WORKOUT,
    UPDATE_WORKOUT,
    REMOVE_WORKOUT
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
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
        default:
            return state;
    }
}