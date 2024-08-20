import React, { useState } from 'react';

const MCQTest = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: '1', question: 'What is 2 + 2?', options: ['A: 3', 'B: 4', 'C: 5'] },
    { id: '2', question: 'What is the capital of France?', options: ['A: Berlin', 'B: Madrid', 'C: Paris'] },
  ];

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                onChange={() => handleChange(q.id, option)}
              />
              {option}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MCQTest;
