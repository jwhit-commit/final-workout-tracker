const User = require('../models/User'); // Import your User model
const jwt = require('jsonwebtoken'); // For handling JWT tokens

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Perform user registration logic (e.g., validation, password hashing)
    
    // Create a new user and save it to the database
    const user = new User({ username, email, password });
    await user.save();
    
    // Create a JWT token and send it in the response
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Perform user login logic (e.g., validation, password verification)

    // Find the user by email and verify the password
    const user = await User.findOne({ email });
    if (!user || !user.verifyPassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token and send it in the response
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    // Fetch the user's profile information from the database
    
    res.status(200).json({ user: profileData }); // Replace profileData with the user's data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
