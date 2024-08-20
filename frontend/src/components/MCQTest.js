import React, { useState } from 'react';
import './MCQTest.css';
const MCQTest = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: '1', question: 'What is React.js primarily used for?', options: ['A: Backend development', 'B: Frontend development', 'C: Database management'] },
    { id: '2', question: 'Which method is used to update the state in a React component?', options: ['A: setState()', 'B: updateState()', 'C: modifyState()'] },
    { id: '3', question: 'What does JSX stand for?', options: ['A: JavaScript XML', 'B: JavaScript Extension', 'C: JavaScript Execution'] },
    { id: '4', question: 'In Node.js, which module is used to handle HTTP requests?', options: ['A: fs', 'B: http', 'C: path'] },
    { id: '5', question: 'Which method is used to read a file in Node.js?', options: ['A: readFileSync()', 'B: readFile()', 'C: getFile()'] },
    { id: '6', question: 'What is the purpose of React Hooks?', options: ['A: To manage state and lifecycle in functional components', 'B: To manage routing', 'C: To handle user authentication'] },
    { id: '7', question: 'Which React hook is used to manage side effects?', options: ['A: useEffect', 'B: useState', 'C: useContext'] },
    { id: '8', question: 'In Node.js, what does the "require()" function do?', options: ['A: Loads modules', 'B: Sends HTTP requests', 'C: Handles file operations'] },
    { id: '9', question: 'Which command is used to create a new React application?', options: ['A: create-react-app', 'B: npm start', 'C: react-init'] },
    { id: '10',question: 'In React, what is a “prop”?', options: ['A: A property passed to components', 'B: A state variable', 'C: A method for data fetching'] },
];


  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  return (
    <div className='mcq-container'>
      <h1> MCQ TEST </h1>
      {questions.map((q) => (
        <div key={q.id} className='question'>
          <p>{q.question}</p>
          {q.options.map((option) => (
            <div key={option} className="option-container">
               <label className="option">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                onChange={() => handleChange(q.id, option)}
              />
              {option}
            </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};



export default MCQTest;
