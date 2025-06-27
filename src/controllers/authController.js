// filepath: /my-express-backend/my-express-backend/src/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

// Register user
exports.register = async (req, res) => {
    const { username, password, email } = req.body; // <-- add email

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }
        const existing = await User.findOne({ $or: [{ email }, { username }] });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email }); // <-- add email
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Register error:", error); // اطبع الخطأ في اللوج
        res.status(500).json({
            message: 'Error registering user',
            error: error.message || error
        });
    }
};

// Logout user
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out' });
};

// Get current user
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