const express = require('express');
const router = express.Router();
const { submitTest } = require('../controllers/testController');
const { protect } = require('../middleware/authMiddleware');
const Test = require('../models/Test'); // Ensure that Test model is imported correctly
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit-test', protect ,async (req, res) => {
    const { answers } = req.body; // Extract answers from the request body

    try {
        // Create a new test submission with the user's ID and the provided answers
        const test = await Test.create({ user: req.user.id, answers });

        // Respond with a success message if the submission is successful
        res.status(201).json({ message: 'Test submitted successfully' });
    } catch (error) {
        // Respond with an error message if something goes wrong
        res.status(400).json({ error: error.message+"hi vaibhav " });
    }
});



module.exports = router;