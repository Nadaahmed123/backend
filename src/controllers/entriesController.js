const Entry = require('../models/Entry');

// Get daily entries
exports.getDailyEntries = async (req, res) => {
    try {
        const entries = await Entry.find({ userId: req.user._id });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create or update a daily entry
exports.upsertDailyEntry = async (req, res) => {
    try {
        const { date } = req.body;
        let entry = await Entry.findOne({ userId: req.user._id, date });
        if (entry) {
            // Update
            Object.assign(entry, req.body);
            await entry.save();
            return res.status(200).json(entry);
        } else {
            // Create
            entry = new Entry({ ...req.body, userId: req.user._id });
            await entry.save();
            return res.status(201).json(entry);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a daily entry by ID
exports.deleteDailyEntry = async (req, res) => {
    try {
        const entry = await Entry.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.status(200).json({ message: 'Entry deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get monthly advances
exports.getMonthlyAdvances = async (req, res) => {
    try {
        const { yearMonth } = req.params; // e.g., '2024-06'
        const regex = new RegExp(`^${yearMonth}`);
        const advances = await Entry.find({
            userId: req.user._id,
            date: { $regex: regex }
        });
        res.status(200).json(advances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};