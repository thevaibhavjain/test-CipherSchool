
import React from 'react';
import CameraPreview from '../components/CameraPreview';
import MCQTest from '../components/MCQTest';
import { submitTest } from '../api';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const answers = {
      answers: [
          { questionId: '1', answer: 'B: Frontend development' },
          { questionId: '2', answer: 'A: setState()' },
          { questionId: '3', answer: 'A: JavaScript XML' },
          { questionId: '4', answer: 'B: http' },
          { questionId: '5', answer: 'A: readFileSync()' },
          { questionId: '6', answer: 'A: To manage state and lifecycle in functional components' },
          { questionId: '7', answer: 'A: useEffect' },
          { questionId: '8', answer: 'A: Loads modules' },
          { questionId: '9', answer: 'A: create-react-app' },
          { questionId: '10', answer: 'A: A property passed to components' },
      ],
  };
  
    try {
      const data = await submitTest(token, answers); // Capture the response data
      navigate(data.redirectTo); // Navigate to the finish page based on the backend response
    } catch (error) {
      console.error(error);
      alert('Test submission failed.');
    }
  };

  return (
    <div>
      <CameraPreview />
      <MCQTest />
      <button  style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
         onClick={handleSubmit}>Submit Test</button>
    </div>
  );
};
const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginTop: '20px',
  backgroundColor: '#f3912e',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#d8771a', 
};
export default TestPage;
