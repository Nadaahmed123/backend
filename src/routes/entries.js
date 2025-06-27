const express = require('express');
const router = express.Router();
const {
  getDailyEntries,
  upsertDailyEntry,
  deleteDailyEntry,
  getMonthlyAdvances
} = require('../controllers/entriesController');
const authMiddleware = require('../middlewares/auth');

// Route to get daily entries
router.get('/', authMiddleware, getDailyEntries);

// Route to create or update a daily entry
router.post('/', authMiddleware, upsertDailyEntry);

// Route to delete a daily entry by ID
router.delete('/:id', authMiddleware, deleteDailyEntry);

// Route to get monthly advances
router.get('/advances/:yearMonth', authMiddleware, getMonthlyAdvances);

module.exports = router;