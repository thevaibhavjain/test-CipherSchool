const { router } = require('../app');
const Test = require('../models/Test');

// const submitTest = async (req, res) => {
//   const { answers } = req.body;
//   try {
//     const test = await Test.create({ user: req.user.id, answers });
//     res.status(201).json({ message: 'Test submitted successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


