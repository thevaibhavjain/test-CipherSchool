const User = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
// exports.register = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.create({ email, password });
//     const token = jwt.sign({ id: user._id }, 'vaibhav', { expiresIn: '1h' });
//     console.log("User Registered successfully");
//     res.status(201).json({ token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// exports.register=router.post('/register',async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.create({ email, password });
//     const token = jwt.sign({ id: user._id }, 'vaibhav', { expiresIn: '1h' });
//     console.log("User Registered successfully");
//     res.status(201).json({ token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       const token = jwt.sign({ id: user._id },'vaibhav', { expiresIn: '1h' });
//       console.log("User Logged in");
//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid email or password' });
//     }
//   } catch (error) {
    // res.status(400).json({ error: error.message });
//   }
// };


// router.post('/register',async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.create({ email, password });
//     const token = jwt.sign({ id: user._id }, 'vaibhav', { expiresIn: '1h' });
//     console.log("User Registered successfully");
//     res.status(201).json({token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

