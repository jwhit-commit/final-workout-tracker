const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');
const exerciseController = require('./controllers/ExerciseController');
const workoutController = require('./controllers/WorkoutController');

// User Routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile/:userId', userController.getProfile);

// Exercise Routes
router.get('/exercises', exerciseController.getAllExercises);
router.get('/exercises/:exerciseId', exerciseController.getExerciseById);

// Workout Routes
router.get('/workouts', workoutController.getAllWorkouts);
router.get('/workouts/:workoutId', workoutController.getWorkoutById);
router.post('/workouts', workoutController.createWorkout);

module.exports = router;
