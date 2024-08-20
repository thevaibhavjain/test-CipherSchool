const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');
const cronJobs = require('./jobs/evaluateTests'); // Ensure cron jobs are initiated
const cors = require('cors');
const app = express();

connectDB();
app.use(express.json());


  app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's URL if different
  }));
  app.use('/api/auth', require('./routes/authRoutes'));
  // app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

app.get('/',function(req,res){
    res.send("Hi Vaibhav How are you")
})

module.exports = app;