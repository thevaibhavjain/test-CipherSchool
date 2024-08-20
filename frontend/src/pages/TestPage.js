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
        { questionId: '1', answer: 'B: 4' },
        { questionId: '2', answer: 'C: Paris' },
      ],
    };

    try {
      await submitTest(token, answers);
      navigate('/finish');
    } catch (error) {
      console.error(error);
      alert('Test submission failed.');
    }
  };

  return (
    <div>
      <h1>MCQ Test</h1>
      <CameraPreview />
      <MCQTest />
      <button onClick={handleSubmit}>Submit Test</button>
    </div>
  );
};

export default TestPage;
