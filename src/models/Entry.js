const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  date: {
    type: String,
    required: true
  },
  cashAmount: {
    type: Number,
    default: 0
  },
  networkAmount: {
    type: Number,
    default: 0
  },
  purchasesAmount: {
    type: Number,
    default: 0
  },
  advanceAmount: {
    type: Number,
    default: 0
  },
  notes: {
    type: String,
    default: ''
  },
  total: {
    type: Number,
    default: 0
  },
  remaining: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;