const cron = require('node-cron');
const Test = require('../models/Test');
const sendEmail = require('../utils/emailService');

cron.schedule('0 * * * *', async () => {
  try {
    const tests = await Test.find({ score: null });

    tests.forEach(async (test) => {
      const score = evaluateTest(test.answers); // Implement this function
      test.score = score;
      await test.save();

      const user = await User.findById(test.user);
      sendEmail(user.email, 'Your Test Score', `Your score is: ${score}`);
    });
  } catch (error) {
    console.error('Error evaluating tests', error);
  }
});

const evaluateTest = (answers) => {
  // Implement logic to calculate score based on answers
  return Math.floor(Math.random() * 100); // Example random score
};