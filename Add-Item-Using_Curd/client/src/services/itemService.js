import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const addItem = (formData) => axios.post(`${API_URL}/addItem`, formData);
export const getItems = () => axios.get(`${API_URL}/getAllItems`);
export const getItem = (id) => axios.get(`${API_URL}/getOneItem/${id}`);
export const updateItem = (id, updatedData) => axios.put(`${API_URL}/updateItem/${id}`, updatedData);
export const deleteItem = (id) => axios.delete(`${API_URL}/deleteItem/${id}`);
