import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPincodeDetails = async (pin) => {
  try {
    const response = await api.get(`/pincode/${pin}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch pincode details' };
  }
};

export const getAreaDetails = async (areaName) => {
  try {
    const response = await api.get(`/area/${areaName}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch area details' };
  }
};

export default api;
