// filepath: /my-express-backend/my-express-backend/src/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

// ...existing code...
exports.register = async (req, res) => {
    const { username, password, email } = req.body; // <-- add email

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email }); // <-- add email
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};
// ...existing code...
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out' });
};

exports.getCurrentUser = (req, res) => {
  res.status(200).json({ message: 'Current user' });
};

// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.generateToken(user._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};