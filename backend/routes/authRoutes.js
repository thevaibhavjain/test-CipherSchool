const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path to your User model
const jwt = require('jsonwebtoken');


router.post('/register',async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await User.create({ email, password });
        const token = jwt.sign({ id: user._id }, 'vaibhav', { expiresIn: '1h' });
        console.log("User Registered successfully");
        res.status(201).json({token });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

// Loggin in authentication
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ id: user._id },'vaibhav', { expiresIn: '1h' });
        // console.log("User Logged in");
        res.status(200).json({token});
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


module.exports = router;