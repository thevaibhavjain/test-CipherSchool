const express = require('express');
const { submitTest } = require('../controllers/testController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const Test = require('../models/Test'); // Ensure that Test model is imported correctly

// router.post('/submit-test', protect, submitTest);

// router.post('/submit-test',protect, async (req, res) => {
//     const { answers } = req.body;
//     try {
//       const test = await Test.create({ user: req.user.id, answers });
//       res.status(201).json({ message: 'Test submitted successfully' });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });


router.post('/submit-test', protect, async (req, res) => {
    const { answers } = req.body; // Extract answers from the request body

    try {
        // Create a new test submission with the user's ID and the provided answers
        const test = await Test.create({ user: req.user.id, answers });

        // Respond with a success message if the submission is successful
        res.status(201).json({ message: 'Test submitted successfully' });
    } catch (error) {
        // Respond with an error message if something goes wrong
        res.status(400).json({ error: error.message });
    }
});


 
module.exports = router;


// router.post('/protect',async (req, res, next) => {
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }
  
//     if (!token) {
//       return res.status(401).json({ error: 'Not authorized' });
//     }
  
//     try {
//       const decoded = jwt.verify(token, 'vaibhav');
//       req.user = await User.findById(decoded.id).select('-password');
//       next();
//     } catch (error) {
//       res.status(401).json({ error: 'Token failed' });
//     }
//   });  


module.exports = router;