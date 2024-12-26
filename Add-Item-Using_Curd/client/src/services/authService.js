import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Ensure your API URL is correct

// Signup function
export const signup = async (credentials) => {
  try {
    const { data } = await axios.post(`${API_URL}/signup`, credentials);
    if (data.token) {
      localStorage.setItem('authToken', data.token); // Store JWT in localStorage
    }
    return data; // Return the response data (e.g., token)
  } catch (error) {
    console.error('Signup failed:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : 'Signup failed. Please try again.');
  }
};

// Login function
export const login = async (credentials) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, credentials);
    if (data.token) {
      localStorage.setItem('authToken', data.token); // Store JWT in localStorage
    }
    return data; // Return the response data (e.g., token)
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : 'Login failed. Please try again.');
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem('authToken'); // Remove JWT from localStorage
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null; // Check if authToken exists in localStorage
};
