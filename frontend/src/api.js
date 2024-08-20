import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

// export const submitTest = async (token, testAnswers) => {
//   const response = await axios.post(`${API_URL}/test/submit-test`, testAnswers, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
//   return response.data;
// };

export const submitTest = async (token, answers) => {
  const response = await fetch('http://localhost:5000/api/submit-test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(answers),
  });

  if (!response.ok) {
    throw new Error('Test submission failed');
  }

  const data = await response.json();
  return data; // Return the response data
};
