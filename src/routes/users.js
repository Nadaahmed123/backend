const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getAllUsers
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

router.get('/:id', authMiddleware, getUserProfile);
router.put('/:id', authMiddleware, updateUserProfile);
router.delete('/:id', authMiddleware, deleteUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;