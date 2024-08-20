const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [{ questionId: String, answer: String }],
  score: { type: Number, default: null },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Test', testSchema);