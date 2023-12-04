const Exercise = require('../models/Exercise'); // Import your Exercise model

exports.getAllExercises = async (req, res) => {
  try {
    // Fetch all exercises from the database
    const exercises = await Exercise.find();
    
    res.status(200).json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    const exerciseId = req.params.exerciseId;
    // Fetch the exercise by its ID from the database
    
    res.status(200).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
